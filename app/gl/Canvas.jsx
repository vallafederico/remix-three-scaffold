import Gl from "./gl";
import { useEffect, useRef, useMemo } from "react";

export default function Canvas({ clicked }) {
  // console.log("rendering GL COMPONENT");

  const ref = useRef(null);
  const gl = useMemo(() => {
    // console.log("CANVAS - creating GL CLASS");
    return new Gl();
  }, []);

  useEffect(() => {
    // when we get canvas we setup and init the app
    if (gl) gl.setup(ref.current);
  }, [gl, ref]);

  useEffect(() => {
    if (gl) gl.updateClicked(clicked);
  }, [gl, clicked]);

  return <div ref={ref} className="Canvas" />;
}
