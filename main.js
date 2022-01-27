Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot() {
    Webcam.snap(function(data_uri) {
        console.log("image taken");
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/TwHpTx0HJ/model.json',modelLoaded);
function modelLoaded() {
    console.log('modelLoaded');
}

function identify() {
    img=document.getElementById("captured_image");
    classifier.classify(img,gotresult);
}

function gotresult(error,result) {
    if (error) {
        console.error(error);
    }
    else {console.log(result);
    document.getElementById("result_object").innerHTML=result[0].label;
    document.getElementById("object_accuracy").innerHTML=result[0].confidence.toFixed(2)+"%";
    }

}
