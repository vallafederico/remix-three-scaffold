import { useOutletContext } from "@remix-run/react";
import { useEffect } from "react";

import stylesIndex from "../styles/index.css";
// import Canvas from "../gl/Canvas";

export function Links() {
  return [
    {
      rel: "stylesheet",
      href: stylesIndex,
    },
  ];
}

export default function Index() {
  const { clicked, setClicked } = useOutletContext();
  // console.log(clicked);

  return (
    <div className="pw">
      <div className="w">
        <section className="s hero">
          <div className="c">
            <button onClick={() => setClicked(!clicked)}>{`${clicked}`}</button>
          </div>
        </section>
        <section className="s">
          <div className="c"></div>
        </section>
        <section className="s">
          <div className="c"></div>
        </section>
        <section className="s">
          <div className="c"></div>
        </section>
      </div>
      {/* <Canvas /> */}
    </div>
  );
}
