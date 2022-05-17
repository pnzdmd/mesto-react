import Logo from '../images/Logo.png';
const Header = () => {
  return (
    <header className='header'>
      <img className='header__logo' src={Logo} alt='Логотип' />
    </header>
  );
};

export default Header;
