function parse_kle(data) {
    let material = new THREE.MeshNormalMaterial();
    let mesh = new THREE.Mesh(PROFILES.SA.ROW1.U1, material);
    scene.add(mesh);
    console.log(PROFILES.SA.ROW1.U1, mesh);
}
