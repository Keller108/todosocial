import React from "react";
import './Register.css';
import Form from '../Form/Form';

function Register () {

    return (
        <div className="register">
            <Form 
                title='Регистрация'
                linkText='Уже зарегистрированы?'
                btnText='Войти'
                register={true}
            />
        </div>
    )
};

export default Register;