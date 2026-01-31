const fs = require('fs');
const path = require('path');

try {
    // Read from root directory (parent of scripts/)
    // Assuming we run this from root: node scripts/build.js
    const template = fs.readFileSync('index.html', 'utf8');

    // Create results directory if it doesn't exist
    const resultsDir = path.join(__dirname, '../results');
    if (!fs.existsSync(resultsDir)) {
        fs.mkdirSync(resultsDir);
    }

    const careers = {
        frontend: {
            title: 'O Fiscal da Estética',
            desc: 'Tudo que é bonitinho e clicável. Ele vive para garantir que o usuário não tenha um colapso tentando achar um botão.'
        },
        backend: {
            title: 'O Mestre das Engrenagens',
            desc: 'Onde o filho chora e a mãe não vê. É a lógica pura, os servidores que fritam de madrugada e o banco de dados que é o coração de tudo.'
        },
        data: {
            title: 'O Sherlock dos Dados',
            desc: 'Torturar os números até eles confessarem a verdade. É o mago das planilhas infinitas e das IAs que vão (ou não) dominar o mundo.'
        },
        qa: {
            title: 'O Caça-Tretas',
            desc: 'Destruir o que os outros criaram (mas para o bem deles!). Encontra buracos na segurança e bugs onde ninguém imaginava.'
        },
        mobile: {
            title: 'O Arquiteto de Diversão',
            desc: 'Criar apps que viciam e jogos que fazem a gente perder a noção da hora. O foco é a palma da mão.'
        },
        pm: {
            title: 'O Dono do Rolê',
            desc: 'O meio de campo entre o cliente que não sabe o que quer e o dev que não quer ser incomodado. Organiza as tarefas para ninguém surtar.'
        }
    };

    console.log('Building career pages...');

    for (const [slug, info] of Object.entries(careers)) {
        let html = template;

        // 1. Title
        html = html.replace(
            '<title>Perfil Tech | Descubra seu perfil na Tecnologia</title>',
            `<title>Perfil Tech: ${info.title}</title>`
        );

        // 2. OG Title
        html = html.replace(
            'property="og:title" content="Perfil Tech 🧭"',
            `property="og:title" content="Sou: ${info.title}!"`
        );

        // 3. OG Description
        html = html.replace(
            'property="og:description" content="Responda algumas perguntas e descubra seu perfil Tech na tecnologia."',
            `property="og:description" content="${info.desc}"`
        );

        // 4. OG Image (Custom Image from assets/share/)
        // URL must be absolute for Social Networks usually
        html = html.replace(
            /content="https:\/\/placehold\.co\/.*?\?text=Vocacao\+Tech\+Finder"/,
            `content="https://galanti94.github.io/assets/share/${slug}.png"`
        );

        // 5. Twitter Logic
        html = html.replace(
            'content="Perfil Tech 🧭"',
            `content="Sou: ${info.title}!"`
        );
        html = html.replace(
            'content="Descubra seu perfil Tech na tecnologia."',
            `content="${info.desc}"`
        );
        html = html.replace(
            /content="https:\/\/placehold\.co\/.*?\?text=Vocacao\+Tech\+Finder"/,
            `content="https://galanti94.github.io/assets/share/${slug}.png"`
        );

        // 6. Fix Relative Paths for Subdirectory (results/)
        // index.html uses css/style.css -> we need ../css/style.css
        html = html.replace('href="css/style.css"', 'href="../css/style.css"');
        html = html.replace('src="js/data.js"', 'src="../js/data.js"');
        html = html.replace('src="js/script.js"', 'src="../js/script.js"');

        // Write file to results directory
        fs.writeFileSync(path.join(resultsDir, `${slug}.html`), html, 'utf8');
        console.log(`- Generated results/${slug}.html`);
    }
    console.log('Build complete.');

} catch (error) {
    console.error('Build failed:', error);
}
