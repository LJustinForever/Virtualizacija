const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const game = urlParams.get('game');
const guessedArray = [];
const wantedArray = ["pen", "book", "camera"];
let counter = 0;
let guessedCounter = 0;
let clue = "";
const confirm = "Gerai";

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
    for (let i = 1; i < 4; i++){
        document.getElementById("guessButton"+i).style.display = "block";
    }
}
else{
    document.getElementById("gameButton").style.display = "block";
    document.getElementById("clueButton").style.display = "none";
    document.getElementById("endGameButton").style.display = "none";
    for (let i = 1; i < 4; i++){
        document.getElementById("guessButton"+i).style.display = "none";
    }
}

// this is where fun begins
function dummy(guessedItem){
    if(guessedItem == wantedArray[guessedCounter]){
        guessedArray[guessedCounter] = guessedItem;
        guessedCounter++;
        if(guessedCounter == 3){
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
