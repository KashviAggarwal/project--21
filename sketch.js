
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var angle = 60;
var ground,rightSide,leftSide;
var keyPressed = 0;

function setup() {
  createCanvas(600,600);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    friction :0,
    isStatic :false,
    density :1.2,
  }
  ball = Bodies.circle(100,10,10,ball_options);
  World.add(world,ball);
  
  rightSide = new Ground(350,350,10,85);
  ground = new Ground(300,400,600,10);
  leftSide = new Ground(550,350,10,85)
  ellipseMode(RADIUS);
  fill("blue");
  rectMode(CENTER);
}
  

function draw() 
{
  background("pink");
  Engine.update(engine); 

  // if(keyDown(DOWN_ARROW) || keyDown(UP_ARROW)){
  //   keyPressed = keyPressed+1;
  // }
  //diplaying the grounds
  rightSide.show();
  ground.show();
  leftSide.show();

  //text("INSTRUCTIONS:-",50,50);
  //text("Press down Arrow to go down",50,60);
//  text("Press Up Arrow to go up",50,70);
//  text("Times key pressed :"+keyPressed,400,50);
  arrow();
  //dArrow();
  ellipse(ball.position.x,ball.position.y,20); 
}

function arrow(){
  if(keyCode === UP_ARROW)
   Matter.Body.applyForce(ball,{x:0.30,y:0.1},{x:0.22,y:0});
}
// function dArrow(){
//   //down ARROW
//   if(keyCode===DOWN_ARROW){
//     Matter.Body.applyForce(ball,{x:0,y:0},{x:0.44, y:0.92})
//   }
// }