const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const game = urlParams.get('game');
const guessedArray = [];
const wantedArray = loadFile("ats.txt").split('\r\n');
let counter = 0;
let guessedCounter = 0;
let clue = "";
const confirm = "Gerai";

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
        title: 'Current clue',
        text: clue
    });
}


if (game == "true"){
    var first = "It is a pen";
    clue = first;
    setTimeout(() => {  Swal.fire({
        icon: '',
        title: 'First clue',
        text: clue
    }); }, 1000);   
    document.getElementById("endGameButton").style.display = "block";
    document.getElementById("gameButton").style.display = "none";
    document.getElementById("clueButton").style.display = "block";
    for (let i = 1; i < 7; i++){
        document.getElementById("guessButton"+i).style.display = "block";
    }
}
else{
    document.getElementById("gameButton").style.display = "block";
    document.getElementById("clueButton").style.display = "none";
    document.getElementById("endGameButton").style.display = "none";
    for (let i = 1; i < 7; i++){
        document.getElementById("guessButton"+i).style.display = "none";
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
                title: 'You won!!!'
            }).then(() => {
                window.history.pushState({}, document.title, window.location.pathname);
                window.location.reload();
            });
        }
        else{
            switch (guessedCounter){
                case 1:
                    var second = "it is a book"
                    Swal.fire({
                        icon: 'success',
                        title: 'Second clue',
                        text: second
                    });
                    clue = second;
                    break;
                case 2:
                    var third = "it is a camera"
                    Swal.fire({
                        icon: 'success',
                        title: 'Third clue',
                        text: third
                    });
                    clue = third;
                case 3:
                    var fourth = "it is a scout book"
                    Swal.fire({
                        icon: 'success',
                        title: 'Fourth clue',
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
                title: 'Game over :(',
                text: 'Better luck next time'
            }).then(() => {
                window.history.pushState({}, document.title, window.location.pathname);
                window.location.reload();
            });
            
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Wrong guess',
                text: 'Errors made: ' + counter
            });
        }
    }
}
