
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var balll;
var ground,boxCover,boxCover2,boxCover3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	balll = new Ball(82,350,40);
	ground = new Rectangle(400,height-20,width,20);

	boxCover = new Dustbin(648,652,200,20);
	boxCover2 = new Dustbin(753,594,20,100);
	boxCover3 = new Dustbin(543,594,20,100);
	//Create the Bodies Here.
	keyPressed();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  


  text(mouseX+","+mouseY,mouseX,mouseY);

 

balll.show();
ground.show();
boxCover.show();
boxCover2.show();
boxCover3.show();

  drawSprites();
 
}
function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(balll.body,balll.body.position,{x:195,y:-195});
	}

}


