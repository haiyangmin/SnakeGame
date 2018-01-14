function drawBoard(){
 canv=document.getElementById("canvas");
    ctx=canv.getContext("2d");
    var w = 400;
    var h = 400;
    var direction = "right";
    ctx.fillStyle = 'lightgrey';
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = 'black';
    ctx.strokeRect(0, 0, w, h);
}

function createSnake (){
 var snake =[{x:1,y:2},{x:2,y:2},{x:3,y:2},{x:4,y:2},];
 return snake;
 }
 
function drawSnake (){
   createSnake();
    var snakeSize = 20;
    var snake =[{x:1,y:2},{x:2,y:2},{x:3,y:2},{x:4,y:2},];
 for (let i = 0; i < 4; i++) {
        ctx.fillStyle = 'green';
        ctx.fillRect(snake[i].x*snakeSize, snake[i].y*snakeSize, snakeSize, snakeSize);
        ctx.strokeStyle = 'darkgreen';
        ctx.strokeRect(snake[i].x*snakeSize, snake[i].y*snakeSize, snakeSize, snakeSize);
}
}
