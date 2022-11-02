class FreewayGame {
    constructor() {
        this.userName = "";
        this.points = 0;
        this.lives = 4;
        this.userFace = [
            "./img/mininu4.png",
            "./img/mininu3.png",
            "./img/mininu2.png",
            "./img/mininu1.png"
        ];
        this.freeway = [];
        this.playerPosition = {line: 11, column: 9};
        this.carOne = {line: 1, column: 0};
        this.carTwo = {line: 2, column: 0};
        this.carThree = {line: 3, column: 0};
        this.carFour = {line: 4, column: 0};
        this.carFive = {line: 5, column: 0};
        this.carSix = {line: 6, column: 19};
        this.carSeven = {line: 7, column: 19};
        this.carEight = {line: 8, column: 19};
        this.carNine = {line: 9, column: 19};
        this.carTen = {line: 10, column: 19};
    }

    renderMatrix() {
        const freewayMatrix = document.getElementsByClassName('freewayMatrix')[0];
        
        for (let i=0; i<12; i++) {
             this.freeway[i] = document.createElement('tr');
             for (let j=0; j<20; j++) {
                this.freeway[i][j] = document.createElement('td');
                // this.freeway[i][j].style.margin = 0;
                this.freeway[i].appendChild(this.freeway[i][j]);
             }
             freewayMatrix.appendChild(this.freeway[i]);
        }
        this.identifyElements();
    }

    identifyElements() {
        this.freeway[this.playerPosition.line][this.playerPosition.column].id = "player";
        // this.freeway[this.playerPosition.line][this.playerPosition.column].style.background-image: url(./img/mininu1.png)
        this.freeway[this.carOne.line][this.carOne.column].id = "carOne";
        this.freeway[this.carTwo.line][this.carTwo.column].id = "carTwo";
        this.freeway[this.carThree.line][this.carThree.column].id = "carThree";
        this.freeway[this.carFour.line][this.carFour.column].id = "carFour";
        this.freeway[this.carFive.line][this.carFive.column].id = "carFive";
        this.freeway[this.carSix.line][this.carSix.column].id = "carSix";
        this.freeway[this.carSeven.line][this.carSeven.column].id = "carSeven";
        this.freeway[this.carEight.line][this.carEight.column].id = "carEight";
        this.freeway[this.carNine.line][this.carNine.column].id = "carNine";
        this.freeway[this.carTen.line][this.carTen.column].id = "carTen";
    }

    move(object, direction) {
        let objectId = this.freeway[object.line][object.column].getAttribute('id');
        this.freeway[object.line][object.column].removeAttribute('id');
        switch (direction) {
            case 'ArrowLeft':
                if (object.column > 0) {
                    object.column -= 1;
                }
                break;
            case 'ArrowUp':
                object.line -= 1;
                if (object.line == 0) {
                    console.log("Você ganhou 1 ponto!");
                    object.line = 11;
                    this.points += 1;
                }
                break;
            case 'ArrowRight':
                if (object.column < 19) {
                    object.column += 1;
                }
                break;
            case 'ArrowDown':
                if (object.line < 11) {
                    object.line += 1;
                }
                break;
            case 'Right':
                object.column += 1;
                if (object.column == 20) {
                    object.column = 0;
                }
                break;
            case 'Left':
                object.column -= 1;
                if (object.column == -1) {
                    object.column = 19;
                }
                break;
        }
        this.freeway[object.line][object.column].id = objectId;
    }
}

