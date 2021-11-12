var sizes = ["small", "medium", "large"];
var demo1 = $("#balls");
var startY1 = 20;
var endY1 = 0;
var startX1 = randomNumber(-25, 25);
var endX1 = randomNumber(20, 30);
var tl = new TimelineMax();

for (var i = 0; i < 20; i++) {
  var sizeIndex = randomNumber(0,2); //get random number between 0 and 2
  var size1 = sizes[sizeIndex]; //get random size
  var speed1 = (6 - sizeIndex) //larger faster
  var bubble = $('<div class="bubble ' + size1 + 'Bubble"/>').appendTo(demo1); //create a bubble
  tl.set(bubble, {y:startY1}, 0) // place it at the bottom
  tl.set(bubble, {x:startX1}, 0)
  //create an animation at a random start time
  tl.to(bubble, speed1, {y:endY1, x:randomNumber(-30, 30), repeatDelay:Math.random()*2, repeat:500}, Math.random() * 2)
}

function randomNumber(min, max){
	return Math.floor(Math.random() * (1 + max - min) + min);
}
