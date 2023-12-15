document.addEventListener('DOMContentLoaded', function () {
    // Selecione o botão e o texto
    const meuBotao = document.getElementById('meuBotao');
    const texto = document.querySelector('.textomeio');

    // Adicione um ouvinte de eventos de clique ao botão
    meuBotao.addEventListener('click', function () {
        // Move o botão para uma posição aleatória na tela a cada clique
        moverBotaoAleatoriamente();

        // Verifica se o botão foi clicado 5 vezes
        if (contagemCliques() >= 5) {
            // Mostra o texto e esconde o botão após 5 cliques
            mostrarTexto();
            esconderBotao();
        }
    });

    // Função para mover o botão para uma posição aleatória
    function moverBotaoAleatoriamente() {
        const novaPosicaoX = Math.random() * (window.innerWidth - 100);
        const novaPosicaoY = Math.random() * (window.innerHeight - 100);

        meuBotao.style.transform = `translate(${novaPosicaoX}px, ${novaPosicaoY}px)`;
    }

    // Função para contar os cliques
    function contagemCliques() {
        // Adicione a lógica necessária para rastrear a contagem de cliques
        // Aqui estou usando uma variável global como exemplo
        if (!window.contadorCliques) {
            window.contadorCliques = 0;
        }
        window.contadorCliques++;
        return window.contadorCliques;
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

    // Função para esconder o botão
    function esconderBotao() {
        meuBotao.style.display = 'none';
    }
});
