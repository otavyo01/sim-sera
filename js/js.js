document.addEventListener('DOMContentLoaded', function () {
    // Selecione o botão e o texto
    const meuBotao = document.getElementById('meuBotao');
    const texto = document.querySelector('.textomeio');

    // Variáveis para contar cliques e controlar o movimento
    let contadorCliques = 0;

    // Adicione um ouvinte de eventos de clique ao botão
    meuBotao.addEventListener('click', function () {
        // Aumenta o contador de cliques
        contadorCliques++;

        // Ativa o movimento do botão a cada clique
        animarBotao();

        // Verifica se o botão foi clicado mais de 5 vezes
        if (contadorCliques >= 5) {
            // Mostra o texto após 5 cliques
            mostrarTexto();
        }
    });

    // Função para animar o botão
    function animarBotao() {
        // Move o botão para a direita
        meuBotao.style.transform = `translateX(${contadorCliques * 50}px)`;
    }

    // Função para mostrar o texto
    function mostrarTexto() {
        // Cria um novo elemento de texto
        const novoTexto = document.createElement('p');
        novoTexto.innerText = 'Texto aparecendo lentamente';

        // Adiciona uma classe ao novo texto para estilização
        novoTexto.classList.add('aparecendo');

        // Adiciona o novo texto ao documento
        document.body.appendChild(novoTexto);
    }
});
