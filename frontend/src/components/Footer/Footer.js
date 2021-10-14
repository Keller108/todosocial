import react from 'react';
import './Footer.css';

function Footer () {
    return (
        <footer className="footer">
            <p className="footer__author">
                Пет-проект Никиты Исаева. 2021
            </p>
            <a href="https://github.com/Keller108" className="footer__link">
                GitHub
            </a>
        </footer>
    )
};

export default Footer;