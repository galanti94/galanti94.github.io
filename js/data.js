const GAME_DATA = {
    "questions": [
        {
            "id": 1,
            "text": "Passar horas caçando um erro no código até descobrir que era apenas um ponto e vírgula faltando.",
            "icon": "fa-solid fa-bug",
            "scores": { "backend": 3, "qa": 2, "data": 1, "frontend": 0, "mobile": 0, "pm": 0 }
        },
        {
            "id": 2,
            "text": "Ficar agoniado quando entra num site onde os botões estão tortos ou as cores não combinam.",
            "icon": "fa-solid fa-paintbrush",
            "scores": { "frontend": 3, "ux": 3, "mobile": 1, "backend": -1, "data": 0, "pm": 0 }
        },
        {
            "id": 3,
            "text": "Tentar prever quem vai ganhar o campeonato baseado apenas em estatísticas e resultados passados.",
            "icon": "fa-solid fa-chart-line",
            "scores": { "data": 3, "backend": 1, "pm": 0, "frontend": 0, "mobile": 0, "qa": 0 }
        },
        {
            "id": 4,
            "text": "Ser a pessoa que organiza a viagem do grupo, faz o roteiro e garante que ninguém se atrase.",
            "icon": "fa-solid fa-list-check",
            "scores": { "pm": 3, "ux": 1, "backend": 0, "frontend": 0, "data": 0, "qa": 0 }
        },
        {
            "id": 5,
            "text": "Tentar 'quebrar' as coisas só para ver como elas funcionam por dentro ou se são seguras.",
            "icon": "fa-solid fa-hammer",
            "scores": { "qa": 3, "backend": 2, "pm": 0, "frontend": 0, "data": 1, "mobile": 0 }
        },
        {
            "id": 6,
            "text": "Criar algo que as pessoas possam usar no celular enquanto estão no ônibus ou na fila do pão.",
            "icon": "fa-solid fa-mobile-screen",
            "scores": { "mobile": 3, "frontend": 2, "ux": 2, "backend": 0, "pm": 0, "data": 0 }
        },
        {
            "id": 7,
            "text": "Explicar conceitos técnicos difíceis para a sua avó entender de um jeito simples.",
            "icon": "fa-solid fa-chalkboard-user",
            "scores": { "pm": 3, "ux": 2, "frontend": 1, "backend": 0, "data": 0, "qa": 0 }
        },
        {
            "id": 8,
            "text": "Preferir trabalhar nos bastidores, garantindo que o sistema aguente milhões de acessos.",
            "icon": "fa-solid fa-server",
            "scores": { "backend": 3, "data": 1, "qa": 1, "frontend": -1, "mobile": 0, "pm": 0 }
        },
        {
            "id": 9,
            "text": "Passar o tempo livre testando novos filtros, fontes e layouts para deixar tudo visualmente incrível.",
            "icon": "fa-solid fa-palette",
            "scores": { "frontend": 3, "ux": 3, "mobile": 1, "backend": -1, "data": 0, "pm": 0 }
        },
        {
            "id": 10,
            "text": "Ficar fascinado como os algoritmos das redes sociais parecem ler a sua mente.",
            "icon": "fa-solid fa-brain",
            "scores": { "data": 3, "backend": 2, "mobile": 0, "frontend": 0, "pm": 0, "qa": 0 }
        },
        {
            "id": 11,
            "text": "Ler as letras miúdas dos termos de uso e se preocupar com quem está vendo seus dados.",
            "icon": "fa-solid fa-shield-halved",
            "scores": { "qa": 3, "backend": 2, "data": 2, "frontend": 0, "mobile": 0, "pm": 0 }
        },
        {
            "id": 12,
            "text": "Sonhar em criar o próximo jogo indie que vai todo mundo comentar no Twitter.",
            "icon": "fa-solid fa-gamepad",
            "scores": { "mobile": 3, "frontend": 2, "backend": 1, "ux": 1, "pm": 0, "data": 0 }
        },
        {
            "id": 13,
            "text": "Automatizar uma tarefa chata no computador só para nunca mais ter que fazer na mão.",
            "icon": "fa-solid fa-robot",
            "scores": { "backend": 3, "data": 2, "qa": 1, "pm": 0, "frontend": 0, "mobile": 0 }
        },
        {
            "id": 14,
            "text": "Escolher um app ou site pela beleza e facilidade de uso, antes mesmo de saber se é bom.",
            "icon": "fa-solid fa-wand-magic-sparkles",
            "scores": { "frontend": 3, "ux": 3, "mobile": 1, "backend": -1, "data": 0, "qa": 0 }
        },
        {
            "id": 15,
            "text": "Montar planilhas para controlar seus gastos, treinos ou qualquer coisa da vida.",
            "icon": "fa-solid fa-table",
            "scores": { "data": 3, "pm": 1, "backend": 0, "frontend": 0, "mobile": 0, "qa": 0 }
        },
        {
            "id": 16,
            "text": "Liderar uma equipe num trabalho de faculdade ou projeto voluntário.",
            "icon": "fa-solid fa-users",
            "scores": { "pm": 3, "ux": 1, "qa": 0, "backend": 0, "frontend": 0, "data": 0 }
        },
        {
            "id": 17,
            "text": "Duvidar de qualquer link suspeito que recebe no WhatsApp e avisar a família que é golpe.",
            "icon": "fa-solid fa-user-secret",
            "scores": { "qa": 3, "backend": 1, "data": 1, "frontend": 0, "mobile": 0, "pm": 0 }
        },
        {
            "id": 18,
            "text": "Pensar em como seria legal transformar uma ideia do dia a dia num app de celular.",
            "icon": "fa-solid fa-lightbulb",
            "scores": { "mobile": 3, "frontend": 1, "ux": 1, "pm": 1, "backend": 0, "data": 0 }
        },
        {
            "id": 19,
            "text": "Desenhar diagramas de fluxo para entender como a informação viaja do ponto A ao B.",
            "icon": "fa-solid fa-project-diagram",
            "scores": { "backend": 3, "data": 1, "pm": 1, "qa": 0, "frontend": 0, "mobile": 0 }
        },
        {
            "id": 20,
            "text": "Mudar a posição de um ícone só para ver se o usuário clica mais rápido nele.",
            "icon": "fa-solid fa-mouse-pointer",
            "scores": { "frontend": 3, "ux": 3, "data": 1, "mobile": 1, "backend": 0, "pm": 0 }
        },
        {
            "id": 21,
            "text": "Perder a noção do tempo analisando curiosidades e fatos aleatórios na internet.",
            "icon": "fa-solid fa-magnifying-glass",
            "scores": { "data": 3, "qa": 1, "backend": 0, "frontend": 0, "mobile": 0, "pm": 0 }
        },
        {
            "id": 22,
            "text": "Gostar de cronogramas, prazos e ver que tudo foi entregue no tempo certo.",
            "icon": "fa-regular fa-clock",
            "scores": { "pm": 3, "qa": 1, "backend": 0, "frontend": 0, "data": 0, "mobile": 0 }
        },
        {
            "id": 23,
            "text": "Fazer vários testes de estresse em algo só para garantir que não vai quebrar na mão do usuário.",
            "icon": "fa-solid fa-gears",
            "scores": { "qa": 3, "backend": 2, "frontend": 0, "mobile": 0, "data": 0, "pm": 0 }
        },
        {
            "id": 24,
            "text": "Ter interesse em como os jogos de celular economizam bateria sem perder a qualidade.",
            "icon": "fa-solid fa-battery-half",
            "scores": { "mobile": 3, "backend": 1, "frontend": 1, "qa": 0, "data": 0, "pm": 0 }
        },
        {
            "id": 25,
            "text": "Achar que a lógica por trás de um sistema é muito mais bonita do que a interface dele.",
            "icon": "fa-solid fa-microchip",
            "scores": { "backend": 3, "data": 1, "frontend": -2, "ux": -2, "mobile": 0, "qa": 0, "pm": 0 }
        }
    ],
    "results": {
        "backend": {
            "title": "O Mestre das Engrenagens",
            "description": "Onde o filho chora e a mãe não vê. É a lógica pura, os servidores que fritam de madrugada e o banco de dados que é o coração de tudo.\n\nÉ o Batman do código. Ninguém sabe quem ele é enquanto tudo funciona, mas se o servidor cai, ele é o herói que salva o dia (geralmente à base de café e ódio). \"Se tá rodando, não mexe!\"",
            "keywords": ["Lógica Pura", "Resolução de Problemas", "Infraestrutura", "Autonomia"],
            "courses": [
                { "title": "Lógica de Programação", "provider": "Udemy", "icon": "fa-solid fa-code", "url": COURSE_LINKS["Lógica de Programação"] },
                { "title": "Node.js na Prática", "provider": "Udemy", "icon": "fa-brands fa-node", "url": COURSE_LINKS["Node.js na Prática"] },
                { "title": "Bancos de Dados SQL", "provider": "Udemy", "icon": "fa-solid fa-database", "url": COURSE_LINKS["Bancos de Dados SQL"] },
                { "title": "API REST com Express", "provider": "Udemy", "icon": "fa-solid fa-server", "url": COURSE_LINKS["API REST com Express"] },
                { "title": "Git & GitHub", "provider": "Udemy", "icon": "fa-brands fa-github", "url": COURSE_LINKS["Git & GitHub"] },
                { "title": "Currículo Vaca Roxa", "provider": "Hotmart", "icon": "fa-solid fa-crown", "url": COURSE_LINKS["Currículo Vaca Roxa"] }
            ]
        },
        "frontend": {
            "title": "O Fiscal da Estética",
            "description": "Tudo que é bonitinho e clicável. Ele vive para garantir que o usuário não tenha um colapso tentando achar um botão.\n\nTem TOC com botão desalinhado por 1 pixel. Se a cor do ícone estiver errada, ele nem dorme. Adora ver o resultado imediato e dizer: \"Olha que coisa linda que eu fiz!\".",
            "keywords": ["Criatividade Visual", "Atenção a Detalhes", "Empatia com Usuário", "Inovação"],
            "courses": [
                { "title": "HTML & CSS Completo", "provider": "Udemy", "icon": "fa-brands fa-html5", "url": COURSE_LINKS["HTML & CSS Completo"] },
                { "title": "JavaScript Moderno", "provider": "Udemy", "icon": "fa-brands fa-js", "url": COURSE_LINKS["JavaScript Moderno"] },
                { "title": "React para Iniciantes", "provider": "Udemy", "icon": "fa-brands fa-react", "url": COURSE_LINKS["React para Iniciantes"] },
                { "title": "UI Design Básico", "provider": "Udemy", "icon": "fa-brands fa-figma", "url": COURSE_LINKS["UI Design Básico"] },
                { "title": "Git & GitHub", "provider": "Udemy", "icon": "fa-brands fa-github", "url": COURSE_LINKS["Git & GitHub"] },
                { "title": "Currículo Vaca Roxa", "provider": "Hotmart", "icon": "fa-solid fa-crown", "url": COURSE_LINKS["Currículo Vaca Roxa"] }
            ]
        },
        "data": {
            "title": "O Sherlock dos Dados",
            "description": "Torturar os números até eles confessarem a verdade. É o mago das planilhas infinitas e das IAs que vão (ou não) dominar o mundo.\n\n\"Contra fatos não há argumentos, mas eu tenho um gráfico que prova o contrário.\" Adora prever o futuro e descobrir padrões que ninguém mais viu. É o amigo que sempre diz: \"Eu avisei, os dados mostravam!\".",
            "keywords": ["Pensamento Analítico", "Curiosidade", "Matemática", "Visão de Futuro"],
            "courses": [
                { "title": "Python para Dados", "provider": "Udemy", "icon": "fa-brands fa-python", "url": COURSE_LINKS["Python para Dados"] },
                { "title": "SQL para Análise", "provider": "Udemy", "icon": "fa-solid fa-table", "url": COURSE_LINKS["SQL para Análise"] },
                { "title": "Estatística Básica", "provider": "Udemy", "icon": "fa-solid fa-chart-pie", "url": COURSE_LINKS["Estatística Básica"] },
                { "title": "Power BI", "provider": "Udemy", "icon": "fa-solid fa-chart-simple", "url": COURSE_LINKS["Power BI"] },
                { "title": "Git & GitHub", "provider": "Udemy", "icon": "fa-brands fa-github", "url": COURSE_LINKS["Git & GitHub"] },
                { "title": "Currículo Vaca Roxa", "provider": "Hotmart", "icon": "fa-solid fa-crown", "url": COURSE_LINKS["Currículo Vaca Roxa"] }
            ]
        },
        "pm": {
            "title": "O Dono do Rolê",
            "description": "O meio de campo entre o cliente que não sabe o que quer e o dev que não quer ser incomodado. Organiza as tarefas para ninguém surtar.\n\nO mestre do post-it e das reuniões que (esperamos) não poderiam ter sido um e-mail. Adora ver o cronograma ficando verde e o projeto nascendo sem o caos absoluto. \"Gente, foco no MVP!\"",
            "keywords": ["Liderança", "Organização", "Comunicação", "Visão de Negócio"],
            "courses": [
                { "title": "Gestão Ágil", "provider": "Udemy", "icon": "fa-solid fa-list-check", "url": COURSE_LINKS["Gestão Ágil"] },
                { "title": "Product Management", "provider": "Udemy", "icon": "fa-solid fa-briefcase", "url": COURSE_LINKS["Product Management"] },
                { "title": "Comunicação Não-Violenta", "provider": "Udemy", "icon": "fa-solid fa-comments", "url": COURSE_LINKS["Comunicação Não-Violenta"] },
                { "title": "Gestão de Projetos", "provider": "Udemy", "icon": "fa-brands fa-trello", "url": COURSE_LINKS["Gestão de Projetos"] },
                { "title": "Git & GitHub", "provider": "Udemy", "icon": "fa-brands fa-github", "url": COURSE_LINKS["Git & GitHub"] },
                { "title": "Currículo Vaca Roxa", "provider": "Hotmart", "icon": "fa-solid fa-crown", "url": COURSE_LINKS["Currículo Vaca Roxa"] }
            ]
        },
        "qa": {
            "title": "O Caça-Tretas",
            "description": "Destruir o que os outros criaram (mas para o bem deles!). Encontra buracos na segurança e bugs onde ninguém imaginava.\n\nÉ o \"advogado do diabo\". Não confia nem na própria sombra e sua frase favorita é: \"E se eu clicar aqui, explode?\". Protege os dados da galera como se fossem os seus próprios segredos.",
            "keywords": ["Criterioso", "Investigativo", "Preventivo", "Segurança"],
            "courses": [
                { "title": "Testes Automatizados", "provider": "Udemy", "icon": "fa-solid fa-robot", "url": COURSE_LINKS["Testes Automatizados"] },
                { "title": "Cibersegurança Básica", "provider": "Udemy", "icon": "fa-solid fa-shield-cat", "url": COURSE_LINKS["Cibersegurança Básica"] },
                { "title": "Cypress", "provider": "Udemy", "icon": "fa-solid fa-bug", "url": COURSE_LINKS["Cypress"] },
                { "title": "Hacking Ético", "provider": "Udemy", "icon": "fa-solid fa-user-secret", "url": COURSE_LINKS["Hacking Ético"] },
                { "title": "Git & GitHub", "provider": "Udemy", "icon": "fa-brands fa-github", "url": COURSE_LINKS["Git & GitHub"] },
                { "title": "Currículo Vaca Roxa", "provider": "Hotmart", "icon": "fa-solid fa-crown", "url": COURSE_LINKS["Currículo Vaca Roxa"] }
            ]
        },
        "mobile": {
            "title": "O Arquiteto de Diversão",
            "description": "Criar apps que viciam e jogos que fazem a gente perder a noção da hora. O foco é a palma da mão e a diversão total.\n\nVive num mundo paralelo de pixels e jogabilidade. Quer que tudo seja rápido, fluido e incrível. É quem transforma um celular simples numa máquina de entretenimento épica.",
            "keywords": ["Interatividade", "Dinâmico", "Foco no Usuário", "Inovação"],
            "courses": [
                { "title": "Desenvolvimento de Jogos", "provider": "Udemy", "icon": "fa-solid fa-gamepad", "url": COURSE_LINKS["Desenvolvimento de Jogos"] },
                { "title": "React Native", "provider": "Udemy", "icon": "fa-brands fa-react", "url": COURSE_LINKS["React Native"] },
                { "title": "Unity 3D", "provider": "Udemy", "icon": "fa-brands fa-unity", "url": COURSE_LINKS["Unity 3D"] },
                { "title": "UX para Mobile", "provider": "Udemy", "icon": "fa-solid fa-mobile-button", "url": COURSE_LINKS["UX para Mobile"] },
                { "title": "Git & GitHub", "provider": "Udemy", "icon": "fa-brands fa-github", "url": COURSE_LINKS["Git & GitHub"] },
                { "title": "Currículo Vaca Roxa", "provider": "Hotmart", "icon": "fa-solid fa-crown", "url": COURSE_LINKS["Currículo Vaca Roxa"] }
            ]
        }
    }
};
