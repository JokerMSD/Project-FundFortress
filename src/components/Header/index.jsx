import logo from '../../assets/LogoLight.svg';
import Style from './style.module.scss';

export const Header = () => {

    return (
       <>
        <header className={Style.Header}>
           <img 
           className={Style.HeaderLogo} 
           src={logo} 
           alt="header logo" 
           />
        </header>
      </>
  )

};