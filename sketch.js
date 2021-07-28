var ship,shipimage
var sea, seaimage
function preload(){
seaimage = loadImage('sea.png')
shipimage = loadAnimation('ship-1.png','ship-2.png','ship-3.png','ship-4.png')
}


function setup(){
  createCanvas(400,400);
  sea= createSprite(200,200)
  sea.addImage(seaimage)
  sea.scale= 0.4
  ship= createSprite(200,250)
  ship.addAnimation('movingship',shipimage)
  ship.scale = 0.2
  sea.velocityX= -4
  console.log(sea.width)
}

function draw() {

  background("blue");
  if(sea.x<0)
{
  sea.x=sea.width/5.25
}
 drawSprites()
}