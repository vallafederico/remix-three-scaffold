import { Scene } from "three";
import Cube from "./_cube";

export default class extends Scene {
  constructor() {
    super();

    this.create();
  }

  create() {
    this.cube = new Cube();
    this.add(this.cube);
  }

  render(t) {
    this.cube.rotation.x = t;
    this.cube.rotation.y = t;
    this.cube.rotation.z = t;
    // super.render(t);
  }
}
