import React, { Component } from "react";
import withIncrement from './withIncrement';

const HoverBanner = ({message}) => {
    return (
        <h3>{message}</h3>
    )
}

HoverBanner.defaultProps = {
    message: "Hovered"
}

export default withIncrement(HoverBanner);


