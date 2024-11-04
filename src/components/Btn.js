import React from 'react';  


function Button(props) {

    const {text, fc} = props;

    return (
        <button type='button' onClick={fc}>{text}</button>
    )   
}

export default Button;