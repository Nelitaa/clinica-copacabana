import { Link } from 'react-router-dom';
import logo from '../assets/header-footer/logo.png';
import facebook from '../assets/header-footer/facebook.png';
import instagram from '../assets/header-footer/instagram.png';
import hamburger from '../assets/header-footer/hamburger.png';
import Logo from './Logo';
import FacebookInstagram from './FacebookInstagram';

const Header = () => {
  const links = [
    {
      id: 1,
      name: 'Inicio',
      path: '/',
    },
    {
      id: 2,
      name: 'Servicios',
      path: '/servicios',
    },
    {
      id: 3,
      name: 'Planes',
      path: '/planes',
    },
    {
      id: 4,
      name: 'Instalaciones',
      path: '/instalaciones',
    },
    {
      id: 5,
      name: 'Admisión',
      path: '/admision',
    },
    {
      id: 6,
      name: 'Contacto',
      path: '/contacto',
    },
  ];

  return (
    <header>
      <nav>
        <Link to="/" className='logo'>
          <Logo logo={logo} />
        </Link>
        <button type="button" className='hamburger'>
          <img src={hamburger} alt="menu icon" />
        </button>
        <ul className='list-links'>
          {links.map((link) => (
            <li key={link.id}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
          <li>
            <FacebookInstagram facebookIcon={facebook} instagramIcon={instagram} />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
