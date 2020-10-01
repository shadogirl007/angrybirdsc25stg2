//NameSpacing - nicknames
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, ground, pig1, log1;
var box3, box4, pig2, log2;
var box5, log3, log4;
var bird1, bg;
function preload(){
    bg= loadImage("imagess/bg.png")
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    //box1 is a new object of the class Box
    box1 = new Box(700, 320, 70, 70);
    box2 = new Box(920, 320, 70, 70);
    box3 = new Box(700, 240, 70, 70);
    box4 = new Box(920, 240, 70, 70);
    box5= new Box(810,160,70,70);
   
    ground=new Ground(600,height,1200,20);

    pig1= new Pig(810,350);
    pig2= new Pig(810,220);
    
    log1= new Log(810,260,300,PI/2);
    log2=new Log(810,180,300,PI/2);
    log3= new Log(760,120,150,PI/7);
    log4= new Log(870,120,150,-PI/7);

    bird1= new Bird(200,200);
}

function draw(){
    background(bg);
    Engine.update(engine);
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird1.display();
    
}

/*
Object Oriented Programming (OOP)
- components of our code as real world objects
- Objects - 1. Properties
            2. Functions

- Creating a design ---> CLASS --- (sprites class)  


ANGLE
degrees - to measure an angle
radians - to measure an angle, more accurate

pi = 22/7

0 - 360 degrees
0 - 2pi radians

360 deg = 2pi rad
180 deg = pi rad
90 deg = pi/2 rad
60 deg = pi/3 rad
45 deg = pi/4 rad
30 deg = pi/6 rad
*/