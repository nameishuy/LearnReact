import { useState } from "react";
import "./App.css";
import HeaderComp from "./Components/HeaderComp";
import BodyComp from "./Components/BodyComp";

function App() {
  const [bg, setBg] = useState(true);
  const [visible, setVisible] = useState(false);
  const scrolled = document.getElementById("scrolltoTopButton");

  const showScrollBtn = () => {
    if (window.scrollY > 0) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  window.addEventListener("scroll", showScrollBtn);
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
      <div
        className="scrolltoTopButton"
        id="scrolltoTopButton"
        onClick={scrollToTop}
        style={{
          display: visible ? "inline" : "none",
          backgroundColor: bg ? "black" : "white",
        }}
      >
        <ion-icon
          name="arrow-up-outline"
          style={{ color: bg ? "white" : "black" }}
        ></ion-icon>
      </div>
      <BodyComp background={bg} setBg={HaveBackground}></BodyComp>
    </div>
  );
}

export default App;
