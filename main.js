var video;
function preload(){
    clown_nose=loadImage('clown.png');
    lipstick=loadImage('lipstick.png')
    glasses=loadImage('glasses.png')
    headphones=loadImage('headphones.png')
    mustache=loadImage('mustache.png')
}

function setup(){
var canvas=createCanvas(400, 400);
canvas.position(550, 350)
video=createCapture(VIDEO)
video.hide();
tint_color="";
poseNet=ml5.poseNet(video, modelLoaded);

}
function gotPoses(results){
    if(results.length>0)
    {
    console.log(results)
    noseX=results[0].pose.nose.x-125;
    noseY=results[0].pose.nose.y-60;
    }
    }
    noseX=0;
    noseY=0;

function draw(){
image(video, 0, 0, 400, 400);
tint(tint_color);
image(clown_nose,noseX, noseY, 30, 30)
}

function take_snapshot(){
save('person.png');
}

function filter_tint(){
tint_color=document.getElementById("Color Name").value
}

function nose(){
    poseNet.on('pose',gotPoses)
    image(clown_nose,noseX, noseY, 30, 30)
    clown_nose.nose();
}

function modelLoaded(){
    console.log("poseNet is loaded!")
}

function glass(){
    poseNet.on('pose',gotPosesone)
    image(glasses, noseX, noseY, 30, 30)
}

function gotPosesone(results){
    if(results.length>0)
    {
    console.log(results)
    noseX=results[0].pose.nose.x-125;
    noseY=results[0].pose.nose.y-60;
    }
    }