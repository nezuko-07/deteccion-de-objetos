img = "";
objects = [];
status  = "";
function preload(){
    img = loadImage('dona_sola.jpg');
}
function draw(){
    image(img, 0,0,600,400);
if (status != "") {
  for (let i = 0; i < objects.length; i++) {
    document.getElementById("status").innerHTML = "status:objeto detectado";
     fill("#FF0000");
     percent = floor(objects[i].confidence *100);
         text(objects[i].label+" "+percent+"%",objects[i].x-200,objects[i].y-180);
         noFill(); 
         stroke("#FF0000");
          rect(objects[i].x-200,objects[i].y+-200,objects[i].width,objects[i].height);

        }      
    }
   

 
   
   


    
}
function setup(){
    canvas = createCanvas(700, 500);
    canvas.center();
   objectDetector = ml5.objectDetector('cocossd',modelloaded);
   document.getElementById("status").innerHTML = "detectando objetos";
}
function modelloaded(){
    console.log("modelo cargado");
    status = true;
    objectDetector.detect(img, gotresult);
}
function gotresult(error,results){
    if (error) {
        console.log(error);
    }
 console.log(results);
 objects = results

}