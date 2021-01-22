import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SignIn.css';
import { FaSignInAlt } from 'react-icons/fa';
import Input from '../../сomponents/UI/Input';
import { onLogin } from '../../store/actions';

class SingIn extends Component {
    state = {
        loginForm: {
            login: {
                elementType: 'email',
                elementConfig: { placeholder: 'Login' },
                value: '',
                validation: {
                    required: true,
                    email: true,
                },
                valid: false,
                touched: false,
                errorMessage: 'Please enter a valid email!',
            },
            password: {
                elementType: 'password',
                elementConfig: { placeholder: 'Password' },
                value: '',
                validation: {
                    required: true,
                    minLength: 8,
                    passwordRule: true,
                },
                valid: false,
                touched: false,
                errorMessage:
                    'Please enter a valid password! Password password must be at least 8 characters long and contain 1 number and 1 letter',
            },
        },
        formIsValid: false,
        loading: false,
    };

    validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    validatePassword(value) {
        return /\d/.test(value) && /[a-zA-Z]/.test(value);
    }

    checkValidity(value, rules) {
        let isValid = true;
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if (rules.email) {
            isValid = this.validateEmail(value.trim()) && isValid;
        }
        if (rules.minLength) {
            isValid = value.trim().length >= rules.minLength && isValid;
        }
        if (rules.passwordRule) {
            isValid = this.validatePassword(value.trim()) && isValid;
        }
        return isValid;
    }

    signInHandler = () => {
        const loginData = {};
        for (let element in this.state.loginForm) {
            loginData[element] = this.state.loginForm[element].value;
        }
        this.props.onLogin(loginData['login'], loginData['password']);
        this.props.history.replace('/home');
    };

    inputChangeHandler = (event, elementId) => {
        const updatedForm = { ...this.state.loginForm };
        const updatedField = { ...updatedForm[elementId] };
        updatedField.value = event.target.value;
        updatedField.touched = true;
        updatedField.valid = this.checkValidity(
            updatedField.value,
            updatedField.validation,
        );
        updatedForm[elementId] = updatedField;
        let formValid = true;
        for (let element in updatedForm) {
            formValid = updatedForm[element].valid && formValid;
        }
        this.setState({ loginForm: updatedForm, formIsValid: formValid });
    };

    render() {
        const formElementArr = [];

        for (let key in this.state.loginForm) {
            formElementArr.push({ id: key, config: this.state.loginForm[key] });
        }

        let form = (
            <form onSubmit={this.signInHandler}>
                {formElementArr.map((formElement) => (
                    <Input
                        key={formElement.id}
                        inputtype={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        touched={formElement.config.touched}
                        errorMessage={formElement.config.errorMessage}
                        changed={(event) =>
                            this.inputChangeHandler(event, formElement.id)
                        }></Input>
                ))}
                <label>
                    <button className="btn" disabled={!this.state.formIsValid}>
                        <FaSignInAlt />
                    </button>
                    <b>Sing In</b>
                </label>
            </form>
        );

        return <div>{form}</div>;
    }
}

const mapDispatchToProps = {
    onLogin,
};

export default connect(null, mapDispatchToProps)(SingIn);
