const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var ball,groundObj,leftSide,rightSide;
var world;
var radius = 70;
var chain

function preload(){
	dustbinImg = loadImage("dustbin.png");
	paperImg = loadImage("paper.png");
}


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction: 0,
		density:1.2
	}

	ball = Bodies.circle(310,100,radius/2.6,ball_options);
	World.add(world,ball);

	ground=new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,10,120);
	rightSide = new Ground(1270,600,10,120);
	bottomSide = new Ground(1190,650,150,20);

	Engine.run(engine);
	chain = new Chain (ball.body,{x:200, y:100});

}


function draw() {
	background(200);
	rectMode(CENTER);


	ground.display();
	leftSide.display();  
	rightSide.display();
	bottomSide.display();
	chain.display();

	
	imageMode(CENTER);
	// use image() command to add paper image to the ball.
	image(paperImg,ball.position.x,ball.position.y,radius,radius)

	// use image() command to add dustbin image in the canvas.
	image(dustbinImg, 1185, 570, 200,200)



}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


  
  function mouseReleased() {
	chain.fly();
  }