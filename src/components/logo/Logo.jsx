import React from "react";
import './Logo.css';

export function Logo(props) {
    const onLogoClicked = () => {
        window.location.href='/'
    };

    return (
        <div className="Logo" onClick={onLogoClicked}>
            <img className="Logo_Image"
                 src={process.env.PUBLIC_URL + '/logo/' + props.image + '.png'}
                 alt="logo" />
            <p className="Logo_Name" style={{ color:props.color }}>Institular</p>
        </div>
    )
}
