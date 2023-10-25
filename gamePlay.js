class GamePlay {
    snake;
    apple;
    canvas;
    canvasContext;
    color;
    unitSize;
    check

    constructor(width, height, color) {

        this.canvas = document.getElementById("gameCanvas");
        this.canvasContext = this.canvas.getContext("2d");
        this.canvas.width = width;
        this.canvas.height = height;
        this.color = color;
        this.unitSize = width / 20;

        this.snake = new Snake(0, 0, -1, 0, this.unitSize);
        this.createApple();
    }
    createApple() {
        let numberOfSquares = this.canvas.width / this.unitSize;

        let squareLocationX = Math.floor(Math.random() * numberOfSquares);
        let squareLocationY = Math.floor(Math.random() * numberOfSquares);
        let x = squareLocationX * this.unitSize;
        let y = squareLocationY * this.unitSize;
        if (this.isOnSnake(x, y)) this.createApple();
        else this.apple = new Apple(x, y, "red");

    }

    isOnSnake(x, y) {
        for (let cell of this.snake.body) {
            if (cell.x == x && cell.y == y) {
                return true;
            }

        }
        return false;
    }

    drawRect(x, y, width, height, color) {
        this.canvasContext.fillStyle = color;
        this.canvasContext.fillRect(x, y, width, height);
    }
    drawBackGround() {
        this.canvasContext.fillStyle = this.color;
        this.canvasContext.fillRect(0, 0, this.canvas.width, this.canvas.height);

    }
    drawApple() {

        let x = this.apple.x;
        let y = this.apple.y;
        this.drawRect(x, y, this.unitSize, this.unitSize, this.apple.color);

    }
    drawSnake() {

        for (let cell of this.snake.body) {

            this.drawRect(cell.x, cell.y, this.unitSize, this.unitSize, "yellow")
        }
    }

    isAppleEaten() {
        let snakeH = this.snake.body[0]
        if (snakeH.x == this.apple.x && snakeH.y == this.apple.y) {
            this.snake.eatApple();
            this.createApple();
        }
    }
    checkHitBorder() {
        let snakeHead = this.snake.body[0]
        if (snakeHead.x >= this.canvas.width) {
            snakeHead.x = 0;
        }
        else if (snakeHead.y >= this.canvas.width) {
            snakeHead.y = 0;
        }
        else if (snakeHead.x < 0) {
            snakeHead.x = this.canvas.width - this.unitSize;
        }
        else if (snakeHead.y < 0) {
            snakeHead.y = this.canvas.width - this.unitSize;
        }
    }

    isSnakeHitBody() {
        let snakeHead = this.snake.body[0];
        for (let x = 1; x < this.snake.body.length; x++) {
            let cell = this.snake.body[x];
            if (snakeHead.x == cell.x && snakeHead.y == cell.y) {
                this.gameover();
            }
        }

    }

    gameover() {
        alert("GAMEOVER!!!!!")
    }
    update() {

        this.snake.move();
        this.isSnakeHitBody();
        this.checkHitBorder();
        this.isAppleEaten();
        

    }
    draw() {
        this.drawBackGround();
        this.drawScore();
        this.drawApple();
        this.drawSnake();
    }
    drawScore() {
        this.canvasContext.font = "20px Arial";
        this.canvasContext.fillStyle = "#00FF42";
        this.canvasContext.fillText("Score: " + (this.snake.body.length - 1), this.canvas.width - 120, 20);
    }
}
