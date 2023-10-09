import logo from '../../assets/LogoLight.svg'

export const Header = () => {

    return (
       <>
        <header className='Header'>
           <img 
           className='HeaderLogo' 
           src={logo} 
           alt="header logo" 
           />
        </header>
      </>
  )

};