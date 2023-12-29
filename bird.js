// Declare the Bird class
function Bird() {
  this.y = height / 4;
  this.x = 64;
 

  this.gravity = 1;
  this.lift = -32;
  this.velocity = 0;

  // Show bird
  this.show = function() {
    fill(255);
    ellipse(this.x, this.y, 32, 32);
  }
  
  //Makes the bird go up
  this.up = function() {
    this.velocity = this.lift;
    //console.log(this.velocity);
  }
 
  this.update = function() {
    this.velocity += this.gravity;
  
    this.y += this.velocity;

    if (this.y + 16 > height) {
      this.y = height - 16;
      this.velocity = this. velocity * -0.9;
    }
    
    if (this.y <= 20) {
      console.log("If active");
      this.y = 20;  
      this.velocity = 0;
   }
  }

}