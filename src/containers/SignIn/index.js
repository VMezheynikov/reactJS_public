import React, { useState } from 'react';
import './SignIn.css';
import { FaSignInAlt } from 'react-icons/fa';
import TextInputField from '../../сomponents/CardList/Card/TextInputField';

const SingIn = (props) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const signInHandler = () => {
        if (!(login === null || login.length == 0)) {
            props.history.replace('/home');
        }
    };

    const loginChangeHandler = (event) => {
        setLogin(event.target.value);
    };

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    };

    return (
        <div>
            <TextInputField
                id="LoginField"
                caption="Login"
                changed={loginChangeHandler}
                currentText={login}></TextInputField>
            <TextInputField
                id="PasswordField"
                caption="Password"
                changed={passwordChangeHandler}
                currentText={password}></TextInputField>
            <label>
                <button className="btn" onClick={signInHandler}>
                    <FaSignInAlt />
                </button>
                <b>Sing In</b>
            </label>
        </div>
    );
};

export default SingIn;
