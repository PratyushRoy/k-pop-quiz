var box, box2,box3,box4,boxImg;
var tick,tick2,tick3,tick4,tickImg;
var play,playImg;
var credits, creditsImg;
var Bg1,Bg1Img;
var gamestate=1;
var logo,logoImg;
var Bg2c1,Bg2c1Img,Bg2c2,Bg2c2Img,Bg2c3,Bg2c3Img;
var Bg2Group;
var q1, q2,q3,q4,q5,q6,q7,q8,q9,q10;
var next,nextImg;

function preload(){

  Bg1Img=loadImage("Bg1.jpg");
  playImg=loadImage("play-removebg-preview.png");
  logoImg=loadImage("logo.png");
  Bg2c1Img=loadImage("Bg2 c1.jpg");
  Bg2c2Img=loadImage("Bg2 c2.jpeg");
  Bg2c3Img=loadImage("Bg2 c3.jpeg");
  boxImg=loadImage("me-1.png");
  tickImg=loadImage("hy.png");
  nextImg=loadImage("next-arrow.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  Bg2Group=createGroup();

  Bg1=createSprite(width/2,height/2);
  Bg1.addImage(Bg1Img);
  Bg1.scale=0.6
  Bg1.visible=false;
   
  logo=createSprite(width/2,height/1.2);
  logo.addImage(logoImg);
  logo.scale=1.25;
  
  play=createSprite(width/2,height/2);
  play.addImage(playImg);
  play.scale=0.6;
  play.visible=false;
  
  Bg2c1=createSprite(width/2,height/2)
  Bg2c1.scale=1
  Bg2c1.visible=false;
  
  Bg2c2=createSprite(width/2,height/2)
  Bg2c2.scale=3
  Bg2c2.visible=false;
  
  Bg2c3=createSprite(width/2,height/2)
  Bg2c3.scale=0.5
  Bg2c3.visible=false;
  
  box=createSprite(width/2,height/1.82)
  box.addImage(boxImg)
  box.scale=0.45;
//  box.visible=false;
  
  box2=createSprite(width/2,height/1.55)
  box2.addImage(boxImg)
  box2.scale=0.45;
 // box2.visible=false;
  
  box3=createSprite(width/2,height/1.36)
  box3.addImage(boxImg)
  box3.scale=0.45;
//  box3.visible=false;
  
  box4=createSprite(width/2,height/1.21)
  box4.addImage(boxImg)
  box4.scale=0.45;
//  box4.visible=false;
  
  tick=createSprite(width/1.5,height/1.82);
  tick.addImage(tickImg);
  tick.scale=0.1;
//  tick.visible=false;
  
  tick2=createSprite(width/1.5,height/1.55);
  tick2.addImage(tickImg);
  tick2.scale=0.1;
//  tick2.visible=false;
  
  tick3=createSprite(width/1.5,height/1.36);
  tick3.addImage(tickImg);
  tick3.scale=0.1;
//  tick3.visible=false;
  
  tick4=createSprite(width/1.5,height/1.21);
  tick4.addImage(tickImg);
  tick4.scale=0.1;
//  tick4.visible=false;
  
  next=createSprite(width/1.45,height/1.18);
  next.addImage(nextImg);
  next.scale=0.083;
//  next.visible=false;
}

function draw() {
  background("black");
   
    

  drawSprites();
  
 if(gamestate===1){

    play.visible=true;
    Bg1.visible=true;
    spawnQuestions();
    
 }  
  
if(mousePressedOver(next)&&gamestate===2.5){
    gamestate+=0.5;
}
  
  if(mousePressedOver(next)&&gamestate===3.5){
    gamestate+=0.5;
  }
  
  if(gamestate===2.5){
  //  tick3.visible=false;
   fill("purple");
   textSize(35);
   textFont("Cooper Black");
   text("Kim Seokjin",150,620);
    box.visible=false;
    box2.visible=false;
    box4.visible=false;
    
// if(frameCount===){
  }
  
 if(gamestate===3){
   box.visible=true;
   box2.visible=true;
   box3.visible=true;
   box4.visible=true;
   tick3.visible=false;
   
   spawnQuestions();
   
   fill("yellow");
    textSize(35)
    textStyle(BOLD);
    text("Question 2",152,70);
   
   fill("Orange")
   textSize(40);
   textFont("French Script MT")
   textStyle(BOLD);
   text("EXO was formed under which company?",10,250);
   
   fill("purple");
   textSize(30);
   textFont("Cooper Black");
   text("SM Entertainment ",113,420);
   
   fill("purple");
   textSize(30);
   textFont("Cooper Black");
   text("JYP Entertainment",105,520);
   
   fill("purple");
   textSize(25);
   textFont("Cooper Black");
   text("Big Hit Entertainment",112,615);
   
   fill("purple");
   textSize(25);
   textFont("Cooper Black");
   text("Yuehua Entertainment",107,718);   
      
      box.visible=true;
      box2.visible=true;
      box3.visible=true;
      box4.visible=true;
   
   if(mousePressedOver(box)&&gamestate===3){
     tick.visible=true;
     gamestate=3.5;
   } 
 }
  
  if(gamestate===4){
    box.visible=true;
   box2.visible=true;
   box3.visible=true;
   box4.visible=true;
   tick.visible=false;
   
   spawnQuestions();
   
   fill("yellow");
    textSize(35)
    textStyle(BOLD);
    text("Question 3",152,70);
   
   fill("Orange")
   textSize(40);
   textFont("French Script MT")
   textStyle(BOLD);
   text("EXO was formed under which company?",10,250);
   
   fill("purple");
   textSize(30);
   textFont("Cooper Black");
   text("SM Entertainment ",113,420);
   
   fill("purple");
   textSize(30);
   textFont("Cooper Black");
   text("JYP Entertainment",105,520);
   
   fill("purple");
   textSize(25);
   textFont("Cooper Black");
   text("Big Hit Entertainment",112,615);
   
   fill("purple");
   textSize(25);
   textFont("Cooper Black");
   text("Yuehua Entertainment",107,718);   
      
      box.visible=true;
      box2.visible=true;
      box3.visible=true;
      box4.visible=true;
   
   if(mousePressedOver(box)){
     tick.visible=true;
     gamestate=3.5;
   } 
  }
  
  
  if(gamestate===3.5){
    fill("purple");
    textSize(30);
    textFont("Cooper Black");
    text("SM Entertainment",113,420);
    box3.visible=false;
    box2.visible=false;
    box4.visible=false;
  }
  
  
  
    if(gamestate===1){
  //  Bg1.visible=false;
    play.visible=false;
    logo.visible=false;
    next.visible=true;
      
    fill("yellow");
    textSize(35)
    textStyle(BOLD);
    text("Question 1",width/2,70);
   
   fill("Orange")
   textSize(49);
   textFont("French Script MT")
   textStyle(BOLD);
   text("Who is the best chef in BTS ?",18,250);
   
   fill("purple");
   textSize(35);
   textFont("Cooper Black");
   text("Kim Taehyung",130,420);
   
   fill("purple");
   textSize(35);
   textFont("Cooper Black");
   text("Kim Namjoon",135,520);
   
   fill("purple");
   textSize(35);
   textFont("Cooper Black");
   text("Kim Seokjin",150,620);
   
   fill("purple");
   textSize(35);
   textFont("Cooper Black");
   text("Min Yoongi",155,720);   
      
      box.visible=true;
      box2.visible=true;
      box3.visible=true;
      box4.visible=true;
   
      Q1();
  }

 
  
function spawnQuestions(){
    if(mousePressedOver(play) && gamestate===1) {
     gamestate=2;
    var rand = Math.round(random(1,3));
  
    switch(rand) {
        
      case 1: Bg2c1.addImage(Bg2c1Img);
              Bg2c1.visible=true;
              break;
      case 2: Bg2c2.addImage(Bg2c2Img);
              Bg2c2.visible=true;
              break;
      case 3: Bg2c3.addImage(Bg2c3Img);
              Bg2c3.visible=true;
              break;
      default: break;
    }
        Bg2Group.add(Bg2c1);
        Bg2Group.add(Bg2c2);
        Bg2Group.add(Bg2c3);
      
      Bg2Group.lifetime=100;
   } 
    
  }
  
  function Q1(){
    
    if(mousePressedOver(box3)){
      tick3.visible=true;
      gamestate=2.5;
    }
  }
  

  }

 
