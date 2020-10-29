    var PLAY = 1;
    var END = 0;
    var gameState = PLAY;

    var bow,bow1,arrow,arrow0;
    var blue0,green0,yellow0,red0,blue01,green01,yellow01,red01;
    var background,backgroundImage;
    var score;
    var redgroup,bluegroup,greengroup,yellowgroup,arrowgroup;

    function preload(){

       backgroundImage = loadImage("background0.png");
       bow1 = loadImage("bow0.png");
       blue01 = loadImage("blue_balloon0.png");
       green01 = loadImage("green_balloon0.png");
       yellow01 = loadImage("pink_balloon0.png");
       red01 = loadImage("red_balloon0.png");
      arrow0 = loadImage("arrow0.png");
      }
    
   

      function setup() {
        createCanvas(600,600);
        
        score = 0;

        background = createSprite(0,0,600,600);
        background.addAnimation("background0",backgroundImage);
        background.scale = 3;
        background.velocityX = -2;

        bow = createSprite(550,300,10,10);
        bow.addAnimation("bow",bow1);
        bow.scale = 1.2;

        redgroup = createGroup();
        bluegroup = createGroup();
        greengroup = createGroup();
        yellowgroup = createGroup();
        arrowgroup = createGroup();
        


    }

    function draw() {

        if(background.x<0){
          background.x = background.width/2;
        }

        
    if (gameState === PLAY){
      
      
        if(keyDown("space")){
          var temp_arrow = createArrow();
          temp_arrow.addImage("arrow",arrow0);
          temp_arrow.y = bow.y;
        }

        bow.y = World.mouseY;
       var rand = Math.round(random(1,4));
      
      if(frameCount%80 === 0){
        if(rand === 1){
          spawnredballoon();
        
        }
        if(rand === 2){
        spawnblueballoon();
        }
        if(rand === 3){
          spawnyellowballoon();
        }
        if(rand === 4){
          spawngreenballoon();
        }
        
        
      }
      
         if(arrowgroup.isTouching(redgroup)){
           redgroup.destroyEach();
           arrowgroup.destroyEach();
           score = score + 1;
           
         }
        
         if(arrowgroup.isTouching(bluegroup)){
           bluegroup.destroyEach();
           arrowgroup.destroyEach();
           score = score + 1;
           
         }
      
         if(arrowgroup.isTouching(yellowgroup)){
           yellowgroup.destroyEach();
           arrowgroup.destroyEach();
           score = score + 1;
           
         }
        
         if(arrowgroup.isTouching(greengroup)){
           greengroup.destroyEach();
           arrowgroup.destroyEach();
           score = score + 1;
           
         }
      
    }
      
        
    

        drawSprites();
        textSize(20);
        fill("blue");
        text("Score:" + score,500,30); 
    }

    function createArrow(){
      arrow = createSprite(360,100,5,10);
      arrow.velocityX = -6;
      arrow.scale = 0.3;
      arrow.lifetime = 60;
      arrowgroup.add(arrow);
      return arrow;
    }
function spawnredballoon(){
  red0 = createSprite(100,55,10,10);
          red0.addAnimation("red",red01);
          red0.scale = 0.1;
          red0.lifetime = 65;
                     
  
  red0.y = Math.round(random(0,600));
  red0.velocityX = 4;
  redgroup.add(red0); 
}

function spawnblueballoon(){
  blue0 = createSprite(150,55,10,10);
          blue0.addAnimation("blue",blue01);
          blue0.scale = 0.1;
          blue0.lifetime = 65;
          
  
  blue0.y = Math.round(random(0,600));
  blue0.velocityX = 4;
  bluegroup.add(blue0);

}

function spawnyellowballoon(){
  yellow0 = createSprite(200,55,10,10);
          yellow0.addAnimation("yellow",yellow01);
          yellow0.scale = 1.2;
          yellow0.lifetime = 65;    
          
  
  yellow0.y = Math.round(random(0,600));
  yellow0.velocityX = 4;
  yellowgroup.add(yellow0);
}

function spawngreenballoon(){
   green0 = createSprite(250,55,10,10);
          green0.addAnimation("green",green01);
          green0.scale = 0.08;
          green0.lifetime = 65;
          
  
  green0.y = Math.round(random(0,600));
  green0.velocityX = 4;
  greengroup.add(green0);
  
}
