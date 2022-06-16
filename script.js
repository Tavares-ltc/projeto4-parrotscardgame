function girar(cardCont) {
    card = cardCont.querySelector('.card')
    card.classList.toggle('virada')

}
let numeroCartas = prompt('Com quantas cartas gostaria de jogar?')

let board = document.querySelector('.board')
board.innerHTML = ''
for (let i = 0; i < numeroCartas; i++) {
    board.innerHTML += `<div onclick="girar(this)" class="card-container">
    <div class="card">
        <div class="frente">
            <img src="img/bobrossparrot.gif" alt="">
        </div>
        <div class="verso">
            <img src="img/front.png" alt="">
        </div>`
}