var left_wrist_x= 0;
var right_wrist_x=0;
var left_wrist_y= 0;
var right_wrist_y=0;

function preload(){
    song = loadSound("music.mp3");
    song2 = loadSound("music2.mp3")
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

video = createCapture(VIDEO);
video.hide()

posenet = ml5.poseNet(video, modelLoaded);
posenet.on('pose', gotPoses);

}

function modelLoaded(){
    console.log("posenet is initialized");
}

function draw(){
    image(video,0,0,600,500);
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        left_wrist_x = results[0].pose.leftWrist.x;
        right_wrist_x= results[0].pose.rightWrist.x;
        console.log("left wrist x = "+left_wrist_x+"right_wrist_x="+right_wrist_x);

        left_wrist_y = results[0].pose.leftWrist.y;
        right_wrist_y= results[0].pose.rightWrist.y;
        console.log("left wrist y = "+left_wrist_y+"right_wrist_y="+right_wrist_y);

    }
}