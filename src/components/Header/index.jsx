import logo from '../../assets/LogoLight.svg'

export const Header = () => {

    return (
       <>
        <header className='Header'>
           <img src={logo} alt="header logo" className='HeaderLogo' />
        </header>
      </>
  )

}