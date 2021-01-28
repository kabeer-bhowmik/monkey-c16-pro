
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,315,2,2);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.1;

  ground=createSprite(400,350,900,10);
  
  
  obstacleGroup=createGroup();
  foodGroup=createGroup();
}


function draw() {
background("lightBlue");
  drawSprites();
spawnBananas();
spawnObstacle();
text("survival time:"+score,300,20);
if(obstacleGroup.isTouching(monkey)){ obstacleGroup.setVelocityXEach(0);  foodGroup.setVelocityXEach(0); }

score=Math.ceil(frameCount/frameRate())

if(keyDown("space") ) { monkey.velocityY = -12; } monkey.velocityY = monkey.velocityY + 0.8; monkey.collide(ground);


}



 function spawnBananas(){
if (frameCount % 80 === 0) 
{ banana = createSprite(600,250,40,10);
 banana.y = random(120,200);
banana.addImage(bananaImage);
banana.scale=0.1;
 banana.velocityX=-5;
 foodGroup.add(banana);
}
   
   
 }
 
function spawnObstacle(){
if(frameCount %200 === 0) 
{ obstacle = createSprite(600,335,10);
obstacle.addImage(obstacleImage);
obstacle.scale=0.1;
 obstacle.velocityX=-5;
 obstacleGroup.add(obstacle);
}
   
   
 }
 