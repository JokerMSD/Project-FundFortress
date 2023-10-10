import Toggle from 'react-toggle';
import { MdNightlight } from 'react-icons/md';
import { BsFillSunFill } from 'react-icons/bs';
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
           <label>
            <Toggle
            defaultChecked={this}
            icons={{
               checked: <MdNightlight/>,
               unchecked: <BsFillSunFill/>,
            }}
            onChange={this}/>
           </label>
        </header>
      </>
  )

};