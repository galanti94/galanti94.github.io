// Game state
let questions = [];
let careers = {};
let currentQuestionIndex = 0;
let userScores = { frontend: 0, backend: 0, data: 0, ux: 0, mobile: 0, qa: 0, pm: 0 };
const cardStack = document.getElementById('card-stack');

// Initialize
function init() {
    loadData();
    document.getElementById('btn-start').addEventListener('click', startGame);

    // Check if we are on a specific result page
    checkDirectPageAccess();
}

function checkDirectPageAccess() {
    const path = window.location.pathname;
    const page = path.split('/').pop().replace('.html', '');

    // List of valid career slugs
    const validCareers = ['frontend', 'backend', 'data', 'qa', 'mobile', 'pm'];

    if (validCareers.includes(page)) {
        // We are on a result page!
        // Wait for data to load then show result
        // Since loadData is sync (DOM script reference), we can try immediately or set a small timeout if data.js wasn't ready (but it is included before script.js usually or sync).
        // Actually loadData just sets variables.

        // We need to bypass the game
        setTimeout(() => {
            showResults(page);
        }, 100);
    }
}

function loadData() {
    if (typeof GAME_DATA !== 'undefined') {
        questions = GAME_DATA.questions;
        careers = GAME_DATA.results;
    } else {
        alert('Erro ao carregar data.js. Verifique os arquivos.');
    }
}

function startGame() {
    if (questions.length === 0) {
        alert('Carregando dados... aguarde um instante.');
        return;
    }

    // Hide Intro
    const intro = document.getElementById('intro-screen');
    intro.classList.add('hidden');

    // Show Game Interface
    document.getElementById('game-header').classList.remove('hidden');
    document.getElementById('card-stack').classList.remove('hidden');
    document.querySelector('.controls').classList.remove('hidden');

    renderCards();
    setupControls();
}

function renderCards() {
    // Reverse order so the first question is on top (last in DOM)
    [...questions].reverse().forEach((q, index) => {
        createCard(q, index);
    });
}

function createCard(question, index) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('data-id', question.id);
    card.style.zIndex = index; // Lower index = lower z-index (correct for reverse loop)

    card.innerHTML = `
        <div class="card-status status-like">SIM</div>
        <div class="card-status status-nope">NÃO</div>
        <i class="${question.icon} icon"></i>
        <h3>${question.text}</h3>
    `;

    cardStack.appendChild(card);

    // Make the topmost card draggable
    if (index === questions.length - 1) {
        initDraggable(card);
    }
}

function initDraggable(element) {
    let isDragging = false;
    let startX = 0;
    let currentX = 0;

    const onMouseDown = (e) => {
        isDragging = true;
        startX = e.clientX || e.touches[0].clientX;
        element.style.transition = 'none';

        // Hide instruction overlay on first interaction
        const overlay = document.getElementById('instruction-overlay');
        if (overlay) overlay.style.display = 'none';

        // Add move/up listeners only when dragging starts
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
        document.addEventListener('touchmove', onMouseMove);
        document.addEventListener('touchend', onMouseUp);
    };

    const onMouseMove = (e) => {
        if (!isDragging) return;
        const x = (e.clientX || (e.touches && e.touches[0].clientX));
        if (x === undefined) return; // Basic safety

        currentX = x - startX;

        // Rotation and Translation
        const rotate = currentX * 0.1;
        element.style.transform = `translateX(${currentX}px) rotate(${rotate}deg)`;

        // Opacity of status indicators
        const like = element.querySelector('.status-like');
        const nope = element.querySelector('.status-nope');

        if (currentX > 0) {
            like.style.opacity = Math.min(currentX / 100, 1);
            nope.style.opacity = 0;
            element.style.background = `rgba(16, 185, 129, ${Math.min(currentX / 1000, 0.2)})`; // Green Tint
        } else {
            nope.style.opacity = Math.min(Math.abs(currentX) / 100, 1);
            like.style.opacity = 0;
            element.style.background = `rgba(239, 68, 68, ${Math.min(Math.abs(currentX) / 1000, 0.2)})`; // Red Tint
        }
    };

    const onMouseUp = (e) => {
        if (!isDragging) return;
        isDragging = false; // Stop drag logic immediately

        // Remove listeners
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('touchmove', onMouseMove);
        document.removeEventListener('touchend', onMouseUp);

        element.style.transition = 'transform 0.3s ease-out, opacity 0.3s';

        const threshold = 100; // px to commit swipe

        if (currentX > threshold) {
            swipeComplete(element, 'right');
        } else if (currentX < -threshold) {
            swipeComplete(element, 'left');
        } else {
            // Reset
            element.style.transform = 'translateX(0) rotate(0)';
            element.querySelector('.status-like').style.opacity = 0;
            element.querySelector('.status-nope').style.opacity = 0;
            element.style.background = ''; // Clear inline background to use CSS default
        }
    };

    // Start with just mousedown/touchstart
    element.addEventListener('mousedown', onMouseDown);
    element.addEventListener('touchstart', onMouseDown);
    // Move/Up are added in onMouseDown
}

function swipeComplete(card, direction) {
    const questionId = card.getAttribute('data-id');
    const question = questions.find(q => q.id == questionId);

    // Ensure smooth transition if clicked via button or just released
    // Added background to transition so color fades in successfully
    card.style.transition = 'transform 0.5s ease-out, opacity 0.5s, background 0.5s';

    if (direction === 'right') {
        // Add scores
        for (const [key, value] of Object.entries(question.scores)) {
            userScores[key] = (userScores[key] || 0) + value;
        }
        card.style.transform = `translateX(1000px) rotate(30deg)`;
        card.querySelector('.status-like').style.opacity = 1; // Show badge
        card.style.background = 'rgba(16, 185, 129, 0.2)'; // Green Tint (matches Drag max)
    } else {
        card.style.transform = `translateX(-1000px) rotate(-30deg)`;
        card.querySelector('.status-nope').style.opacity = 1; // Show badge
        card.style.background = 'rgba(239, 68, 68, 0.2)'; // Red Tint (matches Drag max)
    }

    card.style.opacity = 0;

    setTimeout(() => {
        card.remove();
        currentQuestionIndex++;

        const cards = document.querySelectorAll('.card');
        if (cards.length > 0) {
            // Make next card draggable
            const nextCard = cards[cards.length - 1]; // Topmost
            initDraggable(nextCard);
        } else {
            showResults();
        }
    }, 300);
}

// Button controls
function setupControls() {
    document.getElementById('btn-nope').addEventListener('click', () => {
        const cards = document.querySelectorAll('.card');
        if (cards.length > 0) swipeComplete(cards[cards.length - 1], 'left');
    });

    document.getElementById('btn-like').addEventListener('click', () => {
        const cards = document.querySelectorAll('.card');
        if (cards.length > 0) swipeComplete(cards[cards.length - 1], 'right');
    });

    document.getElementById('btn-restart').addEventListener('click', () => {
        // If on a sub-page, go home. If on index, reload.
        const path = window.location.pathname;
        if (path.endsWith('index.html') || path.endsWith('/')) {
            location.reload();
        } else {
            window.location.href = '../index.html'; // Go up one level from 'results/'
        }
    });

    // Share Buttons
    document.getElementById('btn-share-linkedin').addEventListener('click', () => shareResult('linkedin'));
    document.getElementById('btn-share-whatsapp').addEventListener('click', () => shareResult('whatsapp'));
    document.getElementById('btn-download').addEventListener('click', downloadResultImage);
}

function downloadResultImage() {
    const element = document.querySelector('.result-content');
    const originalBtnText = document.querySelector('.courses-section h3').innerText; // Just a marker

    // Use html2canvas
    html2canvas(element, {
        backgroundColor: '#F0F2F5', // Match app background
        scale: 2, // High resolution
        useCORS: true, // For images
        onclone: (clonedDoc) => {
            // Add Watermark to the clone
            const cloneElement = clonedDoc.querySelector('.result-content');

            // 1. Create Watermark Element
            const watermark = clonedDoc.createElement('div');
            watermark.style.position = 'absolute';
            watermark.style.bottom = '10px';
            watermark.style.right = '10px';
            watermark.style.fontSize = '14px';
            watermark.style.color = 'rgba(0,0,0,0.3)';
            watermark.style.fontWeight = 'bold';
            watermark.style.zIndex = '999';
            watermark.innerText = 'galanti94.github.io';

            // Ensure relative positioning on parent so absolute works
            cloneElement.style.position = 'relative';
            cloneElement.appendChild(watermark);

            // 2. Hide buttons in the clone (we don't want them in the image)
            const buttons = clonedDoc.getElementById('share-buttons');
            const restartBtn = clonedDoc.getElementById('btn-restart');
            const courses = clonedDoc.querySelector('.courses-section');

            if (buttons) buttons.style.display = 'none';
            if (restartBtn) restartBtn.style.display = 'none';
            if (courses) courses.style.display = 'none';

            // 3. Make rectangle nicer? (Optional)
            cloneElement.style.borderRadius = '0'; // Flat for image? Or keep rounded. keeping as is.
        }
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'minha-vocacao-tech.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
}

function shareResult(platform) {
    const titleEl = document.getElementById('career-title');
    const resultTitle = titleEl.innerText;
    const resultDesc = document.getElementById('career-description').innerText;

    // Determine the career Slug based on title (Simple map or lookup)
    const slug = document.getElementById('result-screen').getAttribute('data-career-slug') || 'frontend'; // fallback

    // New Text Format: Title + Description (Vibe) + CTA + Link
    // URL updated to point to App Root
    const text = `Meu perfil tech: ${resultTitle} 🚀\n\n${resultDesc}\n\nDescubra sua vocação tech aqui: https://galanti94.github.io`;
    const url = `https://galanti94.github.io`;

    if (platform === 'linkedin') {
        // LinkedIn doesn't support pre-filled text in the same way as WA, usually just URL. 
        // But we can try the feed share URL or just share the article.
        // Best bet for "text" is to rely on user typing it, OR use the old API if it works.
        // Let's standard share URL.
        const linkedinUrl = `https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(text)}`;
        window.open(linkedinUrl, '_blank');
    } else if (platform === 'whatsapp') {
        const waUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
        window.open(waUrl, '_blank');
    }
}

function showResults(forceCareerKey = null) {
    document.querySelector('.controls').style.display = 'none';
    document.getElementById('intro-screen').classList.add('hidden'); // Ensure intro is gone
    document.getElementById('game-header').style.display = 'none';

    // Calculate top career OR use forced key
    let topCareerKey;

    if (forceCareerKey) {
        topCareerKey = forceCareerKey;
    } else {
        const sortedCareers = Object.entries(userScores).sort(([, a], [, b]) => b - a);
        topCareerKey = sortedCareers[0][0];
    }

    const topCareer = careers[topCareerKey] || careers['frontend']; // Fallback

    const resultScreen = document.getElementById('result-screen');
    resultScreen.setAttribute('data-career-slug', topCareerKey); // Store slug for sharing logic

    const titleEl = document.getElementById('career-title');
    const descEl = document.getElementById('career-description');
    const listEl = document.getElementById('course-list');

    titleEl.innerText = topCareer.title;
    descEl.innerText = topCareer.description;

    // Keywords
    // Keywords removed as per user request
    /*
    const keywordsContainer = document.getElementById('career-keywords');
    if (keywordsContainer) keywordsContainer.innerHTML = '';
    */

    listEl.innerHTML = topCareer.courses.map(course => {
        const isSpecial = course.title.includes('Vaca Roxa');
        const extraClass = isSpecial ? 'special-feature' : '';
        const iconStyle = isSpecial ? 'color: #FFD700;' : ''; // Gold icon override

        return `
        <a href="${course.url}" target="_blank" class="course-item ${extraClass}">
            <div class="course-icon" style="${isSpecial ? 'background: rgba(255,255,255,0.2);' : ''}">
                <i class="${course.icon}" style="${iconStyle}"></i>
            </div>
            <div class="course-info">
                <h4 style="${isSpecial ? 'color: #FFD700; text-shadow: 0 2px 4px rgba(0,0,0,0.3);' : ''}">${course.title}</h4>
                <p style="${isSpecial ? 'color: rgba(255,255,255,0.9);' : ''}">${course.provider}</p>
            </div>
            <i class="fa-solid fa-chevron-right" style="margin-left: auto; ${isSpecial ? 'color: rgba(255,255,255,0.6);' : 'color: #94a3b8;'}"></i>
        </a>
    `}).join('');

    resultScreen.classList.remove('hidden');
}

init();
