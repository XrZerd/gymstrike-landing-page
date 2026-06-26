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

    if (nome === '' || email === '' || mensagem === '') {
        // Alerta de erro
        mostrarAlerta('Por favor, preencha todos os campos.', '#ef4444');
        return;
    }

    // Alerta de sucesso
    mostrarAlerta(`Obrigado, ${nome}! Mensagem enviada com sucesso.`, '#10b981');

    // Limpa os campos do formulário
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