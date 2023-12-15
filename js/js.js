document.addEventListener('DOMContentLoaded', function () {
    // Selecione o botão e o texto
    const meuBotao = document.getElementById('meuBotao');
    const texto = document.querySelector('.textomeio');

    // Variáveis para contar cliques e controlar o movimento
    let contadorCliques = 0;
    let movimentoAtivado = false;

    // Adicione um ouvinte de eventos de clique ao botão
    meuBotao.addEventListener('click', function () {
        // Aumenta o contador de cliques
        contadorCliques++;

        // Ativa o movimento do botão após 5 cliques
        if (contadorCliques === 5 && !movimentoAtivado) {
            movimentoAtivado = true;
            animarBotao();
        }

        // Verifica se o botão foi clicado mais de 5 vezes
        if (contadorCliques > 5) {
            // Reinicia o contador de cliques
            contadorCliques = 0;
            // Desativa o movimento
            movimentoAtivado = false;
        }
    });

    // Função para animar o botão
    function animarBotao() {
        // Move o botão para a direita
        meuBotao.style.transform = 'translateX(300px)';

        // Move o texto para a esquerda
        texto.style.transform = 'translateX(-300px)';

        // Após 1 segundo, reverte a posição do botão e do texto
        setTimeout(() => {
            meuBotao.style.transform = 'translateX(0)';
            texto.style.transform = 'translateX(0)';
        }, 1000);
    }
});
