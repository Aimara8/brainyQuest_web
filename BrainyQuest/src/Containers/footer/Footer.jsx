import React from 'react';
import './footer.css';
import logo from '../../assets/logo.png';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='footer section__padding'>
      <div className="footer-links">
        <div className="footer-links_logo">
          <img src={logo} alt="logo" />
          <p>BrainyQuest HQ, 1234 Calle del Aprendizaje <br /> Todos los derechos reservados</p>
        </div>
        <div className="footer-links_div">
          <h4>Empresa</h4>
          <p>Sobre Nosotros</p>
          <p>Términos y Condiciones</p>
          <p>Política de Privacidad</p>
          <p>Contacto</p>
        </div>
        <div className="footer-links_div">
          <h4>Contáctanos</h4>
          <p>BrainyQuest HQ, 1234 Calle del Aprendizaje</p>
          <p>+123 456 7890</p>
          <p>soport@brainyquest.com</p>
        </div>
      </div>

      <div className="footer-social">
        <a href="https://facebook.com/brainyquest" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="footer-social_icon" />
        </a>
        <a href="https://twitter.com/brainyquest" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="footer-social_icon" />
        </a>
        <a href="https://instagram.com/brainyquest" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="footer-social_icon" />
        </a>
      </div>

      <div className="footer-copyright">
        <p>© {currentYear} BrainyQuest. Todos los derechos reservados.</p>
      </div>
    </div>
  );
};

export default Footer;