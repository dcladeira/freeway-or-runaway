class FreewayGame {
    constructor() {
        this.userName = "";
        this.points = 0;
        this.time = 60;
        this.freeway = [];
        this.position = {line: 11, column: 9};
    }

    renderMatrix() {
        const freewayMatrix = document.getElementsByClassName('freewayMatrix')[0];
        
        for (let i=0; i<12; i++) {
             this.freeway[i] = document.createElement('tr');
             for (let j=0; j<20; j++) {
                this.freeway[i][j] = document.createElement('td');
                // this.freeway[i][j].style.margin = 0;
                // this.freeway[i][j].innerHTML = `L${i}C${j}`
                this.freeway[i].appendChild(this.freeway[i][j]);
             }
             freewayMatrix.appendChild(this.freeway[i]);
        }
        this.freeway[this.position.line][this.position.column].id = "player";
        console.log('Posição inicial: ', this.position);
    }

    moveUp() {
        this.freeway[this.position.line][this.position.column].removeAttribute('id');
        this.position.line -= 1;
        if (this.position.line == 0) {
            console.log("Você ganhou 1 ponto!");
            this.position.line = 11;
            this.points += 1;
        }
        this.freeway[this.position.line][this.position.column].id = "player";
    }

    moveDown() {
        this.freeway[this.position.line][this.position.column].removeAttribute('id');
        if (this.position.line < 11) {
            this.position.line += 1;
        }
        this.freeway[this.position.line][this.position.column].id = "player";
    }

    moveLeft() {
        this.freeway[this.position.line][this.position.column].removeAttribute('id');
        if (this.position.column > 0) {
            this.position.column -= 1;
        }
        this.freeway[this.position.line][this.position.column].id = "player";
    }

    moveRight() {
        this.freeway[this.position.line][this.position.column].removeAttribute('id');
        if (this.position.column < 19) {
            this.position.column += 1;
        }
        this.freeway[this.position.line][this.position.column].id = "player";
    }

}

