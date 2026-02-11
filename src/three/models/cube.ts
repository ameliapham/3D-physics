import * as THREE from "three";

type Props = {
    size: number,
    color?: string
}

export function createCube(props : Props) {
    const { size, color } = props;

    const geometry = new THREE.BoxGeometry(size, size, size);
    const material = new THREE.MeshBasicMaterial({ color: color });
    const cube = new THREE.Mesh(geometry, material);
    return cube;
}