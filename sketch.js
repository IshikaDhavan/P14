var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var score;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");

}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
// adding score
score=0;

}

function draw() {
 background(0);

 
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  

  //creating continous balloons
  var select_balloon = Math.round(random(1,1));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2){
      blueBalloon();
    } else if (select_number == 3) {
      greenBalloon();
    } else {
      pinkBalloon
    }
  }
  
  drawSprites();

  textSize(20);
text("score =" +score,270,30);

}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}


function redBalloon() {
  var redballoon = createSprite(0,Math.round(random(20, 370)), 10, 10);
  redballoon.addImage(red_balloonImage);
  redballoon.velocityX = 3;
  redballoon.lifetime = 150;
  redballoon.scale = 0.1;

}

function blueBalloon() {
  var blueballoon = createSprite(0,Math.round(random(20,370)),10,10);
  blueballoon.addImage(blue_balloonImage);
  blueballoon.velocityX = 3;
  blueballoon.lifetime = 150;
  blueballoon.scale = 0.1;
}

function greenBalloon() {
  var greenballoon = createSprite(0,Math.round(random(20,370)),10,10);
  greenballoon.addImage(green_balloonImage);
  greenballoon.velocityX = 3;
  greenballoon.lifetime = 150;
  greenballoon.scale = 0.1;
}

function pinkBalloon() {
  var pinkballoon = createSprite(0,Math.round(random(20,370)),10,10);
  pinkballoon.addImage(pink_balloonImage);
  pinkballoon.velocityX = 3;
  pinkballoon.lifetime = 150;
  pinkballoon.scale = 0.1;
}
