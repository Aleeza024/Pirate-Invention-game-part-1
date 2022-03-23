const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var tower;
var BackgroundImage
var ground

function preload(){
BackgroundImage=loadImage("./assets/background.gif")



}
function setup() {
  createCanvas(1000,600);

  engine = Engine.create();
  world = engine.world;

//tower
tower= new Tower(150,330,150,400)
ground= new Ground(500,580,width,50)
  
}

function draw() 
{
  background(BackgroundImage);
  Engine.update(engine);
tower.display()
 ground.show()
}

