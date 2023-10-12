import React from "react";
import Style from "./style.module.scss";
import { BsGithub, BsLinkedin} from "react-icons/bs";
import logo from "../../assets/LogoLight.svg";
import logoDark from "../../assets/LogoDark.svg";




export const Footer = ({darkMode}) => {


    return (
        <>
         <footer className={`${Style.footer} ${darkMode ? Style["dark-mode"] : ''}`}>
            <section>
                <div className={Style.divTextFooter}>
                <p className={`${Style.pText} ${darkMode ? Style["dark-mode"] : ''}`}>
                    Obrigado por visitar meu site! Sou Igor Silva, um apaixonado estudante de programação. Cada linha de código aqui representa meu compromisso com a aprendizagem e a paixão pela tecnologia. Este projeto é uma parte do meu percurso e estou empolgado em compartilhá-lo com você. Se quiser continuar acompanhando meu progresso e descobrir mais sobre meu trabalho, conecte-se comigo no LinkedIn. Vamos crescer juntos na jornada da programação. 👨‍💻✨
                </p>
                <p className={`${Style.pText} ${darkMode ? Style["dark-mode"] : ''}`}>
                    Construindo um futuro brilhante, passo a passo, juntos. &copy; 2023 Igor Silva
                </p>
                </div>
                <div className={Style.divButtonFooter}>
                    <button 
                       onClick={() => window.open("https://www.linkedin.com/in/igor-silvaas/", "_blank")}
                       className={`${Style.buttonF} ${darkMode ? Style["dark-mode-button"] : ''}`}
                    >
                      <BsLinkedin className={Style.linkedin}/>
                    </button> 
                    <button 
                       className={`${Style.buttonGit} ${darkMode ? Style["dark-mode-button"] : ''}`}
                    >
                      <BsGithub className={Style.git}/>
                    </button> 

                </div>
            </section>
         </footer>
        </>
    );
};