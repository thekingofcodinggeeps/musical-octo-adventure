var leftwristX = 0;
var rightwristX = 0;
var noseX = 0;
var noseY = 0;
difference = 0;

function setup(){
    canvas = createCanvas(500, 500);
    canvas.position(700, 225);

    video = createCapture(VIDEO);
    video.size(450, 450);
    video.position(100, 250);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("Model Loaded!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        difference = floor(leftwristX - rightwristX);
        console.log("The x coordinates of left wrist are: " + leftwristX + " and the coordinates for right wrist are: " + rightwristX + " and the difference is: " + difference);
    }
}

function draw(){
    background("#6A1640");
    fill("#FFB6C1");
    stroke("#FFB6C1");
    textSize(difference);
    text('Shawn', noseX, noseY);
}
