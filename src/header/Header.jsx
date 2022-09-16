import React from "react";
import './Header.css';
import {onLoginClicked} from "./HeaderNavigation";
import {useScrollPosition} from "../states/ScrollState";
import {Logo} from "../commons/logo/Logo";

export function Header() {
    const scrollPosition = useScrollPosition()
    let backgroundColor
    let logoImage
    let logoColor
    let loginBorder
    let boxShadow

    if (scrollPosition > 80) {
        backgroundColor = '#FFFFFF'
        logoImage = 'instituto_logo_red'
        logoColor = '#FF5757'
        loginBorder = '0px'
        boxShadow = '0 3px 6px rgba(51, 51, 51, 0.2)'
    } else {
        backgroundColor = '#FF5757'
        logoImage = 'instituto_logo'
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
