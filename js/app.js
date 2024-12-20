let quantidadeJogosAlugados = 0;

function contarEExibirJogosAlugados(){
    console.log(`O total de jogos alugados: ${quantidadeJogosAlugados}`);
}

function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeDoJogo = gameClicado.querySelector('.dashboard__item__name');

    

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        //Confirmar a devolução do jogo 
        if(confirm(`Tem certeza que você deseja devolver o jogo ${nomeDoJogo.textContent} ? `)){
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.innerHTML = 'Alugar';
            quantidadeJogosAlugados--;
        }
    }else{
        botao.classList.add('dashboard__item__button--return');
        botao.innerHTML = 'Devolver';
        imagem.classList.add('dashboard__item__img--rented');
        quantidadeJogosAlugados++;
    }
    contarEExibirJogosAlugados();
    
}

document.addEventListener('DOMContentLoaded', function() {
   quantidadeJogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});


