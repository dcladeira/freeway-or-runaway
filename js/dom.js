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
        if ( (match.playerPosition.line == match.carOne.line && match.playerPosition.column == match.carOne.column) ||
             (match.playerPosition.line == match.carTwo.line && match.playerPosition.column == match.carTwo.column) ||
             (match.playerPosition.line == match.carThree.line && match.playerPosition.column == match.carThree.column) ||
             (match.playerPosition.line == match.carFour.line && match.playerPosition.column == match.carFour.column) ||
             (match.playerPosition.line == match.carFive.line && match.playerPosition.column == match.carFive.column) ||
             (match.playerPosition.line == match.carSix.line && match.playerPosition.column == match.carSix.column) ||
             (match.playerPosition.line == match.carSeven.line && match.playerPosition.column == match.carSeven.column) ||
             (match.playerPosition.line == match.carEight.line && match.playerPosition.column == match.carEight.column) ||
             (match.playerPosition.line == match.carNine.line && match.playerPosition.column == match.carNine.column) ||
             (match.playerPosition.line == match.carTen.line && match.playerPosition.column == match.carTen.column) ) {
                treatColision();
        }
        playerScore.innerText = match.points;
        playerLives.innerText = match.lives;
        playerLevel.innerText = match.level;
        if (currentLevel != match.level) {
            setLevel();
        }
    });
    setLevel();
}

function treatColision() {
    match.lives -= 1;
    if (match.lives == 0) {
        alert("Game Over!");
        window.location.reload(true);
    } else {
        console.log("Foi atingido, perdeu uma vida.");
        match.playerPosition = {line: 11, column: 9};
        match.identifyElements();
    }
}

function setLevel() {
    const intervalCarOne = setInterval(()=>{
        match.move(match.carOne, 'Right');
        if (match.playerPosition.line == match.carOne.line && match.playerPosition.column == match.carOne.column) {
            treatColision();
        }
    }, 650 - 25 * match.level)

    const intervalCarTwo = setInterval(()=>{
        match.move(match.carTwo, 'Right');
        if (match.playerPosition.line == match.carTwo.line && match.playerPosition.column == match.carTwo.column) {
            treatColision();
        }
    }, 550 - 25 * match.level)

    const intervalCarThree = setInterval(()=>{
        match.move(match.carThree, 'Right');
        if (match.playerPosition.line == match.carThree.line && match.playerPosition.column == match.carThree.column) {
            treatColision();
        }
    }, 450 - 25 * match.level)

    const intervalCarFour = setInterval(()=>{
        match.move(match.carFour, 'Right');
        if (match.playerPosition.line == match.carFour.line && match.playerPosition.column == match.carFour.column) {
            treatColision();
        }
    }, 350 - 25 * match.level)

    const intervalCarFive = setInterval(()=>{
        match.move(match.carFive, 'Right');
        if (match.playerPosition.line == match.carFive.line && match.playerPosition.column == match.carFive.column) {
            treatColision();
        }
    }, 250 - 25 * match.level)

    const intervalCarSix = setInterval(()=>{
        match.move(match.carSix, 'Left');
        if (match.playerPosition.line == match.carSix.line && match.playerPosition.column == match.carSix.column) {
            treatColision();
        }
    }, 250 - 25 * match.level)

    const intervalCarSeven = setInterval(()=>{
        match.move(match.carSeven, 'Left');
        if (match.playerPosition.line == match.carSeven.line && match.playerPosition.column == match.carSeven.column) {
            treatColision();
        }
    }, 350 - 25 * match.level)

    const intervalCarEight = setInterval(()=>{
        match.move(match.carEight, 'Left');
        if (match.playerPosition.line == match.carEight.line && match.playerPosition.column == match.carEight.column) {
            treatColision();
        }
    }, 450 - 25 * match.level)

    const intervalCarNine = setInterval(()=>{
        match.move(match.carNine, 'Left');
        if (match.playerPosition.line == match.carNine.line && match.playerPosition.column == match.carNine.column) {
            treatColision();
        }
    }, 550 - 25 * match.level)

    const intervalCarTen = setInterval(()=>{
        match.move(match.carTen, 'Left');
        if (match.playerPosition.line == match.carTen.line && match.playerPosition.column == match.carTen.column) {
            treatColision();
        }
    }, 650 - 25 * match.level)
}

