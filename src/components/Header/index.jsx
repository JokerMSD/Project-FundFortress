import Toggle from "react-toggle";
import { MdNightlight } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";
import logo from "../../assets/LogoLight.svg";
import logoDark from "../../assets/LogoDark.svg";
import Style from "./style.module.scss";

export const Header = ({darkMode, handleDarkMode}) => {

  return (
    <>
      <header className={`${Style.Header} ${darkMode ? Style["dark-mode"] : ''}`}>
        <img 
        className={Style.HeaderLogo} 
        src={darkMode ? logoDark : logo} 
        alt="header logo"
         />
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
