
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var engine,world;
var paper,dustbinImage;
var ground;
var dustbin1;

function preload()
{
	dustbinImage=loadImage("sprites/dustbingreen.png")
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

dustbin.display();
  drawSprites();


 
}


function KeyPressed(){
	if(keyCode===DOWN_ARROW ){
	 Matter.Body.setPosition(paper.body,{x: 1050 , y: 255}); 
	}
  }
  
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.setPosition(paper.body,{x:1030,y:200})
	}
}