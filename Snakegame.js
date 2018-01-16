<!DOCTYPE html>
<html>
<head>
<style>
 body {
	background-color: #E0E4CC;
	font-family: 'Montserrat', sans-serif;
	margin: 0;
	padding: 0;
	text-align: center;
}
</style>
</head>
<body>
<p >Score:<span id="score" style="color:blue;font-weight:bold"></span> </p>


<canvas id="canvas" width="400" height="500"></canvas>
<script>

window.addEventListener('load', gameStart);

function gameStart() {
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
var ateFoodQty= 0;
var score = 0;

function drawBoard(){
 canv=document.getElementById("canvas");
    ctx=canv.getContext("2d");
    var w = 400;
    var h = 500;
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
            y: Math.floor((Math.random() * 25) )
        }
        for (var i=0; i<snake.length; i++) {
            var snakeX = snake[i].x;
            var snakeY = snake[i].y;     
      if (food.x===snakeX  && food.y === snakeY) {
          food.x = Math.floor((Math.random() * 20) - 1);
          food.y = Math.floor((Math.random() * 25) - 1);
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
function gameScore (X){
document.getElementById("score").innerHTML = X;
}

function gameOver() {

ctx.font = "30px Verdana";
// Create gradient
var gradient = ctx.createLinearGradient(0, 0, canv.width, 0);
gradient.addColorStop("0", "magenta");
gradient.addColorStop("0.5", "blue");
gradient.addColorStop("1.0", "red");
// Fill with gradient
ctx.fillStyle = gradient;
ctx.fillText("Game Over", 100, 230);

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
 
if (nx == -1 || nx == 20 || ny == -1 || ny == 25 || checkCollision(nx, ny, snake) ) {

        clearInterval(game);
        gameOver();
        return;
    }  

else if (nx == food.x && ny == food.y) {
        //Create new food.
        ateFoodQty++;
        score = ateFoodQty * 10;
        gameScore (score);
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
