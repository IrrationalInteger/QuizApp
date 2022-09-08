import { useState, useEffect } from "react";

function Header() {
  let height = (6 / 100) * window.screen.height;

  return <header style={{ backgroundColor: "black", height: height }}></header>;
}

export default Header;
