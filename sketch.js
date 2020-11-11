
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbin1,paper1,ground1
function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
dustbin1=new dustbin(1100,650)
paper1=new Paper(200,450,40)
ground1=new ground(800,670,1600,20)
var render = Render.create({
	element: document.body,
	engine: engine,
	options: {
	  width: 1200,
	  height: 700,
	  wireframes: false
	}
  });

  Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
dustbin1.display()
paper1.display()
ground1.display()
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
  
	}
}





