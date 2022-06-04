class HallEater {
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
    chooseCell(character) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }

        return found;
    }

    mul() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2;

            var newHallEater = new HallEater(newX, newY);
            halleaterArr.push(newHallEater);
            this.energy = 8
        }
    }
    move() {
               this.energy--
               var emptyCells = this.chooseCell(0);
               var newCell = random(emptyCells);
               if (newCell && this.energy >= -10) {
                   var newX = newCell[0];
                   var newY = newCell[1];
                   matrix[newY][newX] = matrix[this.y][this.x] ///kam 2 tiv@
                   matrix[this.y][this.x] = 0
                   this.x = newX
                   this.y = newY
               }
               else {
                   this.die()
               }
    }

    eat() {
        var emptyCells = this.chooseCell(4);
        var newCell = random(emptyCells);
        if(newCell) {
            this.energy++;
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x] ///kam 2 tiv@
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in hallArr) {
                if (newX == hallArr[i].x && newY == hallArr[i].y) {
                    hallArr.splice(i, 1);
                    break;
                }
            }
            
            if(this.energy >= -7) {
                this.mul()
            }
        
        } else {
            this.move()
        }
    }
    die() {
        matrix[this.y][this.x] = 0
        for (var i in halleaterArr) {
            if (this.x == halleaterArr[i].x && this.y == halleaterArr[i].y) {
                halleaterArr.splice(i, 1);
                break;
            }
        }
    }
}
