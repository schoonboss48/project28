
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var ground, tree
var boy
var stone
var launcher
function preload()
{
	boy=loadImage("boy.png")
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(1050,340,450,500)
	ground = new Ground(width/2,590,width,20)
	mango1 = new Mango(900,160,40)
	mango2 = new Mango(900,230,40)
	mango3 = new Mango(950,120,30)
	stone = new Stone(235,420,30)
	launcher = new Launcher(stone.body,{x: 235, y:420})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  stone.display();
  launcher.display();
  image(boy,200,340,200,300)
  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x: mouseX, y:mouseY})
	
	
	}
	function mouseReleased(){
		launcher.fly()
	
	
	}




	function detectCollision(lstone,lmango){
		mangobody = lmango.body.position;
		stonebody = lstone.body.position;
		var distance = dist(stonebody.x,stonebody.y,mangobody.x,mangobody.y);
		if(distance <= lmango.r+lstone.r){
			Matter.Body.setStatic(lmango.body,false);
		
		}
		
		}
		