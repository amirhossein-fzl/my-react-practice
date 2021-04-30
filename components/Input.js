import React, { useState } from 'react';

const Input = (props) => {
    const [isError, setIsError] = useState(false);
    let type = props.type;
    let placeholder = props.placeholder;
    let message = props.message;

    let email_regex = /^[a-zA-Z0-9]{3,}@[a-zA-Z0-9]{3,}\.[a-zA-Z]{2,4}/i;
    let phone_regex = /^09[0-9]{9}/i;

    const validate = (e) => {
        let value = e.target.value;
        if (type === "email") {
            setIsError(!email_regex.test(value));
        } else if (type === "phone") {
            setIsError(!phone_regex.test(value));
        }
    };

    return (
        <div className={props.className}>
            <input type="text" className={"form-control form-control-sm" + (isError ? " is-invalid" : '')} onBlur={ validate } placeholder={ placeholder } />
            { isError ? <span className="form-text text-danger mt-2">{ message }</span> : null }
        </div>
    )
}

export default Input;
