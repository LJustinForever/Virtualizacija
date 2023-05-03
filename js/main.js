class CustomInfospot {
  constructor(name, infospot, is_visable) {
    this.name = name;
    this.infospot = infospot;
    this.is_visable = is_visable;
  }
}
var infospotList = [];
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const game = urlParams.get('game');
const guessedArray = [];
const wantedArray = ["pen", "book", "camera"];
let counter = 0;
let guessedCounter = 0;

if (game == "true"){
  // alert("Working");
  document.getElementById("endGameButton").style.display = "block";
  document.getElementById("gameButton").style.display = "none";
  for (let i = 1; i < 4; i++){
    document.getElementById("guessButton"+i).style.display = "block";
  }
  
}
else{
  document.getElementById("gameButton").style.display = "block";
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
      alert("You won!!!");
      window.history.pushState({}, document.title, window.location.pathname);
      window.location.reload();
    }
    else{
      switch (guessedCounter){
        case 1:
          alert("second riddle");
          break;
        case 2:
          alert("third riddle");
      }

    }
  }
  else{
    counter++;
    if (counter == 3){
      alert("game over :( ");
      window.history.pushState({}, document.title, window.location.pathname);
      window.location.reload();
    }
    else {
      alert("Wrong guess. Errors made : " + counter);
    }
  }
}

function toggleSound() {
  var audio = document.getElementById("myAudio");
  var soundIcon = document.getElementById("soundIcon");

  if (audio.paused) {
    audio.play();
    soundIcon.classList.remove('fa', 'fa-volume-off', 'fa-lg');
    soundIcon.classList.add('fa', 'fa-volume-up', 'fa-lg');
  } else {
    audio.pause();
    soundIcon.classList.remove('fa', 'fa-volume-up', 'fa-lg');
    soundIcon.classList.add('fa', 'fa-volume-off', 'fa-lg');
  }
}

function toggleInfospot(key){
  infospotList.forEach(c_info => {
    if (c_info.is_visable && c_info.name != key) {
      c_info.infospot.hide()
    }
    else{
      c_info.infospot.show()
    }

  });
}

function reloadPageWithGame(){
  // alert("Get ready");
  window.history.pushState({}, document.title, window.location.pathname);
  location.href = location.href + "?game=true";
}

function reloadPage(){
  window.history.pushState({}, document.title, window.location.pathname);
  window.location.reload();
}

const panorama = new PANOLENS.ImagePanorama('images/pan1.jpg');
const panorama2 = new PANOLENS.ImagePanorama('images/pan2.jpg');
const panorama3 = new PANOLENS.ImagePanorama('images/pan3.jpg');
const panorama4 = new PANOLENS.ImagePanorama('images/pan4.jpg');
const panorama5 = new PANOLENS.ImagePanorama('images/pan5.jpg');
const panorama6 = new PANOLENS.ImagePanorama('images/pan6.jpg');
const panorama7 = new PANOLENS.ImagePanorama('images/pan7.jpg');
const panorama8 = new PANOLENS.ImagePanorama('images/pan8.jpg');


var imageContainer = document.querySelector('.image-container');
var movementPositions = [
  //  3000 left -2000 down -2000 in front
  //1
  new THREE.Vector3(4000, -2000, -100),
  new THREE.Vector3(-4000, -2000, 0),
  new THREE.Vector3(4000, -2000, -500),
  new THREE.Vector3(2000, -2000, -2000),
  new THREE.Vector3(-2000, -2000, 2000),
  new THREE.Vector3(2500, -2000, 1500),
  new THREE.Vector3(250, -2000, -3000),
  new THREE.Vector3(3000, -2000, 1000),
  new THREE.Vector3(-1000, -2000, -2000),
  new THREE.Vector3(0, -2000, 2500),

];

function addInfospotToPan(positionX, positionY, positionZ, hoverText, popup, panorama) {
  var infospot = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
  infospot.position.set(positionX, positionY, positionZ);
  infospot.addHoverText(hoverText);
  infospot.addEventListener('click', function () { window.location.href = popup; });
  panorama.add(infospot);
  var c_infospot = new CustomInfospot(hoverText, infospot, true);
  infospotList.push(c_infospot);
}

addInfospotToPan(4662.39, -1122.05, 1393.41, "Kamera", "#popup_camera", panorama2)
addInfospotToPan(-1529.66, -294.72, -4747.44, "Tušinukas", "#popup_pen", panorama2)
addInfospotToPan(2490.00, 523.06, 4299.84, "Knyga", "#popup_book", panorama3)


const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  controlBar: true,
  output: 'overlay',  
  autoHideInfospot: false
});

panorama.link(panorama2, movementPositions[0]);
panorama2.link(panorama, movementPositions[1]);
panorama2.link(panorama5, movementPositions[2]);
panorama5.link(panorama2, movementPositions[3]);
panorama5.link(panorama4, movementPositions[4]);
panorama4.link(panorama5, movementPositions[5]);
panorama4.link(panorama3, movementPositions[6]);
panorama3.link(panorama4, movementPositions[7]);
panorama3.link(panorama2, movementPositions[8]);
panorama2.link(panorama3, movementPositions[9]);

viewer.add(panorama, panorama2, panorama5, panorama4, panorama3);
