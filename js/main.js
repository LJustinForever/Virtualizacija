const panorama = new PANOLENS.ImagePanorama( 'images/pan1.jpg' );
const panorama2 = new PANOLENS.ImagePanorama('images/pan2.jpg');
//5
const panorama3 = new PANOLENS.ImagePanorama('images/pan3.jpg');
//4
const panorama4 = new PANOLENS.ImagePanorama('images/pan4.jpg');
//3
const panorama5 = new PANOLENS.ImagePanorama('images/pan5.jpg');
const panorama6 = new PANOLENS.ImagePanorama('images/pan6.jpg');
const panorama7 = new PANOLENS.ImagePanorama('images/pan7.jpg');
const panorama8 = new PANOLENS.ImagePanorama('images/pan8.jpg');
let imageContainer = document.querySelector('.image-container');

var infospotPositions = [
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

const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    autoRotate: true,
    autoRotateSpeed: 0.3,
    controlBar: true,
});
panorama.link( panorama2, infospotPositions[0]);
panorama2.link( panorama, infospotPositions[1]);
panorama2.link( panorama5, infospotPositions[2]);
panorama5.link( panorama2, infospotPositions[3]);
panorama5.link( panorama4, infospotPositions[4]);
panorama4.link( panorama5, infospotPositions[5]);
panorama4.link( panorama3, infospotPositions[6]);
panorama3.link( panorama4, infospotPositions[7]);
panorama3.link( panorama2, infospotPositions[8]);
panorama2.link( panorama3, infospotPositions[9]);

viewer.add( panorama,panorama2,panorama5, panorama4, panorama3 );
