import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { useState, useEffect, useMemo } from "react";

import stylesReset from "./styles/reset.css";
import stylesGl from "./styles/gl.css";
import stylesGlobal from "./styles/global.css";

import Canvas from "./gl/Canvas";
// import { GlContext } from "./gl/glContext";

export const meta = () => ({
  charset: "utf-8",
  title: "Remixing Three",
  viewport: "width=device-width,initial-scale=1",
});

export function links() {
  return [
    {
      rel: "stylesheet",
      href: stylesReset,
    },
    {
      rel: "stylesheet",
      href: stylesGl,
    },
    {
      rel: "stylesheet",
      href: stylesGlobal,
    },
  ];
}

// export const headers = () => {
//   return {
//     "Cache-Control": "public, max-age=31536000, s-maxage=31536000",
//   };
// };

export default function App() {
  // clicked state test for THREE
  const [clicked, setClicked] = useState(false);
  const THREEClicked = useMemo(
    () => ({ clicked, setClicked }),
    [clicked, setClicked]
  );
  // useEffect(() => {
  //   console.log("clicked updated in ROOT", clicked);
  // }, [clicked]);

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Canvas clicked={THREEClicked.clicked} />

        <Outlet context={{ clicked, setClicked }} />

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
