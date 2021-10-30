var iss_img
var spacebg_img
var spacecraft1_img
var spacecraft2_img
var spacecraft3_img
var spacecraft4_img
var iss
var hasDocked = false;

function preload() {
  iss_img = loadImage ("assets/iss.png")
  spacebg_img = loadImage ("assets/spacebg.jpg")
  spacecraft1_img = loadImage ("assets/spacecraft1.png")
  spacecraft2_img = loadImage ("assets/spacecraft2.png")
  spacecraft3_img = loadImage ("assets/spacecraft3.png")
  spacecraft4_img = loadImage ("assets/spacecraft4.png")
}

function setup() {
  createCanvas(800,400);
  iss = createSprite(400,200)
  iss.addImage(iss_img)
  iss.scale = 0.5

  spacecraft = createSprite(370,300)
  spacecraft.addImage(spacecraft1_img)
  spacecraft.scale = 0.2

  docking = createSprite(369,219,10,10)
  docking.visible = false;


}

function draw() {
  background(spacebg_img);  
  drawSprites();
  if(!hasDocked){
    spacecraft.x = spacecraft.x+random(-1,1)
    if(keyDown("LEFT_ARROW")) {
      spacecraft.addImage(spacecraft3_img)
      spacecraft.x -=1
    }
    if(keyDown("RIGHT_ARROW")) {
      spacecraft.addImage(spacecraft4_img)
      spacecraft.x +=1
    }
    if(keyDown("UP_ARROW")) {
      spacecraft.addImage(spacecraft2_img)
      spacecraft.y -=1
    }
    if(keyDown("DOWN_ARROW")) {
      spacecraft.addImage(spacecraft1_img)
    }
  }
  if(spacecraft.isTouching(docking)){
    hasDocked = true
      text("docking is sucessfull!",100,250)
    
  }
}