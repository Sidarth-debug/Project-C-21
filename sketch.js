var bullet,wall,thickness;
var speed,weight,background;


function setup() {
  createCanvas(1600,400);


  speed = random(55,90);
  weight = random(400,1500);
  bullet = createSprite(50,200,20,70);
  bullet.shapeColor = color(0,0,0);
  thickness = random(22,83);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  bullet.velocityX = speed;
  
  bullet.weight = weight;

}

function draw() {
  background(255,255,255);  
  if(bullet.x - wall.x < wall.width/2 + bullet.width/2
    && wall.x - bullet.x < bullet.width/2 + wall.width/2){

    
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor = color(255,0,0);
    }
    
    if(damage<10){
      wall.shapeColor = color(0,255,0);
    }
  }

    drawSprites();
    
  }
  


  


  
 
  

