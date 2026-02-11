import GUI from "lil-gui"

import { getCanvas } from "./three/canvas";
import { createScene } from "./three/scene";
import { createCamera, createOrbitControls } from "./three/camera";
import { createRenderer } from "./three/renderer";
import { createCube } from "./three/models/cube";
import { createAxesHelper } from "./three/models/axesHelper";
import { setupResize } from "./three/resize";
import { startAnimation } from "./three/animation";

console.log("Hello, Three.js with TypeScript!");

// --- Canvas Setup ---
const canvas = getCanvas();

// --- Scene Setup ---
const scene = createScene();

// --- Camera Setup ---
const camera = createCamera();
const orbitControls = createOrbitControls({ camera, canvas });
scene.add(camera)

// --- Setup Axes Helper ---
const axesHelper = createAxesHelper({ size: 2 })
scene.add(axesHelper)

// --- Objects ---
const cube = createCube({ size: 1, color: 'red' });
scene.add(cube);

// --- Renderer Setup ---
const renderer = createRenderer({canvas});

// --- Debug UI ---
const gui = new GUI
gui.close()

// --- Resize ---
setupResize({camera, renderer});

// --- Render Loop ---
startAnimation({ scene, camera, renderer, orbitControls });
