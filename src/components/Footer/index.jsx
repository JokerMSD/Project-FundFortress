import React from "react";
import Style from "./style.module.scss";
import { BsLinkedin} from "react-icons/bs";


export const Footer = (darkMode) => {


    return (
        <>
         <footer>
            <section>
                <p className={`${Style.pText} ${darkMode ? Style["dark-mode"] : ''}`}>
                    Construindo um futuro brilhante, passo a passo, juntos. &copy; 2023 Igor Silva"
                    </p>
                    <button className={`${Style.button} ${darkMode ? Style["dark-mode-button"] : ''}`}><BsLinkedin/></button>
            </section>
         </footer>
        </>
    );
};