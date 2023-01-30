import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import hamburger from '../assets/hamburger.png';

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
          <img src={logo} alt="logo Clínica Copacabana" />
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
          <Link to="https://www.facebook.com/clinicacopacabana" className='facebook'>
            <img src={facebook} alt="facebook icon" />
          </Link>
          <Link to="https://instagram.com/clinicacopacabanabolivia?igshid=YmMyMTA2M2Y=" className='instagram'>
            <img src={instagram} alt="instagram icon" />
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
