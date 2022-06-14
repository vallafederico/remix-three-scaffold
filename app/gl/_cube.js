import { Group, MeshNormalMaterial, BoxBufferGeometry, Mesh } from "three";

export default class extends Group {
  constructor() {
    super();

    this.create();
  }
  create() {
    const mat = new MeshNormalMaterial();
    const geom = new BoxBufferGeometry(1, 1, 1);
    const mesh = new Mesh(geom, mat);
    this.add(mesh);
  }
}
