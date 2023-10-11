import Toggle from "react-toggle";
import { useState } from "react";
import { MdNightlight } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";
import logo from "../../assets/LogoLight.svg";
import Style from "./style.module.scss";
import { useEffect } from "react";

export const Header = ({darkMode, handleDarkMode}) => {

  return (
    <>
      <header className={`${Style.Header} ${darkMode ? Style["dark-mode"] : ''}`}>
        <img className={Style.HeaderLogo} src={logo} alt="header logo" />
        <label>
          <Toggle
            defaultChecked={darkMode}
            icons={{
              checked: <MdNightlight className={Style.nightMode} />,
              unchecked: <BsFillSunFill className={Style.dayMode}/>,
            }}
            onChange={handleDarkMode}
          />
        </label>
      </header>
    </>
  );
};
