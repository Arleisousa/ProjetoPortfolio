
// Obtém todos os links do menu
const links = document.querySelectorAll('.header-menu a');

// Adiciona um ouvinte de eventos a cada link
links.forEach(link => {
    link.addEventListener('click', function(event) {
        // Remove a classe 'ativo' de todos os links
        links.forEach(link => link.classList.remove('ativo'));

        // Adiciona a classe 'ativo' apenas ao link clicado
        event.target.classList.add('ativo');
    });
});
