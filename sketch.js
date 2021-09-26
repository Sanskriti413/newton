const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bobs

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
    bob1 = Bodies.circle(100,100,100,100);
	World.add(world,bob1);
	bob2 = Bodies.circle(100,100,100,100);
	World.add(world,bob2);
	bob3 = Bodies.circle(100,100,100,100);
	World.add(world,bob3);
	bob4 = Bodies.circle(100,100,100,100);
	World.add(world,bob4);
	bob5 = Bodies.circle(100,100,100,100);
	World.add(world,bob5);

	con = Matter.Constraint.create({
		pointA:{x:200,y:20},
		bodyB:bob1,
		lenght:100,stiffness:0.1
	  });
	World.add(world,con);
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here
  ellipse(bob1.position.x,bob1.position.y,20);
  ellipse(bob2.position.x,bob2.position.y,20);
  ellipse(bob3.position.x,bob3.position.y,20);
  ellipse(bob4.position.x,bob4.position.y,20);
  ellipse(bob5.position.x,bob5.position.y,20);

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
