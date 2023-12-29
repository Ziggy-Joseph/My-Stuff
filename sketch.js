// Declare the variable bird
var bird;
var pipes = [];
var hit = 0;
var score = 0;

//Game State Variables
var Menu = true;
var Play = false;
var GOver = false;


// Calls things once
function setup() {
  createCanvas(400, 600);
  bird = new Bird();
  pipes.push(new Pipe());
  
}
//Calls things every frame
function draw() {
  background(0);
  
   if (keyIsPressed == true) {
    
    if (keyCode == RIGHT_ARROW){
      //console.log("right");
      bird.x = bird.x + 2;
    }
  if (keyCode == LEFT_ARROW){
      //console.log("right");
      bird.x = bird.x - 2;
    }
       
   }
  
  //Menu State
  if (Menu == true) {
  fill(227, 101, 91);
  textSize(53);
  textAlign(CENTER);
  text("BOUNCY BIRD!", 200, 200);
    textSize(16);
  textAlign(CENTER);
  text("Use arrow keys to adjust position and, time 'space'",200, 450);
  text("to get a bouncy boost!", 200, 470);
  textSize(40);
  textAlign(CENTER);
  text("Press 's' to start!", 200, 350)
  }
  // Play State
  else if (Play == true){
  //Show Score
  fill(227, 101, 91);
  textSize(50);
  textAlign(CENTER);
  text(score, 100, 100);
    
    //Call Pipes
    for (var i = pipes.length-1; i >= 0; i--) {
     // console.log(pipes[i]);
    pipes[i].show();
    pipes[i].update();
          
      //Collision Detection
      if (pipes[i].hits(bird)) {
        //console.log("HIT");
        //console.log(hit);
        if (pipes[i].collide == false) {
          hit = hit + 1;
        }
        pipes[i].collide = true;
        
        //Checks Game Over
        if (hit == 3){
          Play = false;
          GOver = true;
        }
      }
       //If the player goes past pipes, add score
        if (bird.x > pipes[i].x && pipes[i].collide == false && pipes[i].score == false) {
          score = score + 1;
          pipes[i].score = true;
          //console.log(score);
    }
    //Destroyes Pipes offscreen
    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }
  bird.update();
  bird.show();
  
    //Every 100 frames, make a new pipe 
  if (frameCount % 163 == 0) {
    pipes.push(new Pipe());
    }
  }
  //Game Over State
  else if (GOver == true) {
    fill(227, 101, 91);
  textSize(50);
  textAlign(CENTER);
  text("Game Over",200, 200);
  textSize(20);
  textAlign(CENTER);
  text("Press 'r' to play again.",200, 250)
  fill(227, 101, 91);
  textSize(100);
  textAlign(CENTER);
  text(score, 200, 440);
  }
}


function keyPressed () {
  if (keyCode == 32) {
    //console.log(bird.y);
    //console.log("space");
    
    if (bird.y > 540){
       bird.up();
    }
  }
  //Left and Right 
  if (keyCode == RIGHT_ARROW){
      //console.log("right");
      bird.x = bird.x + 1;
    }
  if (keyCode == LEFT_ARROW){
      //console.log("right");
      bird.x = bird.x - 1;
  }
  //Restarts the game
  if (GOver == true){
     if (key == 'r'){ 
      GOver = false;
      Play = true;
      bird.y = height/4
      bird.x = 64
     
    
      pipes = [];
      pipes.push(new Pipe());
    
      score = 0;
      hit = 0;
    }
  }
  if (Menu == true) {
    if (key == 's'){
    Menu = false;
    Play = true;
    }
  }
  // if (key == 'g') {
  //   Play = false;
  //   GOver = true;
  // }
}