import React from "react";
import './RegisterLeft.css';
import {Logo} from "../../../components/logo/Logo";
import {TextInput} from "../../../components/input/single/TextInput";

export function RegisterLeft() {
    return (
        <div className="RegisterLeft">
            <div className="Logo_Container">
                <Logo image="institular_logo" color="#6c8ed0"/>
            </div>
            <div className="Register_Container">
                <p className="Register_Title">Crea tu cuenta ✌</p>
                <p className="Register_Subtitle">Si ya tenes cuenta, podes iniciar sesión aquí</p>
                <div className="Register_Input_Container">
                    <TextInput title="Email" type="email" placeholder="alumno@gmail.com"/>
                    <TextInput title="Contraseña" type="password" placeholder="Secreta1234"/>
                </div>
                <p className="Register_Forgot_Password">¿Olvidó su contraseña?</p>
                <div className="Register_Button">
                    <p className="Register_Button_Text">Iniciar sesión</p>
                </div>
            </div>
            <p className="Copyright_Text">2022 Institular ®. Reservados todos los derechos.</p>
        </div>
    )
}
