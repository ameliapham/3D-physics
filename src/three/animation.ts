import * as THREE from "three";

type Props = {
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera,
    renderer: THREE.WebGLRenderer,
    orbitControls?: any
}

export function startAnimation(props : Props) {
    const { scene, camera, renderer, orbitControls } = props;

    const clock = new THREE.Clock();

    function animate() {
        // Update time
        const elapsedTime = clock.getElapsedTime();

        // Update control
        orbitControls?.update()

        // Update render
        renderer.render(scene, camera);

        // Call animate again on the next frame
        window.requestAnimationFrame(animate);
    }
    animate();
}
