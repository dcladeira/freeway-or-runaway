// Captura os elementos HTML
const startScreen = document.getElementById('startScreen');
const inputName = document.getElementById('inputName');
const startBtn = document.getElementById('startBtn');

const gameScreen = document.getElementById('gameScreen');
const playerName = document.getElementById('playerName');
const playerScore = document.getElementById('playerScore');
const playerLives = document.getElementById('playerLives');

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
    
    console.log(`Bem-vindo ${inputName.value}, você tem ${match.points} pontos`);
    startScreen.style.display = "none";
    gameScreen.style.display = "flex";
    
    settingUpGame();

});

function settingUpGame() {

    document.addEventListener('keydown', function(e) {
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
                colision();
        }
        playerScore.innerText = match.points;
        playerLives.innerText = match.lives;
    });

    const intervalCarOne = setInterval(()=>{
        match.move(match.carOne, 'Right');
        if (match.playerPosition.line == match.carOne.line && match.playerPosition.column == match.carOne.column) {
            colision();
        }
    }, 600)

    const intervalCarTwo = setInterval(()=>{
        match.move(match.carTwo, 'Right');
        if (match.playerPosition.line == match.carTwo.line && match.playerPosition.column == match.carTwo.column) {
            colision();
        }
    }, 500)

    const intervalCarThree = setInterval(()=>{
        match.move(match.carThree, 'Right');
        if (match.playerPosition.line == match.carThree.line && match.playerPosition.column == match.carThree.column) {
            colision();
        }
    }, 400)

    const intervalCarFour = setInterval(()=>{
        match.move(match.carFour, 'Right');
        if (match.playerPosition.line == match.carFour.line && match.playerPosition.column == match.carFour.column) {
            colision();
        }
    }, 300)

    const intervalCarFive = setInterval(()=>{
        match.move(match.carFive, 'Right');
        if (match.playerPosition.line == match.carFive.line && match.playerPosition.column == match.carFive.column) {
            colision();
        }
    }, 200)

    const intervalCarSix = setInterval(()=>{
        match.move(match.carSix, 'Left');
        if (match.playerPosition.line == match.carSix.line && match.playerPosition.column == match.carSix.column) {
            colision();
        }
    }, 200)

    const intervalCarSeven = setInterval(()=>{
        match.move(match.carSeven, 'Left');
        if (match.playerPosition.line == match.carSeven.line && match.playerPosition.column == match.carSeven.column) {
            colision();
        }
    }, 300)

    const intervalCarEight = setInterval(()=>{
        match.move(match.carEight, 'Left');
        if (match.playerPosition.line == match.carEight.line && match.playerPosition.column == match.carEight.column) {
            colision();
        }
    }, 400)

    const intervalCarNine = setInterval(()=>{
        match.move(match.carNine, 'Left');
        if (match.playerPosition.line == match.carNine.line && match.playerPosition.column == match.carNine.column) {
            colision();
        }
    }, 500)

    const intervalCarTen = setInterval(()=>{
        match.move(match.carTen, 'Left');
        if (match.playerPosition.line == match.carTen.line && match.playerPosition.column == match.carTen.column) {
            colision();
        }
    }, 600)

    function colision() {
        match.lives -= 1;
        if (match.lives == 0) {
            alert("Game Over!");
            window.location.reload(true);
        } else {
            console.log("Foi atropelado, perdeu uma vida.");
            match.playerPosition = {line: 11, column: 9};
            console.log(match.playerPosition);
            match.identifyElements();
        }
    }

}
