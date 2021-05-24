var balloon;
// create database and position variable here
var database;
var position;

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1 =loadImage("hotairballoon1.png");
   
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addImage(balloonImage1);
  balloon.scale=0.5;

  var balloonPos = database.ref('balloon/position');
  balloonPos.on("value", readPosition);

  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    
    //write code to move air balloon in left direction
    writePosition(-1, 0);
  }
  else if(keyDown(RIGHT_ARROW)){
   
    //write code to move air balloon in right direction
    writePosition(1, 0);
  }
  else if(keyDown(UP_ARROW)){
   
    //write code to move air balloon in up direction
    writePosition(0, -1);
  }
  else if(keyDown(DOWN_ARROW)){
   
    //write code to move air balloon in down direction
    writePosition(0, 1);
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}

function readPosition(data) {

  position = data.val();
  balloon.x = position.x;
  balloon.y = position.y;

}

function writePosition(x, y) {

  database.ref("balloon/position").set({
    'x': position.x + x,
    'y': position.y + y
  })

}