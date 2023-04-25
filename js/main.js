const panorama = new PANOLENS.ImagePanorama( 'images/pan1.jpg' );
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
var camera_infospot = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
camera_infospot.position.set( 4662.39, -1122.05, 1393.41 );
//camera_infospot.addHoverElement(document.querySelector('#camera-desc-container'), 200 );
camera_infospot.addEventListener( 'click', function(){ window.location.href = "#popup1"; });
panorama2.add(camera_infospot);

const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    controlBar: true,
    output: 'overlay'
});

panorama.link( panorama2, movementPositions[0]);
panorama2.link( panorama, movementPositions[1]);
panorama2.link( panorama5, movementPositions[2]);
panorama5.link( panorama2, movementPositions[3]);
panorama5.link( panorama4, movementPositions[4]);
panorama4.link( panorama5, movementPositions[5]);
panorama4.link( panorama3, movementPositions[6]);
panorama3.link( panorama4, movementPositions[7]);
panorama3.link( panorama2, movementPositions[8]);
panorama2.link( panorama3, movementPositions[9]);

viewer.add( panorama,panorama2,panorama5, panorama4, panorama3 );
