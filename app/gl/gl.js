import { WebGLRenderer, PerspectiveCamera } from "three";
import Scene from "./_scene";

export default class Gl {
  constructor() {
    // console.log("GL creation");
    this.time = 0;
  }

  setup(canvas) {
    // console.log("GL setup", canvas);

    this.renderer = new WebGLRenderer(canvas);

    this.vp = {
      w: window.innerWidth,
      h: window.innerHeight,
      aspect: function () {
        return this.w / this.h;
      },
      pixelRatio: Math.min(window.devicePixelRatio, 2),
      container: canvas,
    };

    this.renderer.setPixelRatio(this.vp.pixelRatio);
    this.renderer.setSize(this.vp.w, this.vp.h);
    canvas.appendChild(this.renderer.domElement);
    this.renderer.setClearColor(0xffff00, 1);

    // camera
    this.camera = new PerspectiveCamera(70, this.vp.aspect(), 0.001, 1000);
    this.camera.position.set(0, 0, 2);

    this.create();
  }

  create() {
    this.scene = new Scene();

    this.render();
  }

  updateClicked(updateValue) {
    let color = 0xffeeff;
    updateValue ? (color = 0xffffff) : (color = 0xff00ff);
    this.renderer.setClearColor(color, 1);
  }

  render() {
    if (this.paused) return;
    this.time += 0.01;

    this.scene?.render(this.time);

    this.renderer.render(this.scene, this.camera);
    window.requestAnimationFrame(this.render.bind(this));
  }
}
