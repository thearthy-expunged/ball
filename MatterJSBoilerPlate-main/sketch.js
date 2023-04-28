
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bau
var floor
var wall1
var wall2
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var bau_options={
	isStatic:false,
	restitution:0.3,
	friction:0.1,
	density:1.2
}
bau = Bodies.circle(100,100,10, bau_options)
World.add(world, bau)
floor = Bodies.rectangle(400,700,800,50,{isStatic:true})
World.add(world, floor)
wall1 = Bodies.rectangle(600,600,25,150,{isStatic:true})
World.add(world, wall1)
wall2 = Bodies.rectangle(400,600,25,150,{isStatic:true})
World.add(world, wall2)
Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS) 
  background(0);
  
  drawSprites();
 

	ellipse(bau.position.x,bau.position.y,10)
	rect(wall1.position.x,wall1.position.y,25,150)
	rect(wall2.position.x,wall2.position.y,25,150)
	rect(floor.position.x,floor.position.y,800,50)
}
function keyPressed(){
if(keyCode == 32){
	Body.applyForce(bau,{x:0,y:0},{x:0.05,y:-4})
}	
}


