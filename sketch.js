const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;

var rop1;
var rope2;
var rope3;
var rope5;

var ball1;
var ball2;
var ball3;
var ball4;
var ball5;



function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);
	ellipseMode(RADIUS);
    
	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}
	
	var ball_options={
		restitution:0.95,

	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);
	
	ball1 = Bodies.circle(320, 380, 20, ball_options);
	World.add(world, ball1);
	
	ball2 = Bodies.circle(360, 380, 20, ball_options);
	World.add(world, ball2);

	ball3 = Bodies.circle(400, 380, 20, ball_options);
	World.add(world, ball3);

	ball4 = Bodies.circle(440, 380, 20, ball_options);
	World.add(world, ball4);

	ball5 = Bodies.circle(480, 380, 20, ball_options);
	World.add(world, ball5);
	
	rope1 = Matter.Constraint.create({
		bodyA:ball1,
		bodyB:roof,
		pointB:{x:-80,y:0},
		length:100,
		stiffness:0.1
	  });

	World.add(world, rope1);

	rope2 = Matter.Constraint.create({
	  bodyA:ball2,
	  bodyB:roof,
	  pointB:{x:-40,y:0},
	  length:100,
	  stiffness:0.1
	});

  World.add(world, rope2);

  rope3 = Matter.Constraint.create({
	bodyA:ball3,
	bodyB:roof,
	pointB:{x:0,y:0},
	length:100,
	stiffness:0.1
  });

World.add(world, rope3);

rope4 = Matter.Constraint.create({

  bodyA:ball4,
  bodyB:roof,
  pointB:{x:40,y:0},
  length:100,
  stiffness:0.1
});

World.add(world, rope4);

rope5 = Matter.Constraint.create({
	bodyA:ball5,
	bodyB:roof,
	pointB:{x:80,y:0},
	length:100,
	stiffness:0.1
  });

World.add(world, rope5);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  line(roof.position.x+rope1.pointB.x, roof.position.y+rope1.pointB.y, ball1. position.x, ball1.position.y)
  line(roof.position.x+rope2.pointB.x, roof.position.y+rope2.pointB.y, ball2. position.x, ball2.position.y)
  line(roof.position.x+rope3.pointB.x, roof.position.y+rope3.pointB.y, ball3. position.x, ball3.position.y)
  line(roof.position.x+rope4.pointB.x, roof.position.y+rope4.pointB.y, ball4. position.x, ball4.position.y)
  line(roof.position.x+rope5.pointB.x, roof.position.y+rope5.pointB.y, ball5. position.x, ball5.position.y)
  
  //create ellipse shape for multiple bobs here
  ellipse(ball1.position.x,ball1.position.y,20, 20);
  ellipse(ball2.position.x,ball2.position.y,20, 20);
  ellipse(ball3.position.x,ball3.position.y,20, 20);
  ellipse(ball4.position.x,ball4.position.y,20, 20);
  ellipse(ball5.position.x,ball5.position.y,20, 20);

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if(keyCode==RIGHT_ARROW)
    {
	Matter.Body.applyForce(ball1,{x:0,y:0},{x:-0.06,y:-0.03});
    }
}
