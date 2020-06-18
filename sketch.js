//Make the 3 constant variables which is equal to
//matter which is Engine, World, Bodies
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//Make the 3 variables for engine, world, and 
//ground
var engine, world;
var ground;
//Make the function setup for canvas, engine, and
//world
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
//Make the variable ground options to make the 
//ground static
    var ground_options ={
        isStatic: true
    }
//Make the ground bodies a rectangle shape 
//World add will be world and the ground
    ground = Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);
//And the variable options will be the restitution
    var options = {
        restitution: 1
    }
    //The ball bodies are created in the world
    //and add the ball body to the world most of 
    //the time
    ball = Bodies.circle(100, 100, 50, options);
    World.add(world, ball); 
    console.log(ground);
}

function draw(){
    background(0);
    //Make the engine update which is engine 
    //because we want to make sure that it stays
    //on the ground.
    Engine.update(engine);
    //And we made sure that the rectangle mode is
    //on the center portion and we had to even give
    //the variable of the rectangle.
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    //Ellipse mode should most of the time be radius
    //And we gave the ball.position.x and ball.position.y
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 50, 50);
}