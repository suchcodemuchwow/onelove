import "./globals.css";
import { useState } from "react";

function IndexOptions() {
  const [data, setData] = useState("");

  return (
    <div id="root">
      <h1>
        Welcome to your <a href="https://www.plasmo.com">Plasmo</a> Extension!
      </h1>
      <footer>Crafted by @PlamoHQ</footer>{" "}
    </div>
  );
}

export default IndexOptions;
