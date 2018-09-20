var scl = 20;
function Snake(){
	this.snakeSize = 1;
	this.velocity = 5; 
	this.x = 0;
	this.y = 0;
	this.xspeed = this.velocity;
	this.yspeed = 0;

	this.update = function(){
		this.x += this.xspeed;
		this.y += this.yspeed;

		this.x = constrain(this.x, 0, width - scl);
		this.y = constrain(this.y, 0, height - scl);
	}

	this.show = function(){
		rect(this.x, this.y, scl, scl);
	}

	this.dir = function(x, y){
		this.xspeed = x * this.velocity;
		this.yspeed = y * this.velocity;
	}
}