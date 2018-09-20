var s;
var food;
var scl = 20;

function setup(){
	createCanvas(600, 600);
	s = new Snake();
	frameRate(10);

	pickFoodLocation();
}

function pickFoodLocation(){
	cols = floor(width / scl);
	rows = floor(height / scl);

	food = createVector(floor(random(cols)), floor(random(rows)));
	food.mult(scl);

}

function draw(){
	background(51);
	s.update();
	s.show();

	if(s.eat(food)){
		console.log('comeu');
		pickFoodLocation();
	}

	fill(255, 204, 0);
	rect(food.x, food.y, scl, scl);

}


function keyPressed(){
	if(keyCode === UP_ARROW){
		s.dir(0, -1);
	}else if(keyCode === DOWN_ARROW){
		s.dir(0, 1);
	}else if(keyCode === RIGHT_ARROW){
		s.dir(1, 0);
	}else if(keyCode === LEFT_ARROW){
		s.dir(-1, 0);
	}
}