import React from "react";
import './ForgotLeft.css';
import {Logo} from "../../../components/logo/Logo";
import {TextInput} from "../../../components/input/single/TextInput";

export function ForgotLeft() {
    return (
        <div className="ForgotLeft">
            <div className="Logo_Container">
                <Logo image="institular_logo" color="#6c8ed0"/>
            </div>
            <div className="Forgot_Container">
                <p className="Forgot_Title">Recupera tu clave 😵</p>
                <p className="Forgot_Subtitle">Si recordaste tu clave, podes <a className="Forgot_Login" href="/login">iniciar sesión aquí</a></p>
                <div className="Forgot_Input_Container">
                    <TextInput title="Email" type="email" placeholder="alumno@gmail.com"/>
                </div>
                <div className="Forgot_Button">
                    <p className="Forgot_Button_Text">Recuperar clave</p>
                </div>
            </div>
            <p className="Copyright_Text">2022 Institular ®. Reservados todos los derechos.</p>
        </div>
    )
}
