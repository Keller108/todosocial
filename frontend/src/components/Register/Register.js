import React from "react";
import './Register.css';

function Register () {
    return (
        <div className="register">
            <div className="register-container">
                <h2 className="popup__title">
                    Регистрация
                </h2>
                <form className="form">
                    <label className="form__label">
                        Ваше имя
                        <input
                            type="text"
                            minLength="2"
                            maxLength="30"
                            required
                        />
                    </label>
                    <label className="form__label">
                        Ваша почта
                        <input
                            type="email"
                            maxLength="30"
                            required
                        />
                    </label>
                    <label className="form__label">
                        Пароль
                        <input
                            type="password"
                            maxLength="30"
                            required
                        />
                    </label>
                    <button
                        className="form__submit-btn"
                    >
                        Зарегистрироваться
                    </button>
                </form>
            </div>
        </div>
    )
};

export default Register;