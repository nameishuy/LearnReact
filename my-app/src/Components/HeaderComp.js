import React, { useState } from "react";
import "../CSS/Header.css";
import { mineData } from "../Data/data";
const HeaderComp = (props) => {
  // const [theme, setTheme] = useState(false);
  const bg = props.background;
  const setbg = props.setBg;
  return (
    <div className="Header-Container">
      <div className="ChangeTheme" onClick={setbg}>
        {bg ? (
          <div className="Dark" id="Dark">
            <ion-icon name="moon-outline" className="Dark"></ion-icon>
          </div>
        ) : (
          <div className="Light" id="Light">
            <ion-icon name="sunny-outline" className="Light"></ion-icon>
          </div>
        )}
      </div>

      <div className="AboutMe">
        <div className="AboutMe-MyAvatar">
          <img src={mineData.avatar} alt="My Avatar" />
        </div>
        <div className="AboutMe-MyName">
          {mineData.name}
          <ion-icon name="shield-checkmark-outline"></ion-icon>
        </div>
        <div className="AboutMe-MyPosition">{mineData.position}</div>
        <div className="AboutMe-MySocials">
          {mineData.socials.map((social) => (
            <div className="AboutMe-MySocial">
              <a className={bg ? "iconDark" : "iconLight"} href={social.link}>
                {social.icon}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderComp;
