// SCROLL SUAVE
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Faz o navegador deslizar suavemente até o elemento
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// VALIDAÇÃO E ENVIO DO FORMULÁRIO DE CONTATO
const formContato = document.getElementById('form-contato');
const caixaAlerta = document.getElementById('alerta-customizado');
const textoAlerta = document.getElementById('mensagem-alerta');
const btnFecharAlerta = document.getElementById('fechar-alerta');

formContato.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    const isEnglish = document.documentElement.lang === 'en';

    if (nome === '' || email === '' || mensagem === '') {
        // Alerta de erro dinâmico
        const erroMsg = isEnglish ? 'Please fill in all fields.' : 'Por favor, preencha todos os campos.';
        mostrarAlerta(erroMsg, '#ef4444');
        return;
    }

    // Alerta de sucesso dinâmico
    const sucessoMsg = isEnglish 
        ? `Thank you, ${nome}! Message sent successfully.` 
        : `Obrigado, ${nome}! Mensagem enviada com sucesso.`;
        
    mostrarAlerta(sucessoMsg, '#10b981');
    formContato.reset();
});

// Função que controla a aparição do alerta
function mostrarAlerta(mensagem, corFundo) {
    textoAlerta.textContent = mensagem;
    caixaAlerta.style.backgroundColor = corFundo;

    // Tira a classe 'escondido' para ele subir na tela
    caixaAlerta.classList.remove('escondido');

    // Faz o alerta sumir sozinho depois de 5 segundos
    setTimeout(() => {
        esconderAlerta();
    }, 5000);
}

function esconderAlerta() {
    caixaAlerta.classList.add('escondido');
}

// Permite o usuário fechar clicando no "Ok"
btnFecharAlerta.addEventListener('click', esconderAlerta);

// MENU RESPONSIVO
const btnMenu = document.getElementById('btn-menu');
const navLinks = document.getElementById('nav-links');

btnMenu.addEventListener('click', () => {
    // Liga/desliga a classe 'ativo' no menu para ele deslizar
    navLinks.classList.toggle('ativo');

    // Troca o ícone pelo 'X' quando estiver aberto
    const icone = btnMenu.querySelector('i');
    if (navLinks.classList.contains('ativo')) {
        icone.classList.remove('fa-bars');
        icone.classList.add('fa-xmark');
    } else {
        icone.classList.remove('fa-xmark');
        icone.classList.add('fa-bars');
    }
});

// Fecha o menu automaticamente quando o usuário clicar em qualquer link dele
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('ativo');
        const icone = btnMenu.querySelector('i');
        icone.classList.remove('fa-xmark');
        icone.classList.add('fa-bars');
    });
});