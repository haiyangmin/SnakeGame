var snake =[{x:1,y:1},{x:2,y:1},{x:3,y:1},{x:4,y:1}];
var direction = "right";
var snakeSize = 20;

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

 
function drawSnake (snake){
 for (let i = 0; i < 4; i++) {
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


