var path,mainCyclist;
var pathImg,mainRacerImg1,mainRacerImg2,op1,op2,op3

function preload(){
  pathImg = loadImage("images/Road.png");
  mainRacerImg1 = loadAnimation("images/mainPlayer1.png","images/mainPlayer2.png");

  // load animation of any 2 opponents

}

function setup(){
  
createCanvas(600,600);
  
// Moving background
path=createSprite(300,300);
path.scale=2
path.addImage(pathImg);
path.velocityX = -7;

//creating boy running with running anf falling animation

// adjust scale of player
    
}

function draw() {
  background(0);
  
  drawSprites();
  
  // moving player up and down with mouse
   mainCyclist.y = World.mouseY;
  
   // Creating edge sprites and collide mainCyclist with edges
  
  //code to reset the background
  if(path.x < 0 ){
    path.x = width/2;
  }
  riders()  
    
    
 }
  
  


function riders(){
  if (frameCount%100===0){
    // create rider sprite, assign random y position and give negative x velocity

    // using if else assign 2 different animation to riders / opponents
    //assign lifetime
  }
}
