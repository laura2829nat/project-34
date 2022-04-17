var ball; 
var block1, block2, block3, block4, block5, ground, ground2,  movingBlk
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let engine;
let world;
var score = 0;
var PLAY = 1
var END = 0
var gameState = PLAY


function preload()
{
	exitImg = loadImage ("exit.png")
	wonImg = loadImage ("win.png")
	replayImg = loadImage ("replay.png.png")
}

function setup() {
	createCanvas(1200, 800);
	engine = Engine.create();
	world = engine.world;
	createEdgeSprites()
	
	
	won = createSprite (width/2, height-500, 20,20)
    won.addImage (wonImg)
	won.scale = 0.3
	won.visible = false

	replay = createSprite (width/2, height-400,20,20)
	replay.addImage (replayImg)
	replay.scale = 0.2
	replay.visible = false


	movingBlk = new MovingBrick (10,20,30,30)
	wall1 = new Ground (10, 300, 20, 800)
	wall2 = new Ground (1190, 300, 20, 650)
	
	ground = new Ground (width/2, 670, width, 20)
	block1 = new Ground (850,600,20,20)
	block2 = new Ground (1100,500,20,20)
	block3 = new Ground (100,300,20,20)
	block4 = new Ground (400,400,20,20)
	block5 = new Ground (700,240,20,20)
	block6 = new Ground (990,60,20,20)
	block7 = new Ground (200,500,20,20)
	block8 = new Ground (400,547,20,20)
	block9 = new Ground (800,80,20,20)
	block10 = new Ground (1000,200,20,20)
	block11 = new Ground (950,500,20,20)
	block12 = new Ground (800,400,20,20)
	block13 = new Ground (600,350,20,20)
	block14 = new Ground (357,100,20,20)
	ground3 = new Ground (500,10,1390,20)
    target = new Invis (1220,650,10,30)
	
	
    
	var balls_option ={
	isStatic: false,
    restitution: 0.5,
	friction: 0,
	density: 1.1
	
	}
	
	keyPressed ();
    keyPressed2();

	//Create the Bodies Here.
    ball =  Matter.Bodies.circle (50,70,20,balls_option,)
    World.add (world,ball)

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update (engine)
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
  ellipse(ball.position.x, ball.position.y, 20) 
 
 
  
  
 

  

 movingBlk.display();

  ground.display ();
  block1.display ();
  block2.display ();
  block3.display ();
  block4.display ();
  block5.display ();
  block6.display ();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  
  ground3.display()
  wall1.display();
  wall2.display()
  target.display();

  if (gameState === PLAY) {

  var targetHit = Matter.SAT.collides (
	  target.body,
	  movingBlk.body
  )
  if (targetHit.collided) {
	score +=100
	  gameState = END
	  
  }
 
  var blockCollision1 = Matter.SAT.collides (
	  block1.body,
	  ball
  )
  if (blockCollision1.collided) {
	  score +=1
  }

  var blockCollision2 = Matter.SAT.collides (
	block2.body,
	ball
)
if (blockCollision2.collided) {
	score +=1
}

var blockCollision3 = Matter.SAT.collides (
	block3.body,
	ball
)
if (blockCollision3.collided) {
	score +=1
}

var blockCollision4 = Matter.SAT.collides (
	block4.body,
	ball
)
if (blockCollision4.collided) {
	score +=1
}

var blockCollision5 = Matter.SAT.collides (
	block5.body,
	ball
)
if (blockCollision5.collided) {
	score +=1
}

var blockCollision6 = Matter.SAT.collides (
	block6.body,
	ball
)
if (blockCollision6.collided) {
	score +=1
}

var blockCollision7 = Matter.SAT.collides (
	block7.body,
	ball
)
if (blockCollision7.collided) {
	score +=1
}

var blockCollision8 = Matter.SAT.collides (
	block8.body,
	ball
)
if (blockCollision8.collided) {
	score +=1
}

var blockCollision9 = Matter.SAT.collides (
	block9.body,
	ball
)
if (blockCollision9.collided) {
	score +=1
}

var blockCollision10 = Matter.SAT.collides (
	block10.body,
	ball
)
if (blockCollision10.collided) {
	score +=1
}

var blockCollision11 = Matter.SAT.collides (
	block11.body,
	ball
)
if (blockCollision11.collided) {
	score +=1
}

var blockCollision12 = Matter.SAT.collides (
	block12.body,
	ball
)
if (blockCollision12.collided) {
	score +=1
}

var blockCollision13 = Matter.SAT.collides (
	block13.body,
	ball
)
if (blockCollision13.collided) {
	score +=1
}

var blockCollision14 = Matter.SAT.collides (
	block14.body,
	ball
)
if (blockCollision14.collided) {
	score +=1

	
}

 }

 else if (gameState === END) {
	
	won.visible = true;
	replay.visible = true;
	
    
	
	
 }
 if (mousePressedOver (replay)) {
	reset ()
}
drawSprites();	  

}
 


function keyPressed () {
	if (keyCode === 39) {
	  Matter.Body.applyForce  (ball, {x:0, y:-4}, {x: 1, y:-6});
	}
}

function keyPressed2 () {
	if (keyCode === LEFT_ARROW) {
	  Matter.Body.applyForce  (ball, {x:0, y:-9}, {x:-6, y:-7});
	}
}

function reset () {
	score = 0
	gameState = PLAY
	replay.visible = false
	won.visible = false
    location.reload(true);
 

}
  