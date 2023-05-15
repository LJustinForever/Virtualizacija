const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const game = urlParams.get('game');
const guessedArray = [];
const wantedArray = loadFile("ats.txt").split('\r\n');
let counter = 0;
let guessedCounter = 0;
let clue = "";
let firstriddle = "Moku kalbėti neištaręs nei vieno žodžio.";
let secondriddle = "Ne krūmas, bet su lapais, ne marškiniai, bet susiūti, ne žmogus, bet šnekėti moka.";
let thirdriddle = "Vienas momentas visam laikui įamžintas.";
let fourthriddle = "Kur rasti upių be vandens, miestų be pastatų ir miškų be medžių?";


function loadFile(filePath) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    if (xmlhttp.status==200) {
      result = xmlhttp.responseText;
    }
    return result;
}

function reloadPageWithGame(){
    window.history.pushState({}, document.title, window.location.pathname);
    location.href = location.href + "?game=true";
}
  
function reloadPage(){
    window.history.pushState({}, document.title, window.location.pathname);
    window.location.reload();
}

function clueFunction(){
    Swal.fire({
        icon: '',
        title: 'Dabartinė užuomina',
        text: clue
    });
}


if (game == "true"){
    var first = firstriddle;
    clue = first;
    setTimeout(() => {  Swal.fire({
        icon: '',
        title: 'Primoji užuomina',
        text: clue
    }); }, 1000);   
    document.getElementById("endGameButton").style.display = "block";
    document.getElementById("gameButton").style.display = "none";
    document.getElementById("clueButton").style.display = "block";
    for (let i = 1; i < 7; i++){
        document.getElementById("guessButton"+i).style.display = "block";
        document.getElementById("testButton"+i).style.display = "none";
    }
}
else{
    document.getElementById("gameButton").style.display = "block";
    document.getElementById("clueButton").style.display = "none";
    document.getElementById("endGameButton").style.display = "none";
    for (let i = 1; i < 7; i++){
        document.getElementById("guessButton"+i).style.display = "none";
        document.getElementById("testButton"+i).style.display = "block";
    }
}

// this is where fun begins
function dummy(guessedItem){
    if(guessedItem == wantedArray[guessedCounter]){
        guessedArray[guessedCounter] = guessedItem;
        guessedCounter++;
        if(guessedCounter == 4){
            Swal.fire({
                icon: 'success',
                title: 'Laimėjote!!!'
            }).then(() => {
                reloadPage();
            });
        }
        else{
            switch (guessedCounter){
                case 1:
                    var second = secondriddle;
                    Swal.fire({
                        icon: 'success',
                        title: 'Antroji užuomina',
                        text: second
                    });
                    clue = second;
                    break;
                case 2:
                    var third = thirdriddle;
                    Swal.fire({
                        icon: 'success',
                        title: 'Trečioji užuomina',
                        text: third
                    });
                    clue = third;
                    break;
                case 3:
                    var fourth = fourthriddle;
                    Swal.fire({
                        icon: 'success',
                        title: 'Ketvirtoji užuomina',
                        text: fourth
                    });
                    clue = fourth;
            }

        }
    }
    else{
        counter++;
        if (counter == 3){
            Swal.fire({
                icon: 'error',
                title: 'Pralaimėjote :(',
                text: 'Sekmės kitame bandyme'
            }).then(() => {
                reloadPage();
            });
            
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Neteisingas spėjimas',
                text: 'Klaidų skaičius: ' + counter
            });
        }
    }
}
