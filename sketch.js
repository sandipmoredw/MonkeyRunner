
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime = 0,score = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
}



function setup() {
  createCanvas(600,500);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation( "running", monkey_running);
  monkey.scale  = 0.1;
  
  ground = createSprite(400,350,1500,10);
  ground.velocityX = -4
  ground.x = ground.width/2;
  console.log(ground.x);
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
  background("white");
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
   if(keyWentDown("space")) {
        monkey.velocityY = -15;
    }
    //add gravity
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground); 
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score :",+ score,500,60);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time :",+ score,30,100);
  
  
   spawnbanana();
   spawnobstacale(); 

  drawSprites();
  
}

function spawnbanana(){
  
  if(World.frameCount%80 === 0){
    
    bananas = createSprite(400,300,20,20);
    bananas.addImage(bananaImage);
    bananas.y = Math.round(random(120,200));
    bananas.velocityX = -8;
    bananas.setLifetime = 50;
    bananas.scale = 0.1;
    
    bananaGroup.add(bananas)
  
}

}

function spawnobstacale(){
  
  if(World.frameCount%300 === 0){
    
      obstacles = createSprite(400,325,20,20);
      obstacles.addImage(obstacleImage);
      obstacles.x = Math.round(random(100,380));
      obstacles.velocityX = -8;
      obstacles.setLifetime = 50;
      obstacles.scale = 0.2;
    
    
    obstacleGroup.add(obstacles);
  
  }
}


