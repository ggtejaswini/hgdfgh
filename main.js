song = "";
leftWristX =0;
leftWristY =0;
rightWristX = 0;
rightWristY = 0;
function preload(){
    song = loadSound("music.mp3")
}
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video,model_loaded);
    posenet.on('pose' , gotposes);
}

function model_loaded(){
    console.log("Posenet is Initialized");
}
function draw(){
    image(video,0,0,600,500);
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function gotposes(results){
    if(results.length > 0 ){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("LeftWristX = "+leftWristX+ "leftWristY = "+leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("RightWristX = "+rightWristX+ "RightWristY = "+rightWristX);
    }
}
