const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9, ground;
var ball, rope
var score=0
function setup() {
  createCanvas(1000, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(500, 780, 1000, 20);

  box1 = new Box(100, 735, 70, 70);
  box2 = new Box(100, 665, 70, 70);
  box3 = new Box(100, 595, 70, 70);
  box4 = new Box(250, 735, 70, 70);
  box5 = new Box(250, 665, 70, 70);
  box6 = new Box(250, 595, 70, 70);
  box7 = new Box(400, 735, 70, 70);
  box8 = new Box(400, 665, 70, 70);
  box9 = new Box(400, 595, 70, 70);
 

  ball = new Ball(600, 800, 80, 80);
  rope = new Rope(ball.body, { x: 600, y: 400 });

}

function draw() {
  background(180);
fill("black")
textSize(20)
text('score: '+score, 850,50)

  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  ball.display();
  rope.display();
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();



}


function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}


