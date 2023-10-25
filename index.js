const gameplay = new GamePlay(1000, 1000, "black");
setInterval(() => {
    
    gameplay.update();
    gameplay.draw();
    
}, 200)

window.addEventListener("keydown", (event)=> {
    if(event.keyCode == 37) {
        gameplay.snake.turnLeft();
    }
    else if(event.keyCode == 38) {
        gameplay.snake.turnUp();
    }
    else if(event.keyCode == 39) {
        gameplay.snake.turnRight();
    }
    else if(event.keyCode == 40) {
        gameplay.snake.turnDown();
    }
})