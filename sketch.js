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
	
	ball1 = Bodies.circle(200, 300, 20, ball_options);
	World.add(world, ball1);
	
	ball2 = Bodies.circle(200, 300, 20, ball_options);
	World.add(world, ball2);

	ball3 = Bodies.circle(200, 300, 20, ball_options);
	World.add(world, ball2);

	ball4 = Bodies.circle(200, 300, 20, ball_options);
	World.add(world, ball2);

	ball5 = Bodies.circle(200, 300, 20, ball_options);
	World.add(world, ball2);
	
	rope1 = Matter.Constraint.create({
		pointA:{x:420,y:100},
		bodyB:ball1,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
	  });

	World.add(world, rope1);

	rope2 = Matter.Constraint.create({
	  pointA:{x:470,y:100},
	  bodyB:ball2,
	  pointB:{x:0,y:0},
	  length:100,
	  stiffness:0.1
	});

  World.add(world, rope2);

  rope3 = Matter.Constraint.create({
	pointA:{x:520,y:100},
	bodyB:ball3,
	pointB:{x:0,y:0},
	length:100,
	stiffness:0.1
  });

World.add(world, rope3);

rope4 = Matter.Constraint.create({
  pointA:{x:670,y:100},
  bodyB:ball4,
  pointB:{x:0,y:0},
  length:100,
  stiffness:0.1
});

World.add(world, rope4);

rope5 = Matter.Constraint.create({
	pointA:{x:720,y:100},
	bodyB:ball5,
	pointB:{x:0,y:0},
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
  line(rope1.pointA.x, rope1.pointA.y, ball1. position.x, ball1.position.y)
  line(rope2.pointA.x, rope2.pointA.y, ball2. position.x, ball2.position.y)
  line(rope3.pointA.x, rope3.pointA.y, ball3. position.x, ball3.position.y)
  line(rope4.pointA.x, rope4.pointA.y, ball4. position.x, ball4.position.y)
  line(rope5.pointA.x, rope5.pointA.y, ball5. position.x, ball5.position.y)
  
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
	Matter.Body.applyForce(ball1,{x:0,y:0},{x:0,y:0.005});
    }
}