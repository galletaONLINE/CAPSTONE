var floor,car,fireTruck,truckGreen,truckGray,booster,loose;
var floorImg,carImg,fireTruckImg,truckGreenImg,truckGrayImg,BoosterImg;
var score=0;
var boosterG, damageGroup;

var END =0;
var PLAY =1;
var gameState = PLAY;

var score=0;
var loose,reset;

function preload(){
    
 floorImg = loadImage("Road.png");
 carImg = loadImage("Conductor.png");
 fireTruckImg = loadImage("FireTruck.png");
 truckGreenImg = loadImage("TruckG.png");
 truckGrayImg= loadImage("TruckGray.png");
 BoosterImg = loadImage("rayo.png");
 looseImg = loadImage("gameOver.png");

}

function setup() {

  createCanvas(1200,300);
floor=createSprite(100,150);
floor.addImage(floorImg);
floor.velocityX = -5;

car  = createSprite(70,150);
car.addImage(carImg);
car.scale=0.15;
car.setCollider("rectangle",0,0,40,40);

loose = createSprite(650,150);
loose.addImage(looseImg);
loose.scale = 1;
loose.visible = false;  
  
}

function draw() {
 
  background(0);
  drawSprites();
  textSize(20);
  fill(255);
  text("Puntaje: "+ score,900,30);
  
  if(gameState===PLAY){
    score = score + Math.round(getFrameRate()/50);
   floor.velocityX = -(6 + 2*score/200);
  
   edges= createEdgeSprites();
   car.collide(edges);
   if(keyDown("UP_ARROW")){
     -3
   }
  }
  if(floor.x < 0 ){
    floor.x = width/1; 
  }

  car.y=World.mouseY;
  
  if(car.y=0){
    car.y=150;
  }

  if(car.y=300){
    car.y=150;
  } 
  

}