var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event)
{
    console.log(event);

    var text = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = text;
    console.log(text);

    if(text == "take my selfie")
    {
        console.log("Taking selfie...");
        speak();
    }
}

function speak()
{
    
}