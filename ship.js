function Ship () {
  this.pos = createVector(width/2, height/2);
  this.r = 20;
  this.heading = 0;
  this.rotation = 0;
  this.vel = createVector(0, 0);
  this.isBoosting = false;

  this.boosting = function(b) {
    this.isBoosting = b;
  }

  this.update = function() {
    if (this.isBoosting) {
      this.boost();
    }
    this.pos.add(this.vel);
    this.vel.mult(0.99);
  }

  this.boost = function() {
    var force = p5.Vector.fromAngle(this.heading);
    force.mult(0.1);
    this.vel.add(force);
  }

  this.hits = function(asteroid) {
    var d = dist(this.pos.x, this.pos.y, asteroid.p.x, asteroid.p.y);
    if (d < this. r + asteroid.r) {
      return true;
    } else {
      return false;
    }
  }

  this.render = function() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.heading + PI / 2);
    fill(0);
    stroke(255);
    triangle(-this.r, this.r, this.r, this.r, 0, -this.r)
    pop();
  }

  // Ship will wrap around the screen
  this.edges = function() {
    // for width/
    if(this.pos.x > width + this.r) {
      this.pos.x = -this.r;
    } else if(this.pos.x < -this.r) {
      this.pos.x = width + this.r;
    }
    // for height
    if(this.pos.y > height + this.r) {
      this.pos.y = -this.r;
    } else if(this.pos.y < -this.r) {
      this.pos.y = height + this.r;
    }
  }

  this.setRotation = function(a){
    this.rotation = a;
  }

  this.turn = function() {
    this.heading += this.rotation;

  }
}
