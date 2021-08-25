var tower , towerImg;
var ghost , ghostImg;
var humanG ,girl1 , girl2 , boy1 , boy2;
var gameOver ,gameOverImg ;

HumanHunt = 0 ;

var PLAY=1;
var END=0;
var gameState=PLAY;

function preload(){
  towerImg=loadImage("Brick img.jpeg");
  ghostImg=loadImage("Ghost image.jpeg");
  girl1=loadImage("Girl1.jpeg");
  girl2=loadImage("Girl2.jpeg");
  boy1=loadImage("Boy 1.jpeg");
  boy2=loadImage("Boy 2.jpeg");
  gameOver=loadImage("gameOver img.jpeg");
}

function setup() {
 createCanvas(500,1000);
 
 tower=createSprite(200,250);
 tower.addImage(towerImg);
 tower.velocityY=-5;

 ghost=createSprite(200,500);
 ghost.addImage(ghostImg);
 ghost.scale=0.3;

 gameOver=createSprite(250,500);
 gameOver.addImage(gameOverImg);
 gameOver.scale=0.8;
 gameOver.visible=false;
 
 humanG=new Group();

}

function draw() {
 background(0);

 drawSprites();
 textSize(20);
 fill(255);
 text("HumanHunt:"+ HumanHunt,30,900);

  if (gameState===PLAY) {
     HumanHunt=HumanHunt + Math.round(getFrameRate()/50);
     tower.velocityY = -(6 + 2*distance/150);
     
     ghost.x=World.mouseX;
     
     // code to reset the background
     if (tower.y < 0) {
     tower.y=height/2;
     }

     // creating continuous humans
     var select_humans = Math.round(random(1,3));
     if (World.frameCount % 150==0) {
         if (select_humans==1) {
             girl1();
         } else if (select_humans==2) {
             girl2();
         } else if (select_humans==3) {
             boy1();
         } else {
             boy2();
         }
     }
 
    if (girl1.isTouching(ghost)) {
         gameState=END;
         girl1.velocityX=0;
         girl1.addImage("girl1Img",gameOverImg);
    }

    if (girl2.isTouching(ghost)) {
        gameState=END;
        girl2.velocityX=0;
        girl2.addImage("girl2Img",gameOverImg);
   }

   if (boy1.isTouching(ghost)) {
       gameState=END;
       boy1.velocityX=0;
       boy1.addImage("boy1Img",gameOverImg);
   }

   if (boy2.isTouching(ghost)) {
       gameState=END;
       boy2.velocityX=0;
       boy2.addImage("boy2Img",gameOverImg);
   }

} else if (gameState=END) {
    gameOver.visible=true;
}
    textSize(20);
    fill(255);
    text("Press UP ARROW to restart the game!",500,200);
  
  tower.velocityY=0;

  humanG.setVelocityEach(0);
  humanG.setLifetimeEach(-1);

  if (KeyDown("UP_ARROW")) {
      reset();
  }
  
 





}