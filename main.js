bark = 0
meow = 0
mooing = 0
roar = 0

function start_classification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ZusqL0tN-/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);

        r = Math.floor(Math.random()*255)+1;
        g = Math.floor(Math.random()*255)+1;
        b = Math.floor(Math.random()*255)+1;

        document.getElementById("name_of_audio").innerHTML = "Detected voice is of - " + results[0].label;
        document.getElementById("number_of_times_respective_animal_audio_detected").innerHTML = "Detected Dog - " +
        bark + " Detected Cat - " + meow + " Detected Cow - " + mooing + " Detected Lion - " + roar;

        document.getElementById("name_of_audio").style.color = "rgb("+r+","+g+","+b+")";
        document.getElementById("number_of_times_respective_animal_audio_detected").style.color = "rgb("+r+","+g+","+b+")";

        if(results[0].label == "Barking"){
            document.getElementById("image").src = "dog.jpg";
            bark = bark + 1;
        }

        else if(results[0].label == "Meowing"){
            document.getElementById("image").src = "cat.webp";
            meow = meow + 1;
        }

        else if(results[0].label == "Mooing"){
            document.getElementById("image").src = "cow.avif";
            mooing = mooing + 1;
        }

        else if(results[0].label == "Roaring"){
            document.getElementById("image").src = "lion.jpg";
            roar = roar + 1;
        }

        else{
            document.getElementById("image").src = "ear.gif";
        }
    }

}   