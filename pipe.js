function Pipe () {
  this.top = random(0.50);
  this.bottom = random(100, 430);
  this.x = width;
  this.w = 20;
  this.speed = 2;
  this.collide = false;
  this.score = false;
  
  this.highlight = false;

  
  // Collision Detection with bird
  this.hits = function(bird) {
    if (bird.y < this.top || bird.y > height - this.bottom) {
      if (bird.x > this.x && bird.x < this.x + this.w){
        this.highlight = true;
        return true;
      }
    }
      return false;
  }
  
  //Draws pipes
  this.show = function() {
    fill(255);
    if (this.highlight) {
      fill (255, 0, 0);
    }
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height-this.bottom, this.w, this.bottom);
  }
  //Controls speed at which pipes appear
  this.update = function() {
    this.x -= this.speed;
  }
  //Deletes pipes offscreen
  this.offscreen = function(){
    if (this.x < -this.w){
      return true;
    } else {
      return false;
    }
  }
}