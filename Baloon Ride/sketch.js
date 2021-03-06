var ball, database, position,bg;

function preload(){
    ball=loadImage("balloonIMG.jpeg")
    bg=loadImage("cityIMG.jpeg")
}
function setup(){
    database=firebase.database();
    createCanvas(1000,500);
    ball = createSprite(250,250,10,10);
   
   
    var ballpositionref=database.ref('ball/position')
    ballpositionref.on("value",readposition)
}

function draw(){
    background(bg);
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    ball.addImage("ball", ball)
    drawSprites();
}

function writePosition(x,y){
   database.ref('ball/position').set({
       x:position.x+x,
       y:position.y+y
   })
}

function readposition(data){
    position=data.val()
    ball.x=position.x
    ball.y=position.y 
}