var scl = 20;
function Snake(){
	this.snakeSize = 0;
	this.velocity = 5; 
	this.x = 0;
	this.y = 0;
	this.xspeed = 1;
	this.yspeed = 0;
	this.tail = [];

	this.update = function(){
		for(i = 0; i < this.tail.length - 1; i++){
			this.tail[i] = this.tail[i+1];
		}

		this.tail[this.snakeSize - 1] = createVector(this.x, this.y);

		this.x += this.xspeed * scl;
		this.y += this.yspeed * scl;

		this.x = constrain(this.x, 0, width - scl);
		this.y = constrain(this.y, 0, height - scl);
	}

	this.show = function(){
		fill(255);

		for(var i = 0; i < this.tail.length; i++){
			rect(this.tail[i].x, this.tail[i].y, scl, scl);
		}

		rect(this.x, this.y, scl, scl);
	}

	this.eat = function(pos){
		var d = dist(this.x, this.y, pos.x, pos.y);

		if(d <= 2){
			this.snakeSize++;
			return true;
		}

		return false;
	}

	this.dir = function(x, y){
		this.xspeed = x;
		this.yspeed = y;
	}
}