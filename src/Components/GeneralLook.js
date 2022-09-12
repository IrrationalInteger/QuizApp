import { useRef, useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

function GeneralLook(props) {
  let height1 =
    window.innerHeight -
    (2 / 100) * window.screen.height -
    (6 / 100) * window.screen.height;
  return (
    <div>
      <Header></Header>
      <div
        className={
          "card w-" + props.cl + " text-center  justify-content-center"
        }
        style={{
          margin: "auto",
          width: props.width,
          height: props.height,
          minHeight: height1,
        }}
      >
        {props.children}
      </div>
      <Footer></Footer>
    </div>
  );
}
export default GeneralLook;
