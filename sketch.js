var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage,blue_balloonImage,backgroundImage;
var groupred_balloon,groupgreen_balloon,grouppink_balloon,groupblue_balloon;
var red_balloon,green_balloon,blue_balloon,pink_balloon;
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
  
  groupred_balloon= new Group()
  groupgreen_balloon= new Group()
  grouppink_balloon= new Group()
  groupblue_balloon= new Group()
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
  if (keyWentDown("space")) {
    createArrow();
  }
  
  //creating continous balloons
  

  spawnredballoon();
  spawngreenballoon();
  spawnblueballoon();
  spawnpinkballoon();
  drawSprites();
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


function spawnredballoon() {
if(frameCount%50===0){
  red_balloon = createSprite(20, 370, 10, 10);
  red_balloon.addImage(red_balloonImage);
  red_balloon.scale = 0.1;
  red_balloon.velocityX = 3;
  red_balloon.y=Math.round(random(50,300));
  red_balloon.lifetime = 150;
 groupred_balloon.add(red_balloon);
  
}
  
}

function spawnblueballoon() {
if(frameCount%100===0){
  blue_balloon=createSprite(20,370,10,10);
  blue_balloon.addImage(blue_balloonImage);
  blue_balloon.scale=0.1;
  blue_balloon.velocityX= 3;
  blue_balloon.y=Math.round(random(150,300));
  blue_balloon.lifetime=150;
  groupblue_balloon.add(blue_balloon);
  
}
  //write code for spwaning blue balloons
}

function spawngreenballoon() {
if(frameCount%120===0){
green_balloon=createSprite(20,370,10,10);
green_balloon.addImage(green_balloonImage);
green_balloon.scale=0.1;
green_balloon.velocityX=3;
green_balloon.y=Math.round(random(50,150));
green_balloon.lifetime=150;
groupgreen_balloon.add(green_balloon);
}
  //write code for spwaning green balloons
}

function spawnpinkballoon() {
  if(frameCount%170===0){
  pink_balloon=createSprite(20,370,10,10);
  pink_balloon.addImage(pink_balloonImage);
  pink_balloon.scale=1.2;
  pink_balloon.velocityX=3;
  pink_balloon.y=Math.round(random(100,200));
  pink_balloon.lifetime=150;
  grouppink_balloon.add(pink_balloon);
  }
  //write code for spwaning pink balloons
}
