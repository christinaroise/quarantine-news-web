import React from 'react'
import './Button.css'

const Button = (props) => {
    return(
        <div className="buttonContainer">
            <a 
            href={props.href}
            target="_blank">
                <button 
                className="button"
                onClick={props.onclick}>{props.text}</button>
            </a>
        </div>
    )
}

export default Button