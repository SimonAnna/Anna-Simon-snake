/**/


var snake;
var snakeLength;
var snakeSize;

var food;

var context;
var screenWidth;
var screenHeight;

/*start calling functions*/
gameInitialize();
snakeInitialize();
foodInitialize();
setInterval(gameLoop, 1000/25);
/*end calling functions*/
function gameInitialize(){
   var canvas=document.getElementById("game-screen");
   context = canvas.getContext("2d");
   
   screenWidth = window.innerWidth;
   screenHeight = window.innerHeight;
   
   canvas.width = screenWidth;
   canvas.height = screenHeight;
}
/*draw functions"draw it" and update functions update it*/
function gameLoop(){
 gameDraw();   
 snakeUpdate(); 
 snakeDraw();
 foodDraw();
}

function gameDraw(){
    context.fillStyle = "rgb(160,232,165)";
    context.fillRect(0, 0, screenWidth, screenHeight);
}

function snakeInitialize(){
    /*[] is an array and helps keep multiple variables*/
    snake= [];
    snakeLength = 5;
    snakeSize = 25;
    /*part 1:setting up a counting number, part2:when to stop the for loop, part 3:how you change the counting number*/
    for( var index=snakeLength - 1; index >=0; index-- ){
    snake.push( {       
       x:index,
       y:0  
     });    
    }
}
/*draws the snake*/
function snakeDraw(){
   for(var index =0; index < snake.length; index++ ) {   
       context.fillStyle= "black";
       context.fillRect(snake[index].x * snakeSize,snake[index].y * snakeSize, snakeSize, snakeSize );
   } 
}
/*helps move the snake*/
function snakeUpdate(){
  var snakeHeadX = snake[0].x;
  var snakeHeadY = snake[0].y;
  
  snakeHeadX++;
  
  var snakeTail = snake.pop();
  snakeTail.x = snakeHeadX;
  snakeTail.y = snakeHeadY;
  snake.unshift(snakeTail);
  
}

function foodInitialize(){
    food = {
        x:0,
        y:0
    };
}

function foodDraw(){
    context.fillStyle = "black";
    context.fillRect(food.x, food.y, snakeSize, snakeSize);
}