const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const constraint = Matter.constraint;

var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var bgImage;
var boy1, boy2, boy1Image, boy2Image;
var basketball;

var engine, world;



function preload(){
bgImage = loadImage("images/bgImage.png")

boy1Image = loadImage("images/leftboy.png")
boy2Image = loadImage("images/rightboy1.png")
}

function setup() {
  createCanvas(1670,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width*2,20);
                                
  boy1 = createSprite(300,600,20,20)
  boy1.addImage("boy1",boy1Image)
  boy1.scale=0.6;
  
  boy2 = createSprite(1400,600,20,20)
  boy2.addImage("boy2",boy2Image)
  boy2.scale = 0.15;
   
   for (var k = width/3; k <=width/2+300; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    
}

function draw() {
  background(bgImage);
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
  ground.display();
  boy1.display();
  boy2.display();

  

   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }

}