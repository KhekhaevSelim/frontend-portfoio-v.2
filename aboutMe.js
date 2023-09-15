// import * as THREE from "./node_modules/three/build/three.module.js"

const logoParent = document.querySelector(".logoPass");
const iconChild = document.getElementById("back-icon");

iconChild.addEventListener("mouseenter", ()=> {
    logoParent.classList.replace("logoPass","logoActive");
})
iconChild.addEventListener("mouseleave", ()=> {
    logoParent.classList.replace("logoActive","logoPass");
})

// //Настройка сцены
// const scene = new THREE.Scene();
// const spaceTexture = new THREE.TextureLoader();
// spaceTexture.load("../assets/images/home-image.png");
// scene.background = spaceTexture;

// //Настройка камеры
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

// //Настройка renderers (канвас)
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth/window.innerHeight);
// renderer.setClearColor(0xffffff,0);
// document.body.appendChild(renderer.domElement);

// //Глобальное освещение
// const ambientLight = new THREE.AmbientLight(0xffffff);
// scene.add(ambientLight);

// //Настройка куба
// const cubeTexture = new THREE.TextureLoader();
// cubeTexture.load("../assets/images/cubeTexture.png", 
// function(cubeTexture){
//     const cube = new THREE.Mesh(new THREE.BoxGeometry(), new THREE.MeshBasicMaterial({ map : cubeTexture }));
//     cube.position.z = -2;
//     cube.rotation.x = 10;
//     cube.rotation.y = 10;
//     scene.add(cube);
// }
// );

// // const cube = new THREE.Mesh(new THREE.BoxGeometry(), new THREE.MeshBasicMaterial({ map : cubeTexture }));
// // cube.position.z = -2;
// // cube.rotation.x = 10;
// // cube.rotation.y = 10;
// // scene.add(cube);

// // Настройка земли
// let earth;
// const earthTexture = new THREE.TextureLoader();
// earthTexture.load("../assets/images/earthTexture.png", 
// function(){
//     const earth = new THREE.Mesh(new THREE.SphereGeometry(1, 64, 64), new THREE.MeshStandardMaterial({ map : earthTexture }));
//     earth.position.z = -5;
//     scene.add(earth);
//     animate(earth);
// }
// );
// // const earth = new THREE.Mesh(new THREE.SphereGeometry(1, 64, 64), new THREE.MeshStandardMaterial({ map : earthTexture }));
// // earth.position.z = -5;
// // scene.add(earth);

// //Добавление звезд на фоне
// function addStar(){
//     const geometry = new THREE.SphereGeometry(0.1, 16, 16);
//     const material = new THREE.MeshStandardMaterial({ color : 0xffffff })
//     const star = new THREE.Mesh(geometry, material);
//     const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(90));

//     star.position.set(x, y, z);
//     scene.add(star);
// }

// Array(200).forEach(addStar);
// // Запускаем рекурсивно кадр при каждом изменении настроек куба,сцены, света

// function animate (earth){
//     requestAnimationFrame(animate);
//     earth.rotation.y += 0.003;
//     earth.rotation.x += 0.002;
//     earth.rotation.z += 0.002;  
//     renderer.render(scene, camera)
// }



// document.body.onscroll = handlerScroll;
// function handlerScroll(){
//     const t = document.body.getBoundingClientRect().top;
//     cube.rotation.x -= 0.01;
//     cube.rotation.y -= 0.01;

//     if(camera.position < -1.4){
//         cube.rotation.x -= 0;
//         cube.rotation.y -= 0;
//         if(earth.position.x > - 0.8){
//             earth.position.x -= 0.02;
//         } }
//     else {
//      earth.position.x -= 0;
//     }
//     camera.position.z = t * 0.001;
// }

import * as THREE from './../node_modules/three/build/three.module.js';

// Настройки сцены
const scene = new THREE.Scene();
const spaceTexture = new THREE.TextureLoader().load({color : "white"});
scene.background = spaceTexture;

// Настройка камеры
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

// Настройка renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor( 0xffffff, 0);
document.body.appendChild( renderer.domElement );

// Глобальное освещение
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

// // Настройки земли1
// const earthTexture2 = new THREE.TextureLoader().load('../assets/images/earthTexture.png');
// const earth2 = new THREE.Mesh(
// 	new THREE.SphereGeometry(1, 64, 64),
// 	new THREE.MeshStandardMaterial({
// 		map: earthTexture2,
// 	})
// );
// earth2.position.set(4,0, -10);
// scene.add(earth2);


// Настройки земли2
const earthTexture = new THREE.TextureLoader().load('../assets/images/cubeTexture.png');
const earth = new THREE.Mesh(
	new THREE.SphereGeometry(1, 64, 64),
	new THREE.MeshStandardMaterial({
		map: earthTexture,
	})
);
earth.position.set(-9, 0, -11);
scene.add(earth);


// Анимация | каждый кадр
function animate() {
	requestAnimationFrame(animate);

	earth.rotation.y += 0.003;
	earth.rotation.x += 0.002;
	earth.rotation.z += 0.002;
    // earth2.rotation.y += 0.003;
	// earth2.rotation.x += 0.002;
	// earth2.rotation.z += 0.002;
	renderer.render(scene, camera);
}
// Запуск анимации
animate();

// Событие для прокрутки
// document.body.onscroll = handlerScroll;
// function handlerScroll() {
// 	const t = document.body.getBoundingClientRect().top;

// 	if(cube.rotation.y > 0 && cube.rotation.x > 0) {
// 		cube.rotation.y -= 0.01;
// 		cube.rotation.x -= 0.01;
// 	}


// 	if ( camera.position.z < -1.4 ) {
// 		cube.rotation.y = 0;
// 		cube.rotation.x = 0;
// 		if( earth.position.x > -0.8 ) {
// 			earth.position.x -= 0.02;
// 		}
// 	} else {
// 		earth.position.x = 0;
// 	}

// 	camera.position.z = t * 0.001;
// }