// Captura os elementos HTML
const startScreen = document.getElementById('startScreen');
const inputName = document.getElementById('inputName');
const startBtn = document.getElementById('startBtn');

const gameScreen = document.getElementById('gameScreen');
const playerName = document.getElementById('playerName');
const playerScore = document.getElementById('playerScore');



// Adiciona event listener para início do jogo (clique no botão iniciar)
startBtn.addEventListener('click', (event) => {
    console.log("Começou!");
    event.preventDefault();
    
    // Cria um novo jogo
    const match = new FreewayGame();
    match.renderMatrix();
    match.userName = inputName.value;
    playerName.innerText = match.userName;
    playerScore.innerText = match.points;
    console.log(`Bem-vindo ${inputName.value}, você tem ${match.points} pontos`);
    startScreen.style.display = "none";
    gameScreen.style.display = "flex";
    
    // settingUpGame();

});

function settingUpGame() {
    // window.addEventListener('keydow')
}
