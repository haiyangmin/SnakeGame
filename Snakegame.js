<!DOCTYPE html>
<html>
<body>
<canvas id="canvas" width="400" height="400"></canvas>
<script>
window.onload=function() {
    drawBoard();
    document.addEventListener("keydown",keyPush);
    createSnake();
    generateFood ();
    drawFood(food.x,food.y);
    game;
}

var snake =[];
var direction = "right";
var snakeSize = 20;
var food = {};

function drawBoard(){
 canv=document.getElementById("canvas");
    ctx=canv.getContext("2d");
    var w = 400;
    var h = 400;
    ctx.fillStyle = 'lightgrey';
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = 'black';
    ctx.strokeRect(0, 0, w, h);
}

function createSnake(){
for (var i = 0; i < 4; i++) {
      snake.push({x: i, y:2});
		}
     return snake;
	};

function drawSnake (snake){
 for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = 'green';
        ctx.fillRect(snake[i].x*snakeSize, snake[i].y*snakeSize, snakeSize, snakeSize);
        ctx.strokeStyle = 'darkgreen';
        ctx.strokeRect(snake[i].x*snakeSize, snake[i].y*snakeSize, snakeSize, snakeSize);
    }
    }
    
function drawFood(X,Y){
        ctx.fillStyle = 'red';
        ctx.fillRect(X*snakeSize, Y*snakeSize, snakeSize, snakeSize);
 
        ctx.strokeStyle = 'yellow';
        ctx.strokeRect(X*snakeSize, Y*snakeSize, snakeSize, snakeSize);
    }

function generateFood (){
          food = {
            x: Math.floor((Math.random() * 20) ),
            y: Math.floor((Math.random() * 20) )
        }
        for (var i=0; i<snake.length; i++) {
            var snakeX = snake[i].x;
            var snakeY = snake[i].y;     
      if (food.x===snakeX  && food.y === snakeY) {
          food.x = Math.floor((Math.random() * 20) - 1);
          food.y = Math.floor((Math.random() * 20) - 1);
            }
        }
    }
    
function checkCollision(x, y, array) {
        for(var i = 0; i < array.length; i++) {
            if(array[i].x === x && array[i].y === y)
            return true;
        } 
        return false;
    }

function paint(){
      drawBoard();
      var lenth = snake.length;
      var nx = snake[lenth-1].x;
      var ny = snake[lenth-1].y;
  
    if(direction == "left") {
           nx--;
                }
else if( direction ==  "down") {
            ny++;    
                 }
else if( direction == "right"){
            nx++; 
        }
else if(direction == "up") {
            ny--;
         }

 var head = {x:nx,y:ny};
 
if (nx == -1 || nx == 20 || ny == -1 || ny == 20 || checkCollision(nx, ny, snake) ) {

        clearInterval(game);
        return;
    }  

else if (nx == food.x && ny == food.y) {
        //Create new food.
        generateFood ();
        snake.push(head);
    }
else {
    //var head = {x:nx,y:ny};
      	snake.push(head);
      snake.shift();
  }

drawSnake (snake);  
drawFood(food.x,food.y);

}

var game = setInterval(paint,1000/5)

function keyPush (event) {

        keyCode = event.keyCode;

        switch (keyCode) {

        case 37:
            if (direction != 'right') {
                direction = 'left';
            }
            console.log('left');
            break;

        case 39:
            if (direction != 'left') {
                direction = 'right';
                console.log('right');
            }
            break;

        case 38:
            if (direction != 'down') {
                direction = 'up';
                console.log('up');
            }
            break;

        case 40:
            if (direction != 'up') {
                direction = 'down';
                console.log('down');
            }
            break;
        }
    }
</script>
</body>
</html>

