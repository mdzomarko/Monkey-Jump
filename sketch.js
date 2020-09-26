
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;
var obstacleGroup, bananaGroup

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,250)
  //create monkey sprite
  monkey = createSprite(100, 200);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1
  //create ground sprite
  ground = createSprite(300, 235, 600, 10);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  
  obstacleGroup = createGroup();
  bananaGroup = createGroup();
}


function draw() {
background("white");
  
  if(keyDown("space")&& monkey.y >= 199) {
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  if (ground.x < 300){
    ground.x = ground.width/2;
  }
  spawnBananas();
  spawnObstacles();

  
  obstacleGroup.setLifetimeEach(-1);
  bananaGroup.setLifetimeEach(-1);
  
  
  text("Survival Time: "+ score, 300,50);
  score = score + Math.round(getFrameRate()/60);
  drawSprites();
  
}

function spawnBananas() {
  // code to spawn the bananas
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    
    bananaGroup.add(banana);
  }
}
function spawnObstacles() {
  // code to spawn the obstacles
  if (frameCount % 80 === 0) {
    var obstacle = createSprite(600,120,40,10);
    obstacle.y = Math.round(random(212,212));
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 200;
    
    //adjust the depth
    obstacle.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    
    obstacleGroup.add(obstacle);
  }
}







