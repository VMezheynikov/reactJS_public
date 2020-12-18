import React from 'react';
import classes from './Input.css';

const Input = (props) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];
    let validationError = null;

    if (props.invalid && props.touched) {
        inputClasses.push(classes.Invalid);
        validationError = (
            <p className={classes.ValidationError}>{props.errorMessage}</p>
        );
    }

    switch (props.inputtype) {
        case 'email':
            inputElement = (
                <input
                    type="email"
                    className={inputClasses.join(' ')}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                />
            );
            break;
        case 'password':
            inputElement = (
                <input
                    type="password"
                    className={inputClasses.join(' ')}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                />
            );
            break;
        default:
            inputElement = (
                <input
                    className={inputClasses.join(' ')}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                />
            );
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
            {validationError}{' '}
        </div>
    );
};

export default Input;
