import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <p className="header__logo">
                ToDo - Social
            </p>
            <ul className="header__auth-container">
                <li className="header__auth-container-item">
                    <p className="header__auth-container-greetings">
                        Привет, Никита!
                    </p>
                </li>
                <li className="header__auth-container-item transparent-link">
                    <button className="header__auth-container-logout">
                        Выйти
                    </button>
                </li>
            </ul>
        </header>
    )
}

export default Header;