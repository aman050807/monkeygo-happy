
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var score;
var obstacle;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
 
}



function setup() {
  createCanvas(670,300);
    monkey=createSprite(50,180,20,50);
    monkey.addAnimation("running",monkey_running);
    monkey.scale=0.15;
   
  
    ground = createSprite(50,234,900,20);
    ground.velocityX=-4;
    ground.x = ground.width /2;
    console.log(ground.x)
}

function draw() {
background(180)
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -8;
    monkey.velocityY = monkey.velocityY + 0.8
} 
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  drawSprites();
}

function spawnfood(){
  if(frameCount %60===0){
  banana=createSprite(600,165,10,40);
  banana.y = Math.round(random(120,200));
  banana.addImage(bananaImage);
  banana.velocityX = -3;
  banana.lifetime = 200;
  bananaGroup.add(banana);
    }
  }

function spawnobstacles(){
 if(frameCount % 300 === 0) {
    var obstacle = createSprite(600,165,10,40);
   obstacle.lifetime = 300;
   obstacle.addImage(obstacleImage);
 }
}

//Add spawnobstacles() function like in trex 
//add image for obstacles

//add spawnfood() function like above 
//add images
  


