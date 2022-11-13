
  Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

  camera = document.getElementById("camera");

Webcam.attach( '#camera' );

      
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

  console.log('ml5 version:', ml5.version);
  
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Zei6xvtWN/model.json',modelLoaded);

  function modelLoaded() {
    console.log('Model Loaded!');
  }
      
  function check()
  {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
  }

function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    
    document.getElementById("result_object_name").innerHTML = results[0].label;

    gesture = results[0].label;
    
    toSpeak = "";
    
    if (results[0].label == "A") {
        img.src = 'A.png';
     
      } 
      else if (results[0].label == "B") {
        img.src = 'B.png';
     
      }
      else if (results[0].label == "C") {
        img.src = 'C.png';
     
      }else if (results[0].label == "D") {
        img.src = 'D.png';
     
      }else if (results[0].label == "E") {
        img.src = 'E.png';
     
      }else if (results[0].label == "F") {
        img.src = 'F.png';
     
      }else if (results[0].label == "G") {
        img.src = 'G.png';
     
      }else if (results[0].label == "H") {
        img.src = 'H.png';
     
      }else if (results[0].label == "I") {
        img.src = 'I.png';
     
      }else if (results[0].label == "J") {
        img.src = 'J.png';
     
      }else if (results[0].label == "K") {
        img.src = 'K.png';
     
      }else if (results[0].label == "L") {
        img.src = 'L.png';
     
      }else if (results[0].label == "M") {
        img.src = 'M.png';
     
      }else if (results[0].label == "N") {
        img.src = 'N.png';
     
      }else if (results[0].label == "O") {
        img.src = 'O.png';
     
      }else if (results[0].label == "P") {
        img.src = 'P.png';
     
      }else if (results[0].label == "Q") {
        img.src = 'Q.png';
     
      }else if (results[0].label == "R") {
        img.src = 'R.png';
     
      }else if (results[0].label == "S") {
        img.src = 'S.png';
     
      }else if (results[0].label == "T") {
        img.src = 'T.png';
     
      }else if (results[0].label == "U") {
        img.src = 'U.png';
     
      }else if (results[0].label == "V") {
        img.src = 'V.png';
     
      }else if (results[0].label == "W") {
        img.src = 'W.png';
     
      }else if (results[0].label == "X") {
        img.src = 'X.png';
     
      }else if (results[0].label == "Y") {
        img.src = 'Y.png';
     
      }
      else if (results[0].label == "Z") {
        img.src = 'Z.png';
     
      }

    
  }
}


function speak(){
    var synth = window.speechSynthesis;

    speak_data = toSpeak;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

}
