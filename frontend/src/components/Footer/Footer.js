import react from 'react';
import './Footer.css';

function Footer () {
    return (
        <footer className="footer">
            <div className="footer__container">
                <p className="footer__author">
                    Проект Никиты Исаева. 2021
                </p>
                <a href="https://github.com/Keller108" className="footer__link transparent-link">
                    GitHub
                </a>
            </div>
        </footer>
    )
};

export default Footer;