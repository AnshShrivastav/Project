const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


// variables
var land1,land2,land3,land4,land5;
var land6,land7,land8,land9,land10;



var land1_Img, land2_Img;
var myEngine, myWorld, player;
var bgImg;

function preload(){
  land1_Img = loadImage("land1.png");
  land2_Img = loadAnimation("land1.png","land1.png");
  bgImg=loadImage("bg.png");
}

function setup(){
  var canvas = createCanvas(displayWidth, displayHeight);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  player = new Player(550,650);

  //creating floating lands
  land1 = new Land(50,400,500,20);
  

  land2 = new Land(150,400,500,20);
  

  land3 = new Land(550,250,300,20);
  land4=new Land(780,200,350,20);
  land5=new Land(500,20,250,20);



  land6= new Land(920,200,300,20);
  land7=new Land(240,220,300,20);
  land8=new Land(350,180,50,20);
  land9 = new Land(530,250,80,20);
  land10=new Land(650,420,350,20);
  land11=new Land(650,360,100,20);

  land12 = new Land(150,height-20,300,20);
  land13 = new Land(300,height-100,150,20);
  land14 = new Land(550,height-80,250,20);
  land15 = new Land(620,height-140,250,20);
  land16 = new Land(840,height-180,180,20);
  land17 = new Land(1200,height-140,250,20);
  land18 = new Land(1000,height-170,80,20);
  land19 = new Land(1180,height-200,100,20);
  land20 = new Land(1300,height-250,100,20);
  land21 = new Land(1100,height-320,300,20);

  ob1= new Obstacle(200,height-40,40,40);
  ob2= new Obstacle(600,height-150,40,40);
  ob3= new Obstacle(820,height-220,30,30);

}
function draw()
{
  background(bgImg);
  Engine.update(myEngine);
  player.display();
  land1.display();
  land2.display();
  land3.display();
  land4.display();
  land5.display();
  land6.display();
  land7.display();
  land8.display();
  land9.display();
  land11.display();
  land12.display();
  land13.display();
  land14.display();
  land15.display();
  land16.display();
  land17.display();
  land18.display();
  land19.display();
  land20.display();
  land21.display();

  ob1.display();
  ob2.display();
  ob3.display();

  text(mouseX + "," + mouseY,mouseX,mouseY);

  if(keyIsDown(RIGHT_ARROW)) {
    player.body.position.x += 0.5;
  }

  else if(keyIsDown(LEFT_ARROW)) {
    player.body.position.x -= 0.5;
  }

  else if(keyIsDown(UP_ARROW)){
    player.body.position.y-=2;
  }
  else{
    player.body.position.x *= 0.9;
    player.body.position.y *= 0.9;
  }

  drawSprites();
}
