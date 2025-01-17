var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(600, 400, 50, 80);
  fixedRect.shapeColor='green';
  fixedRect.debug=true;
  movingRect=createSprite(400, 200, 80, 30);
  movingRect.shapeColor='green';
  movingRect.debug=true;
  }

function draw() {
  background(0,0,0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  text(movingRect.x,100,50);
  text(fixedRect.x,150,50);
  text(movingRect.x-fixedRect.x,100,100);
  text(fixedRect.width/2 + movingRect.width/2,100,150);
  if(movingRect.x-fixedRect.x<fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.x-movingRect.x<fixedRect.width/2 + movingRect.width/2 &&
    movingRect.y-fixedRect.y<fixedRect.height/2 + movingRect.height/2 &&
    fixedRect.y-movingRect.y<fixedRect.height/2 + movingRect.height/2 ){
    fixedRect.shapeColor='red';
    movingRect.shapeColor='red';
  }
  else{
    fixedRect.shapeColor='green';
    movingRect.shapeColor='green';
  }
  drawSprites();
}