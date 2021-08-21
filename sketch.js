var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200, 200, 50, 80);
  movingRect=createSprite(300,150,80,50);
  fixedRect.shapeColor="blue";
  movingRect.shapeColor="yellow";
  fixedRect.debug=true;
  movingRect.debug=true;
fixedRect.velocityX=2;
movingRect.velocityX=-2;
  
}

function draw() {
  background(0);  
 // movingRect.x=World.mouseX;
 // movingRect.y=World.mouseY;
if(squares(fixedRect,movingRect)){
  fixedRect.shapeColor="red";
  movingRect.shapeColor="red";

}else{
  fixedRect.shapeColor="blue";
  movingRect.shapeColor="yellow";


}
bounce(fixedRect,movingRect);
  drawSprites();
  
}
