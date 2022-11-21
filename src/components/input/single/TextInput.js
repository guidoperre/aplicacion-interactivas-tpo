import React from "react";
import './TextInput.css';

export function TextInput(props) {
    return (
        <div className="TextInput">
            <p className="TextInput_Title">{props.title}</p>
            <input
                className="TextInput_Text"
                type={props.type}
                placeholder={props.placeholder}
                value={props.text}
                onChange={props.onTextChange}/>
        </div>
    )
}
