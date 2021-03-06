const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;
const container = document.querySelector('#container');

const material = new THREE.MeshBasicMaterial({color: 0x8E9790, wireframe: true});
const material2 = new THREE.MeshBasicMaterial({color: 0x333333, wireframe: true});
const material3 = new THREE.MeshBasicMaterial({color: 0x333333, wireframe: true});
const material4 = new THREE.MeshBasicMaterial({color: 0x333333, wireframe: true});
const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 10, 10000);
camera.position.z = 200;
camera.position.x = 5;
camera.position.y = -5;

const scene = new THREE.Scene();

scene.add(camera);
renderer.setSize(WIDTH, HEIGHT);

container.appendChild(renderer.domElement);

const pointLight = new THREE.PointLight(0xFFFFFF);

pointLight.position.x = 10;
pointLight.position.y = 50;
pointLight.position.z = 130;

scene.add(pointLight);

const Shape = (x, y, z) => ({x, y, z});

const Box = (tx, ty, shape, target, speed) => ({
    transform: {
        x: Math.random() * 0.007 * (Math.random() > 0.5 ? 1 : -1) + (Math.random() > 0.5 ? 1 : -1) * 0.025,
        y: Math.random() * 0.007 * (Math.random() > 0.5 ? 1 : -1) + (Math.random() > 0.5 ? 1 : -1) * 0.025,
    },
    targetPosition: target,
    initTarget: new THREE.Vector3(target.x, target.y, target.z),
    cube: createBox(shape, speed ? speed : 0.02),
    rspeed: Math.random() * 0.30 + 0.1,
});


const createBox = (shape, speed) => {
    var geometry = new THREE.BoxGeometry(shape.x, shape.y, shape.z);
    var cube = new THREE.Mesh(geometry, material);
    cube.userData.speed = speed;
    return cube;
};

const createLine = () => {
    var geometry = new THREE.Geometry();
    var material = new THREE.LineBasicMaterial({color: 0x000000, linewidth: 1});

    geometry.vertices.push(new THREE.Vector3(-35, 20, 0));
    geometry.vertices.push(new THREE.Vector3(-23, 0, 0));
    geometry.vertices.push(new THREE.Vector3(-11, 20, 0));

    geometry.vertices.push(new THREE.Vector3(29, 20, 0));
    geometry.vertices.push(new THREE.Vector3(17, 0, 0));
    geometry.vertices.push(new THREE.Vector3(40, 0, 0));
    return new THREE.Line(geometry, material);
}

const boxes = [
    // v
    Box(0.01, 0.01, Shape(10, 10, 2), new THREE.Vector3(-35, 20, 0)),
    Box(0.01, 0.01, Shape(4, 4, 2), new THREE.Vector3(-31, 17, 0)),
    Box(0.01, -0.01, Shape(10, 8, 7), new THREE.Vector3(-30, 10, 0)),
    Box(0.01, -0.01, Shape(10, 6, 2), new THREE.Vector3(-26, 4, 0)),
    Box(0.01, -0.01, Shape(4, 9, 9), new THREE.Vector3(-23, 0, 0)),
    Box(0.01, -0.01, Shape(15, 7, 4), new THREE.Vector3(-22, -3, 0)),
    Box(0.01, -0.01, Shape(6, 3, 3), new THREE.Vector3(-22, -5, 0)),
    Box(0.01, -0.01, Shape(4, 4, 4), new THREE.Vector3(-22, -8, 0)),
    Box(0.01, -0.01, Shape(7, 7, 4), new THREE.Vector3(-18, -1, 0)),
    Box(0.01, -0.01, Shape(5, 4, 5), new THREE.Vector3(-16, 5, -5)),
    Box(0.01, -0.01, Shape(8, 10, 2), new THREE.Vector3(-14, 10, 0)),
    Box(0.01, -0.01, Shape(2, 3, 1), new THREE.Vector3(-13, 11, 0)),
    Box(0.01, -0.01, Shape(10, 7, 2), new THREE.Vector3(-12, 13, 0)),
    Box(0.01, -0.01, Shape(10, 6, 4), new THREE.Vector3(-11, 19, 0)),
    Box(0.01, -0.01, Shape(5, 5, 4), new THREE.Vector3(-10, 20, 0)),

    // z
    Box(0.01, -0.01, Shape(10, 10, 4), new THREE.Vector3(8, 20, 0)),
    Box(0.01, -0.01, Shape(4, 4, 6), new THREE.Vector3(12, 20, 0)),
    Box(0.01, -0.01, Shape(5, 10, 3), new THREE.Vector3(14, 22, 0)),
    Box(0.01, -0.01, Shape(10, 10, 2), new THREE.Vector3(20, 21, 0)),
    Box(0.01, -0.01, Shape(7, 10, 4), new THREE.Vector3(27, 20, 0)),
    Box(0.01, -0.01, Shape(10, 10, 2), new THREE.Vector3(32, 20, 0)),
    Box(0.01, -0.01, Shape(7, 10, 6), new THREE.Vector3(34, 20, 0)),
    Box(0.01, -0.01, Shape(6, 10, 2), new THREE.Vector3(28, 15, 0)),
    Box(0.01, -0.01, Shape(7, 6, 2), new THREE.Vector3(24, 11, 0)),
    Box(0.01, -0.01, Shape(6, 6, 5), new THREE.Vector3(21, 9, 0)),
    Box(0.01, -0.01, Shape(7, 10, 2), new THREE.Vector3(16, 3, 0)),
    Box(0.01, -0.01, Shape(6, 9, 3), new THREE.Vector3(13, -2, 0)),
    Box(0.01, -0.01, Shape(4, 4, 4), new THREE.Vector3(9, -3, 0)),
    Box(0.01, -0.01, Shape(10, 10, 3), new THREE.Vector3(19, -2, 0)),
    Box(0.01, -0.01, Shape(10, 7, 2), new THREE.Vector3(25, -3, 0)),
    Box(0.01, -0.01, Shape(10, 6, 7), new THREE.Vector3(32, -1, 0)),
    Box(0.01, -0.01, Shape(10, 10, 2), new THREE.Vector3(35, 0, 0)),
    Box(0.01, -0.01, Shape(4, 5, 5), new THREE.Vector3(40, -2, 0)),
];

const line = createLine();

boxes.forEach(box => {
    scene.add(box.cube);
});

var tick = 0;
var textTick = 0;

var vFOV = THREE.Math.degToRad(camera.fov);
var height = 2 * Math.tan(vFOV / 2) * 200;
var width = height * camera.aspect;
var mousePos = {screenX: 1000, screenY: 500};
var direction = 1;
var untouched = true;
var hoverspeed = 1;
var untouchedTarget;
var tween;
var introDuration = 380;
var introEndDuration = 120;

function update() {
    setTimeout(function () {

        requestAnimationFrame(update);

    }, 1000 / 60);

    tick += 1;
    textTick += 1;
    if (untouched && untouchedTarget) {
        mousePos = {screenX: untouchedTarget.x * 100, screenY: -untouchedTarget.y * 50};
        if (tween) {
            TWEEN.update();
        } else {
            tween = new TWEEN.Tween({x: camera.position.x, y: camera.position.y})
                .to({x: untouchedTarget.x, y: untouchedTarget.y}, 250)
                .easing(TWEEN.Easing.Linear.None)
                .onUpdate((pos) => {
                    camera.position.set(pos.x, pos.y, 200);
                })
                .onComplete(() => {
                    console.log(mousePos);
                    console.log("complete");
                    untouched = false;
                })
                .start();
        }
    }

    if (!untouched) {
        camera.position.x = mousePos.screenX / 100;
        camera.position.y = -mousePos.screenY / 50;
    }

    boxes.forEach(el => {
        const box = el.cube;
        box.position.z += 0;
        box.rotation.x += el.transform.x;
        box.rotation.y += el.transform.y;


        if (el.targetPosition && tick > 60) {
            if (!inPosition(el.targetPosition, box)) {
                box.position.addScaledVector(el.targetPosition, box.userData.speed);
            } else {
                box.userData.speed = 0;
                if (tick === introDuration) {
                    box.material = material2;
                    el.targetPosition = new THREE.Vector3(
                        Math.random() * (width / 2) * (Math.random() > 0.5 ? 1 : -1),
                        Math.random() * (height / 2) * 0.9 * (Math.random() > 0.5 ? 1 : -1),
                        0);
                    box.userData.speed = 0.005;
                }
            }
        }
        if (tick === introDuration + introEndDuration) {
            box.material = material3;
            box.userData.speed = 0;
        }
        if (tick === introDuration + introEndDuration + 60) {
            box.material = material4;
        }
        if (tick > introDuration + introEndDuration + 60) {
            box.position.x += el.rspeed * direction * hoverspeed;
            if (box.position.x >= (width / 2) + 60) {
                box.position.x = -(width / 2) - 20;
            } else if (box.position.x <= -(width / 2) - 40) {
                box.position.x = (width / 2) + 55;
            }
        }
    });
    renderer.render(scene, camera);
}

requestAnimationFrame(update);

const onDocumentMouseMove = (event) => {
    if (untouched) {
        untouchedTarget = new THREE.Vector3(event.screenX / 100, -event.screenY / 50, 0);
    } else {
        speed = 0.5 + (event.screenY / window.innerHeight) * 4;
        mousePos = event;
    }
};

const onDocumentMouseDown = (event) => {
    direction *= -1;
    if (tick > introDuration + introEndDuration) {
        tick = introDuration + introEndDuration - 30;
        boxes.forEach(el => {
            el.targetPosition = new THREE.Vector3(0, 0, 0);
        });
    }
};

const inPosition = (targetPosition, box) =>
    Math.abs(targetPosition.x) - Math.abs(box.position.x) <= 0 &&
    Math.abs(targetPosition.y) - Math.abs(box.position.y) <= 0;


const updateSceneRatios = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    vFOV = THREE.Math.degToRad(camera.fov);
    height = 2 * Math.tan(vFOV / 2) * 200;
    width = height * camera.aspect;
};

window.addEventListener('resize', updateSceneRatios, false);
document.addEventListener('mousemove', onDocumentMouseMove, false);
document.addEventListener('mousedown', onDocumentMouseDown, false);
