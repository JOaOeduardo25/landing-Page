document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let email = document.getElementById('email').value;
    let message = document.getElementById('message');
    
    // Simulando o envio do e-mail para notificar o usuário
    setTimeout(function() {
      message.textContent = `Obrigado por se inscrever, ${email}! Você será notificado assim que os ingressos estiverem disponíveis.`;
    }, 1000);
});

document.getElementById('contact-btn').addEventListener('click', function() {
    window.location.href = 'contato.html'; // Redireciona para a página de contato
});

document.getElementById('services-btn').addEventListener('click', function() {
    window.location.href = 'servicos.html'; // Redireciona para a página de serviços
});

document.getElementById('learn-more-btn').addEventListener('click', function() {
    window.location.href = 'informacoes_evento.html'; // Redireciona para a página de "Saiba Mais"
});
