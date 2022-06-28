function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/WFZQ2FTeM/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, result) {
    console.log("Got Results");
    if (error) {
        console.error(error);
    }
    else {
        console.log(result);
        random_num_r = Math.floor(Math.random() * 255) + 1;
        random_num_g = Math.floor(Math.random() * 255) + 1;
        random_num_b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("result_label").innerHTML = 'I can Hear : ' + result[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy : ' + (result[0].confidence * 100).toFixed(2) + " %";
        document.getElementById("result_label").style.color = "rgb(" + random_num_r + "," + random_num_g + "," + random_num_b + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_num_r + "," + random_num_g + "," + random_num_b + ")";
        img = document.getElementById('alien1');
        img1 = document.getElementById('alien2');
        img2 = document.getElementById('alien3');
        img3 = document.getElementById('alien4');


        if (result[0].label == "Roar") {
            img.src = 'lion.png';
        } else if (result[0].label == "bird's chirping") {
            img.src = 'bird.png';
        } else if (result[0].label == "bark") {
            img.src = 'dog.png';
        } else if (result[0].label == "meow") {
            img.src = 'black-cat-png-27.png';
        } else {
            img.src = 'listen.gif';

        }
    }
}

