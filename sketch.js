
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;

var t,d,l,r;
var w1,w2;


function setup() {
	createCanvas(1000, 500);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var ball_option={
		restitution:0,
		friction:0,
		density:20,
		
		}
		ball = Bodies.circle(200,100,15,ball_option)
		World.add(world,ball);
		  rectMode(CENTER);
		  ellipseMode(RADIUS);
	
	//ellipseMode(RADIUS);
	t = new Ground(500,10,1000,20)
	d = new Ground(500,490,1000,20)
	l = new Ground(10,250,20,500)
	w1 = new Ground(700,400,10,230)
	w2 = new Ground(950,400,10,230)
	w3 = new Ground(1300,350,300,10)
	r = new Ground(990,250,20,500)
  
}


function draw() {
  background(0);
  ellipse(ball.position.x,ball.position.y,15)
  //var m = -3
  for (var k=-3;k<1;k=k+0.2)
  //var n = m+0.1
  //keyPressed();
if(keyDown(UP_ARROW)){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:1,y:-2});
}

  t.show()
  d.show()
  l.show()
  r.show()
  w1.show()
  w2.show()
  w3.show()
  Engine.update(engine);
  //drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW ){
		Matter.Body.applyForce(ball,{x:1,y:-1},{x:1,y:-1});
		
	}else if(ball.x>600){
		Matter.Body.applyForce(ball,{x:-0.1,y:5},{x:-0.1,y:5});
	}else if(ball.y===480&&ball.x>w1.x){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0});
	}
}

