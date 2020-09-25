import React, { Component } from "react";
import withIncrement from './withIncrement';

const Button = ({message, increment, count}) => {
    return (
        <button onClick={increment}>{message} {count}</button>
    )
}

Button.defaultProps = {
    message: "simpleButton"
}

export default withIncrement(Button);