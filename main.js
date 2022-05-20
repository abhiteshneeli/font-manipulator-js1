function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,500);
    canvas.position(560,150);

    posenet=ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotposese);
}

function draw(){
    background('#cb05f7')
}

function modelloaded(){
    console.log("posenet is loaded!");
}

function gotposese(){
    if(results.length > 0){
        console.log(results);
    }
}