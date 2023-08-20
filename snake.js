class Cell {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Snake {
    directionX;
    directionY;
    body = [];
    unitSize;

    constructor(x,y,directionX, directionY, unitSize) {
       
        const cell = new Cell(x, y);
        this.unitSize = unitSize;
        this.directionX = directionX;
        this.directionY = directionY;
        this.body = [cell];
    }
    turnUp() {
        if (this.directionY != 1) {
            this.directionX = 0;
            this.directionY = -1;
        }
    }

    turnDown() {
        if (this.directionY != -1) {
            this.directionX = 0;
            this.directionY = 1;

        }
    }

    turnLeft() {
        if (this.directionX != 1) {
            this.directionX = -1;
            this.directionY = 0;
        }
    }

    turnRight() {
        if (this.directionX != -1) {
            this.directionX = 1;
            this.directionY = 0;
        }
    }

    move() {

        let oldHead = this.body[0];
        let x, y;
        x = oldHead.x + this.directionX * this.unitSize;
        y = oldHead.y + this.directionY * this.unitSize;



        const newHead = new Cell(x, y);
        this.body.unshift(newHead);
        this.body.pop();
    }
}
const snake = new Snake(0, 0);
console.log(snake);
snake.turnLeft();
console.log(snake);
snake.turnUp();
console.log(snake);
snake.move()
console.log(snake);