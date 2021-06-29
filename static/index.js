// indica quais são meus inimigos e minhas armas
const personagens = document.querySelectorAll('.elementos-contanier');
const armas = document.querySelectorAll('.elemento-arma');

// MANIPULAÇÃO DA ÁRVORE DOM DO HTML

// ENTENDER QUE EU CLIQUEI EM UM INIMIGO, E SELECIONAR ESTE INIMIGO

for(const i of personagens){

    i.addEventListener('click', function(){
        alert(`o botao foi clicado`)
        if(document.getElementsByClassName('personagem-selecionado').length < 1){
            this.classList.add('personagem-selecionado')
            vidaDoPersonagem = Number(this.getAttribute('data-vida'));
        } else{
            this.classList.remove('personagem-selecionado')
        }
    })
}

for(const a of armas){

    a.addEventListener('click', function(){
        if(document.getElementsByClassName('arma-selecionada').length < 1){
            danoDaArma = Number(this.getAttribute('data-dano'));
            this.classList.add('arma-selecionada')
        } else {
            this.classList.remove('arma-selecionada')
        }
    })
}

function calcularDano(){

    danoTotal = danoDaArma + rolarOsDados();
    

    if(danoTotal >= vidaDoInimigo){
        alert(`O dano foi ${danoTotal} e a vida do inimigo era ${vidaDoInimigo}. Você matou!!`)
    } else {
        alert(`O dano foi ${danoTotal} e a vida do inimigo era ${vidaDoInimigo}. O inimigo sobreviveu!!`)
    }
}

function rolarOsDados() {
    const min = Math.ceil(1);
    const max = Math.floor(10);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}