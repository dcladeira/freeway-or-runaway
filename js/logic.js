class FreewayGame {
    constructor() {
        this.userName = "";
        this.points = 0;
        this.time = 60;
        this.freeway = [];
        // this.startPoint =  
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
        this.freeway[11][9].id = "player";
    }

    
}

