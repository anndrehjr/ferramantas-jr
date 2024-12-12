import React, { useEffect } from "react";
import feather from "feather-icons";
import "../styles/Footer.css";

const Footer = () => {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        <a
          href="https://www.linkedin.com/in/anndreh-aguiar/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <i data-feather="linkedin"></i>
        </a>
        <a
          href="https://github.com/anndrehjr"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <i data-feather="github"></i>
        </a>
        <a
          href="https://portifolio-andre-junior.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          title="Portfólio"
        >
          <i data-feather="external-link"></i>
        </a>
      </div>
      <div className="footer-text">
        <p>&copy; 2024 André Junior. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
