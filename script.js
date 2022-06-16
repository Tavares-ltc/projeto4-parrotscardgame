let numeroCartas, primeiraSelecionada, segundaSelecionada

function nCartas() {

    numeroCartas = prompt('Com quantas cartas gostaria de jogar?')
    if ((numeroCartas > 3) && (numeroCartas < 15) && (numeroCartas % 2 == 0)) {

        cartas = ['bobrossparrot', 'bobrossparrot', 'explodyparrot', 'explodyparrot', 'fiestaparrot', 'fiestaparrot', 'metalparrot', 'metalparrot', 'revertitparrot', 'revertitparrot', 'tripletsparrot', 'tripletsparrot', 'unicornparrot', 'unicornparrot']

        let board = document.querySelector('.board')
        board.innerHTML = ''
        let cartasSort = []
        for (let i = 0; i < numeroCartas; i++) {
            cartasSort.push(cartas[i])
        }
        cartasSort = cartasSort.sort((a, b) => 0.5 - Math.random())
        console.log(cartasSort)

        for (let i = 0; i < numeroCartas; i++) {
            board.innerHTML += `<div onclick="girar(this)" class="card-container">
        <div class="card">
        <div class="frente">
        <img src="img/${cartasSort[i]}.gif" alt="">
        </div>
        <div class="verso">
        <img src="img/front.png" alt="">
        </div>`
        }
    }
    else {
        nCartas();
    }
}
nCartas();

let primeiraC = 0
let segundaC = 0

function girar(cardCont) {
    card = cardCont.querySelector('.card')


    if ((primeiraC === 0) && (segundaC === 0)) {
        card.classList.add('primeira')
        card.classList.add('virada')
        primeiraC = 1
    }
    else if ((primeiraC === 1) && (segundaC === 0)) {
        card.classList.add('segunda')
        segundaC = 1
        card.classList.add('virada')
        testa();
    }
    function testa() {

        let primeiraV = document.querySelector('.primeira')
        let segundaV = document.querySelector('.segunda')

        if (((primeiraC === 1) && (segundaC === 1)) && ((document.querySelector('.primeira .frente').innerHTML) == (document.querySelector('.segunda .frente').innerHTML))) {
            setTimeout(function () {
                primeiraV.classList.add('certa')
                segundaV.classList.add('certa')
                primeiraV.classList.remove('virada')
                segundaV.classList.remove('virada')
                primeiraV.classList.remove('primeira')
                segundaV.classList.remove('segunda')
                primeiraC = 0
                segundaC = 0
                ganhou();
            }, 1000);
        }
        else {
            
            setTimeout(function () {
                primeiraV.classList.remove('virada')
                segundaV.classList.remove('virada')
                primeiraV.classList.remove('primeira')
                segundaV.classList.remove('segunda')
                primeiraC = 0
                segundaC = 0
            }, 2000);


        }
    }

}
function ganhou(){
    let todas = document.querySelectorAll('.card')
    let acertadas = document.querySelectorAll('.card.certa')
    if (todas.length == acertadas.length){

        alert('Você ganhou!')
    }
}
