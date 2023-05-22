x = 0;
y = 0;
screenwidth=0;
screenheight=0;
draw_apple = "";
number="";
speak_data="";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 function preload(){
 apple= loadImage("apple.png");
 }
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;
number = Number(content);
if(Number.isInteger(number)){
  document.getElementById("status").innerHTML="Started Drawing Apple. Speech was recogised as: "+ content;
  draw_apple="set";
}else{
  document.getElementById("status").innerHTML="The speech engine has not recognised a number.Please try again.The speech was recognised as: "+content;
}
    

}

function setup() {
 screenwidth= window.innerWidth;
 screenheight=window.innerHeight;
 canvas= createCanvas(screenwidth,screenheight-150);
 canvas.position(0,150);
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = number + " Apples drawn";
    draw_apple = "";
    for (let i = 0; i < number ; i++) {
      x= Math.floor((Math.random())*700);
      y= Math.floor((Math.random())*400);
      image(apple,x,y,50,50);
       
       speak_data= document.getElementById("status").innerText;
       
    }
    speaak();
  }
}

function speaak(){

if(speak_data !=""){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    speak_data="";
}
   
}
