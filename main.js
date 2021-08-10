Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach('#camera');

function takeSnapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/vJdwyHpBm/model.json',modelLoaded);

function modelLoaded() {
    console.log("model loaded");
}

function check() {
    img=document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}
 
function gotResult(error, results) {
    if(error){
        console.log(error);
    }else{
       console.log(results);
       document.getElementById("result_emotion_name").innerHTML=results[0].label;

       gesture=results[0].label;
       toSpeak="";
       
    
    if(gesture == "Amazing"){
        toSpeak="This is amazing";
       document.getElementById("update_emoji").innerHTML="&#128076;";
    }

    if(gesture == "Victory"){
        toSpeak="Happy Victory";
        document.getElementById("update_emoji").innerHTML="&#9996;";
    }

    if(gesture == "Best"){
        toSpeak="That is the best thing";
        document.getElementById("update_emoji").innerHTML="&#128077;";
    }

    if(gesture == "Loser"){
        toSpeak="Loser, a bad gesture";
        document.getElementById("update_emoji").innerHTML="&#128070;";
    }
 
    if(gesture == "Namaste"){
        toSpeak="Namaste, please use this in Covid-19";
         document.getElementById("update_emoji").innerHTML="&#128591;";
    }
 
    if(gesture == "Sign of Horns"){
        toSpeak="Hope you like rock music";
         document.getElementById("update_emoji").innerHTML="&#129304;";
    }

    if(gesture == "Backhand Index"){
        toSpeak="Pointing back handly";
        document.getElementById("update_emoji").innerHTML="&#9759;";
    }
 
    if(gesture == "Good Bye"){
        toSpeak="Waiving Good Bye";
        document.getElementById("update_emoji").innerHTML="&#128075;";
    }
 
    if(gesture == "Fist Pump"){
        toSpeak="Can be used as a handshake";
        document.getElementById("update_emoji").innerHTML="&#9994;";
    }

    if(gesture == "White Down Pointing Index"){
        toSpeak="You ahve a bad mood";
        document.getElementById("update_emoji").innerHTML="&#128072;";
    }

    speak();

    }
}

function speak() {
   var synth=window.speechSynthesis;
   speak_data=toSpeak;
   var utterThis=new SpeechSynthesisUtterence(speak_data);
   synth.speak(utterThis);
}