import * as THREE from "three";

type SphereProps = {
    radius: number,
    color?: string
}

export function createSphere(props : SphereProps) {
    const { radius, color } = props;

    const geometry = new THREE.SphereGeometry(radius, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: color });
    const sphere = new THREE.Mesh(geometry, material);
    return sphere;
}