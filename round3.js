function playsound() {
    document.getElementById("sound").volume = 0.1;
    document.getElementById("sound").play();
}

var SpeechRecognition = window.webkitSpeechRecognition;
//Speech Recognition is a nickname/reference to window.webkitSpeechRecognition
//Wherever we want to use window.webkitSpeechRecognition, instead of using the whole name we can use the key word/nickname, SpeechRecognition

//var recognition = new window.webkitSpeechRecognition();
//Object = recognition (variable)
var recognition = new SpeechRecognition();

function repeatsound() {
    document.getElementById("box1").innerHTML = "";
    recognition.start();
}

var originaltext = "this is a sound can you hear it"

recognition.onresult = function(event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("box1").innerHTML = content; 
    console.log(content);

    // setTimeout(local function, wait time in milli seconds)
    if(content == originaltext) {        
        var retake = "<br><button onclick='homepage()' id='retake' class='playsoundbtn'>Retake Test</button>";
        document.getElementById("result").innerHTML = "Congrats! You matched the sentence correctly and passed round 3. You did amazing and successfully passed the test!" + retake;
    } else {
        document.getElementById("result").innerHTML = "Please try again."
    }
}

function homepage() {
    window.location = "index.html";
}