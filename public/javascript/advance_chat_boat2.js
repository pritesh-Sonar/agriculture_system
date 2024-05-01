let langEnglish =true;
function myfun(){
var e = document.getElementById("lang");
var value = e.value;
console.log(value);

  if (value == "en")
  {
     window.localStorage.setItem('language',"en-GB");
     langEnglish =false;
  }
  else if(value == "hi"){
    window.localStorage.setItem('language',"hi-IN");
     langEnglish =false;
  }
 else if(value == "ma"){
window.localStorage.setItem('language',"mr-IN");
     langEnglish =false;
 }
}

let click_to_record = document.querySelector('#click_to_record');

let recognition = null;
let isListening = false;

click_to_record.addEventListener('click', function () {
    


    (function startSpeechRecognition() {

        window.SpeechRecognition = window.webkitSpeechRecognition;
        recognition = new SpeechRecognition();
        recognition.interimResults = true;
       
        let langVar = localStorage.getItem('language');
        console.log(langVar);
        if(langEnglish){
            recognition.lang="en-GB";
        }
        else{
            recognition.lang = langVar;
        }
       
        console.log(recognition);
        recognition.addEventListener('result', e => {
            const transcript = Array.from(e.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('');
           
            document.querySelector("#convert_text").textContent = transcript;
            isListening = false;
        });
    
    
        recognition.start();
        isListening = true;
    })();
});



