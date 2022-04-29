import { useState } from "react";
import "./App.css";
import HeaderComp from "./Components/HeaderComp";
import BodyComp from "./Components/BodyComp";

function App() {
  const [bg, setBg] = useState(true);

  function HaveBackground() {
    // const cont = document.getElementById("container");
    setBg(!bg);
    // bg
    //   ? (cont.style.backgroundColor = "white")
    //   : (cont.style.backgroundColor = "black");
  }
  return (
    <div
      className={`Container ${bg ? "LightTheme" : "DarkTheme"}`}
      id="container"
    >
      <HeaderComp background={bg} setBg={HaveBackground}></HeaderComp>
      <BodyComp></BodyComp>
    </div>
  );
}

export default App;
