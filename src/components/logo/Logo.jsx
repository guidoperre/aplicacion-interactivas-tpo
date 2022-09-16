import React from "react";
import './Logo.css';

export function Logo(props) {
    return (
        <div className="Logo">
            <img className="Logo_Image"
                 src={process.env.PUBLIC_URL + '/logo/' + props.image + '.png'}
                 alt="logo" />
            <p className="Logo_Name" style={{ color:props.color }}>Institular</p>
        </div>
    )
}
