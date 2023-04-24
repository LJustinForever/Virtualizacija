const panorama = new PANOLENS.ImagePanorama( 'images/pan1.jpg' );
const panorama2 = new PANOLENS.ImagePanorama('images/pan2.jpg');
let imageContainer = document.querySelector('.image-container');

var infospotPositions = [
    new THREE.Vector3(2136.06, 20.30, 100.14),
    new THREE.Vector3(-1000.06, -500.30, -3000.14),
    
  ];

const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    autoRotate: true,
    autoRotateSpeed: 0.3,
    controlBar: true,
});
panorama.link( panorama2, infospotPositions[0]);
panorama2.link( panorama, infospotPositions[1]);

viewer.add( panorama,panorama2 );
