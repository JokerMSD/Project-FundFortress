import React from "react";
import Style from "./style.module.scss";
import { BsGit, BsLinkedin } from "react-icons/bs";
import { BsGitHub } from  "react-icons/bs";


export const Footer = (darkMode) => {


    return (
        <>
         <footer>
            <section>
                <p className={`${Style.pText} ${darkMode ? Style["dark-mode"] : ''}`}>
                    Construindo um futuro brilhante, passo a passo, juntos. &copy; 2023 Igor Silva"
                    </p>
                    <button><BsLinkedin/></button>
                    <button><BsGitHub/></button>
            </section>
         </footer>
        </>
    );
};