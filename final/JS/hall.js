class Hall {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 8
        this.directions = [];
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

 eat() {
    var emptyCells = this.chooseCell(4);
    var newCell = random(emptyCells);
    if(newCell) {
        this.energy++
        var newX = newCell[0];
        var newY = newCell[1];
        matrix[newY][newX] = matrix[this.y][this.x] ///kam 2 tiv@
        matrix[this.y][this.x] = 0
        this.x = newX
        this.y = newY
        for (var i in grassArr) {
            if (newX == grassArr[i].x && newY == grassArr[i].y) {
                grassArr.splice(i, 1);
                break;
            }
        } 
        if(newCell) {
            this.die()
        }
    }
 }
}
    