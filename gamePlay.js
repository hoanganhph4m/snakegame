class GamePlay {
    snake;
    apple;
    canvas;
    canvasContext;
    color;
    unitSize;

    constructor(width, height, color) {
        this.apple = new Apple(3, 4, "red");
        this.canvas = document.getElementById("gameCanvas");
        this.canvasContext = this.canvas.getContext("2d");
        this.canvas.width = width;
        this.canvas.height = height;
        this.color = color;
        this.unitSize = width/10;
      
        let numberOfSquares = this.canvas.width / this.unitSize;
        
        let squareLocationX = Math.floor(Math.random() * numberOfSquares);
        let squareLocationY = Math.floor(Math.random() * numberOfSquares);
        let x = squareLocationX * this.unitSize;
        let y = squareLocationY * this.unitSize;
        this.snake = new Snake(x,y,0,1,this.unitSize);
        // setInterval(update, 1000/10)
    }
    creatApple() {
        let numberOfSquares = this.canvas.width / this.unitSize;

        let squareLocationX = Math.floor(Math.random() * numberOfSquares);
        let squareLocationY = Math.floor(Math.random() * numberOfSquares);
        let x = squareLocationX * this.unitSize;
        let y = squareLocationY * this.unitSize;

        this.apple = new Apple(x, y, "red");
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
        this.drawRect(x, y, this.unitSize, this.unitSize,this.apple.color);
    
    }
    drawSnake() {
        
        for(let cell of this.snake.body){
            
            this.drawRect(cell.x , cell.y , this.unitSize, this.unitSize, "yellow")
        }
    }
}
const gameplay = new GamePlay(400, 400, "black");
gameplay.drawBackGround();
gameplay.creatApple();
gameplay.drawApple();
gameplay.drawSnake();