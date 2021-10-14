
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var engine,world;
var paper,dustbinImage;
var ground;
var dustbin1;
var dustbinA;

function preload()
{
	dustbinImage=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1200, 400);
	rectMode(CENTER);
	engine=Engine.create();
	world=engine.world;
 groundSprite=createSprite(width/2,380,width,30);
 groundSprite.shapeColor=color(255)	
 ground = Bodies.rectangle(width/2,380,width,30,{isStatic:true});
 World.add(world,ground);

 dustbin1=createSprite(1058,290,10,150)
 dustbin1.shapeColor=color("red")
 dustbin1=Bodies.rectangle(1058,290,10,150,{isStatic:true})
 World.add(world,dustbin1)


 dustbin2=createSprite(942,290,10,150)
 dustbin2.shapeColor=color("red")
 dustbin2=Bodies.rectangle(942,290,10,150,{isStatic:true})
 World.add(world,dustbin2)

dustbin=createSprite(1000,290)
dustbin.addImage("dustbin",dustbinImage);
dustbin.scale=0.5

 paper = new Paper(200,258)



	//Engine.run(engine);
  
}


function draw() {
  background("yellow");
Engine.update(engine)

paper.display();
//dustbin1.display()
dustbin.display();
  drawSprites();


 
}


//function KeyPressed(){
//	if(keyCode===DOWN_ARROW ){
//	 Matter.Body.setPosition(paper.body,{x: 1050 , y: 255}); 
	//}
  //}
  
function keyPressed(){
	//if(keyCode===UP_ARROW)
	if(keyCode===32)
	{
		Matter.Body.applyForce(paper.body,paper.body.position,{x:38,y:-20})
	}
}