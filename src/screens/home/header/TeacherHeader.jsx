import React from "react";
import './TeacherHeader.css';
import {Logo} from "../../../components/logo/Logo";

export function TeacherHeader() {
    const onLogoutClicked = () => {
        window.location.href='/login'
    };

    return (
        <header className="Teacher_Header">
            <Logo image={'institular_logo'} color={'#6c8ed0'} />
            <div className="Logout" onClick={onLogoutClicked}>
                <p className="Logout_Text">CERRAR SESIÓN</p>
            </div>
        </header>
    );
}
