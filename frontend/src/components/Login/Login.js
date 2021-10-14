import React from "react";
import Form from '../Form/Form';

function Login () {
    return (
        <div className="register">
            <Form 
                title='Войти'
                linkText='Еще не зарегистрированы?'
                btnText='Регистрация'
                register={false}
            />
        </div>
    )
};

export default Login;