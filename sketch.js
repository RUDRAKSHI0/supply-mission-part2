var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1;
var box2;
var box3;
var engine, world;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	var canvas = createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	box1 = new Box(200,585,30,100);
	box2 = new Box(335,650,300,30);
	box3 = new Box(471,585,30,100);
	ground = new Box(400,680,800,10)
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody);
		}
function draw() {
 background(0);
 Engine.update(engine);
  rectMode(CENTER);  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  box1.display();
 box2.display();
 box3.display();
 ground.display();
   keyPressed();
     drawSprites();
}
function keyPressed(){if(keyCode===RIGHT_ARROW && packageSprite.y==200){
	helicopterSprite.velocityX=2;
	packageSprite.x=helicopterSprite.x;
 }	else {if (keyCode===RIGHT_ARROW ){helicopterSprite.velocityX=20;}}
 if(keyCode===DOWN_ARROW ){
	 packageSprite.x=helicopterSprite.x;
	 packageSprite.velocityX=0;
	Matter.Body.setStatic(packageBody,false);
	packageSprite.velocityX=0;
  }
	
}


//boxPosition=width/2-100
 	//boxY=610;


 	//boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	//boxleftSprite.shapeColor=color(255,0,0);

 	//boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	//World.add(world, boxLeftBody);

 	//boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	//boxBase.shapeColor=color(255,0,0);

 	//boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	//World.add(world, boxBottomBody);

 	//boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	//boxleftSprite.shapeColor=color(255,0,0);

 	//boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	///World.add(world, boxRightBody)//;