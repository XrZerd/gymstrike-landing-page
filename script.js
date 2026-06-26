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

formContato.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos antes de enviar.');
        return;
    }

    // Simulando o sucesso do envio
    alert(`Obrigado pelo contato, ${nome}! Sua mensagem foi enviada com sucesso e nossa equipe responderá em breve.`);

    // Limpa os campos do formulário
    formContato.reset();
});