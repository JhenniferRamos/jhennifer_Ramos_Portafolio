import React from 'react';
import './styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram, faWhatsapp, faGithub } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer className="footer">
        
        <div className="social-icons">
    <a href="https://twitter.com/Mayerly_Ramos03?t=qfuO3OhCFArltNnIhzn9AQ&s=08" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faTwitter} />
    </a>
    <a href="https://www.facebook.com/danajhennifer.ramostinca" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faFacebook} />
    </a>
    <a href="https://www.instagram.com/mayerly_72?igshid=ZDdkNTZiNTM=" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faInstagram} />
    </a>
    <a href="https://api.whatsapp.com/send?phone=%2B59178720656&text=habla+comigo" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faWhatsapp} />
    </a>
    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faGithub} />
    </a>
    
  </div>
  
  <p className='derechos'>Todos los derechos reservados © 2023</p>
    </footer>
  );
}