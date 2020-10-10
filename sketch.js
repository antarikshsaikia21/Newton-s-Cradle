
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var roof1,bob1,bob2,bob3,bob4,bob5,rope1,rope2,rope3,rope4,rope5,bob1Diameter;

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;
	
	roof1 = new Roof(20,20,800,20);
	
	bob1 = new Bob(700,320,10,10);
	bob2 = new Bob(700,320,10,10);
	bob3 = new Bob(700,320,10,10);
	bob4 = new Bob(700,320,10,10);
	bob5 = new Bob(700,320,10,10);

	rope1 = new Rope(bob1.body,roof1.body,bob1Diameter*2,0);

}


function draw() {
	
  background("lightblue");
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  rope1.display();
 

 
}



