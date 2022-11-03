class FreewayGame {
    constructor() {
        this.userName = "";
        this.points = 0;
        this.lives = 4;
        this.level = 1;
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
             if (i==0) {
                this.freeway[i].setAttribute('class', 'end');
             } else if (i==11) {
                this.freeway[i].setAttribute('class', 'start');
             } else {
                this.freeway[i].setAttribute('class', 'battleField');
             }
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
        this.freeway[this.playerPosition.line][this.playerPosition.column].id = "player"+`${this.lives}`;
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
                    if (this.points % 5 == 0) {
                        this.level += 1;
                    }
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
        this.checkColision();
    }

    checkColision() {
        if ( (this.playerPosition.line == this.carOne.line && this.playerPosition.column == this.carOne.column) ||
        (this.playerPosition.line == this.carTwo.line && this.playerPosition.column == this.carTwo.column) ||
        (this.playerPosition.line == this.carThree.line && this.playerPosition.column == this.carThree.column) ||
        (this.playerPosition.line == this.carFour.line && this.playerPosition.column == this.carFour.column) ||
        (this.playerPosition.line == this.carFive.line && this.playerPosition.column == this.carFive.column) ||
        (this.playerPosition.line == this.carSix.line && this.playerPosition.column == this.carSix.column) ||
        (this.playerPosition.line == this.carSeven.line && this.playerPosition.column == this.carSeven.column) ||
        (this.playerPosition.line == this.carEight.line && this.playerPosition.column == this.carEight.column) ||
        (this.playerPosition.line == this.carNine.line && this.playerPosition.column == this.carNine.column) ||
        (this.playerPosition.line == this.carTen.line && this.playerPosition.column == this.carTen.column) ) {
           this.treatColision();
        }
    }

    treatColision() {
        this.lives -= 1;
        if (this.lives == 0) {
            alert("Game Over!");
            window.location.reload(true);
        } else {
            console.log("Foi atingido, sua energia diminuiu.");
            this.playerPosition = {line: 11, column: 9};
            this.identifyElements();
        }
    }
    
    setLevel(level) {
        const intervalCarOne = setInterval(()=>{
            this.move(this.carOne, 'Right');
            if (this.playerPosition.line == this.carOne.line && this.playerPosition.column == this.carOne.column) {
                this.treatColision();
            }
        }, 650 - 50 * level)
    
        const intervalCarTwo = setInterval(()=>{
            this.move(this.carTwo, 'Right');
            if (this.playerPosition.line == this.carTwo.line && this.playerPosition.column == this.carTwo.column) {
                this.treatColision();
            }
        }, 550 - 50 * level)
    
        const intervalCarThree = setInterval(()=>{
            this.move(this.carThree, 'Right');
            if (this.playerPosition.line == this.carThree.line && this.playerPosition.column == this.carThree.column) {
                this.treatColision();
            }
        }, 450 - 50 * level)
    
        const intervalCarFour = setInterval(()=>{
            this.move(this.carFour, 'Right');
            if (this.playerPosition.line == this.carFour.line && this.playerPosition.column == this.carFour.column) {
                this.treatColision();
            }
        }, 350 - 50 * level)
    
        const intervalCarFive = setInterval(()=>{
            this.move(this.carFive, 'Right');
            if (this.playerPosition.line == this.carFive.line && this.playerPosition.column == this.carFive.column) {
                this.treatColision();
            }
        }, 250 - 50 * level)
    
        const intervalCarSix = setInterval(()=>{
            this.move(this.carSix, 'Left');
            if (this.playerPosition.line == this.carSix.line && this.playerPosition.column == this.carSix.column) {
                this.treatColision();
            }
        }, 250 - 50 * level)
    
        const intervalCarSeven = setInterval(()=>{
            this.move(this.carSeven, 'Left');
            if (this.playerPosition.line == this.carSeven.line && this.playerPosition.column == this.carSeven.column) {
                this.treatColision();
            }
        }, 350 - 50 * level)
    
        const intervalCarEight = setInterval(()=>{
            this.move(this.carEight, 'Left');
            if (this.playerPosition.line == this.carEight.line && this.playerPosition.column == this.carEight.column) {
                this.treatColision();
            }
        }, 450 - 50 * level)
    
        const intervalCarNine = setInterval(()=>{
            this.move(this.carNine, 'Left');
            if (this.playerPosition.line == this.carNine.line && this.playerPosition.column == this.carNine.column) {
                this.treatColision();
            }
        }, 550 - 50 * level)
    
        const intervalCarTen = setInterval(()=>{
            this.move(this.carTen, 'Left');
            if (this.playerPosition.line == this.carTen.line && this.playerPosition.column == this.carTen.column) {
                this.treatColision();
            }
        }, 650 - 50 * level)
    }
}

