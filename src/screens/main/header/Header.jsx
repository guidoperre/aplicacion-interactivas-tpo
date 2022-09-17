import React from "react";
import './Header.css';
import {useScrollPosition} from "../../../utils/ScrollState";
import {Logo} from "../../../components/logo/Logo";

export function Header() {
    const onLoginClicked = () => {
        window.location.href='/login'
    };
    const scrollPosition = useScrollPosition()

    let backgroundColor
    let logoImage
    let logoColor
    let loginBorder
    let boxShadow

    if (scrollPosition > 80) {
        backgroundColor = '#FFFFFF'
        logoImage = 'institular_logo'
        logoColor = '#6c8ed0'
        loginBorder = '0px'
        boxShadow = '0 3px 6px rgba(51, 51, 51, 0.2)'
    } else {
        backgroundColor = '#6c8ed0'
        logoImage = 'institular_logo_white'
        logoColor = '#FFFFFF'
        loginBorder = '1px solid white'
        boxShadow = '0 0 0 rgba(0, 0, 0, 0.0)'
    }

    return (
        <header className="Header" style={{ backgroundColor: backgroundColor, boxShadow: boxShadow}}>
            <Logo image={logoImage} color={logoColor} />
            <div className="Login" onClick={onLoginClicked} style={{ border: loginBorder}}>
                <p className="Login_Text">INGRESAR</p>
            </div>
        </header>
    );
}
