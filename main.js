var img;
function preLoad(){
    img = loadImage("dog_cat.jpg");
}
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
}
function draw(){
    if (img) {
        image(img,0 ,0 ,640 , 420);
    }
    fill(5, 5, 5);
    text("dog", 45,75);
    noFill();
    stroke(3,3,4);
    rect(30,60,450,350);
}