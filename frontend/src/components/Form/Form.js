import React from "react";
import { Link } from 'react-router-dom';
import './Form.css';

function Form ({title, linkText, btnText, register}) {
    return (
        <div className="form-container">
                <h2 className="popup__title">
                    {title}
                </h2>
                <form className="form">
                    <label className={ register ? `form__label form__label` : `form__label form__label form__label form__label_hiden`}>
                        Ваше имя
                        <input
                            className="form__input"
                            type="text"
                            minLength="2"
                            maxLength="30"
                            required
                        />
                    </label>
                    <label className="form__label">
                        Ваша почта
                        <input
                            className="form__input"
                            type="email"
                            maxLength="30"
                            required
                        />
                    </label>
                    <label className="form__label">
                        Пароль
                        <input
                            className="form__input"
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
                <p className="form__text">
                    {linkText}
                </p>
                {
                    register ? 
                        <Link className="form__goto-link" to="/signin">
                            {btnText}
                        </Link> 
                        : 
                        <Link className="form__goto-link" to="/signup">
                            {btnText}
                        </Link>
                }
            </div>
    )
};

export default Form;