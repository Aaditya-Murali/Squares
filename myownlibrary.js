function squares(square1,square2){
    if(square1.x-square2.x<=square1.width/2+square2.width/2
      && square2.x-square1.x<=square1.width/2+square2.width/2
      &&square2.y-square1.y<=square1.height/2+square2.height/2
      &&square1.y-square2.y<=square1.height/2+square2.height/2){
      return true;
    }else{
      return false;
    }
  
  
  }
  function bounce(square1,square2){
    if(square1.x-square2.x<=square1.width/2+square2.width/2
      && square2.x-square1.x<=square1.width/2+square2.width/2){
  square1.velocityX=(-1)*square1.velocityX;
  square2.velocityX=(-1)*square1.velocityX;
    }
    if(square2.y-square1.y<=square1.height/2+square2.height/2
      &&square1.y-square2.y<=square1.height/2+square2.height/2){
        square1.velocityY=(-1)*square1.velocityY;
        square2.velocityY=(-1)*square2.velocityY;
      }
  
  }