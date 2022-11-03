// Captura os elementos HTML
const startScreen = document.getElementById('startScreen');
const inputName = document.getElementById('inputName');
const startBtn = document.getElementById('startBtn');

const gameScreen = document.getElementById('gameScreen');
const playerName = document.getElementById('playerName');
const playerScore = document.getElementById('playerScore');
const playerLives = document.getElementById('playerLives');
const playerLevel = document.getElementById('playerLevel');

// Cria um novo jogo
const match = new FreewayGame();

// Adiciona event listener para início do jogo (clique no botão iniciar)
startBtn.addEventListener('click', (event) => {
    event.preventDefault();
    
    // Iniciar tela de jogo
    match.renderMatrix();
    match.userName = inputName.value;
    playerName.innerText = match.userName;
    playerScore.innerText = match.points;
    playerLives.innerText = match.lives;
    playerLevel.innerText = match.level;
    
    console.log(`Bem-vindo ${inputName.value}, você tem ${match.points} pontos`);
    startScreen.style.display = "none";
    gameScreen.style.display = "flex";
    
    settingUpGame();

});

function settingUpGame() {
    document.addEventListener('keydown', function(e) {
        let currentLevel = match.level;
        match.move(match.playerPosition, e.key);
        playerScore.innerText = match.points;
        playerLives.innerText = match.lives;
        playerLevel.innerText = match.level;
        if (match.level == 5) {
            alert("Você é fera, sobreviveu à metralhadora de chinelos!");
            window.location.reload(true);
        } else if (match.level != currentLevel) {
            match.setLevel(match.level);
        }
    });
    match.setLevel(match.level);
}

