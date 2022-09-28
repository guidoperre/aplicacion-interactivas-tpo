import React from "react";
import './LoginLeft.css';
import {Logo} from "../../../components/logo/Logo";
import {TextInput} from "../../../components/input/single/TextInput";

export function LoginLeft() {
    return (
        <div className="LoginLeft">
            <div className="Logo_Container">
                <Logo image="institular_logo" color="#6c8ed0"/>
            </div>
            <div className="Login_Container">
                <p className="Login_Title">Iniciar sesión ✌</p>
                <p className="Login_Subtitle">Si queres crearte una cuenta con email, podes <a className="Login_Register" href="/register">registrarte aquí</a></p>
                <div className="Login_Input_Container">
                    <TextInput title="Email" type="email" placeholder="alumno@gmail.com"/>
                    <TextInput title="Contraseña" type="password" placeholder="Secreta1234"/>
                </div>
<<<<<<< HEAD
                <p className="Login_Forgot_Password">¿Olvidó su contraseña?</p>
                <div className="Login_Button" href="/finder">
                    <p className="Login_Button_Text" >Iniciar sesión</p>
=======
                <a className="Login_Forgot_Password" href="/forgotpassword">¿Olvidó su contraseña?</a>
                <div className="Login_Button">
                    <p className="Login_Button_Text">Iniciar sesión</p>
>>>>>>> 79263d66d5a6693f7aa5c8355c278158a163d598
                </div>
            </div>
            <p className="Copyright_Text">2022 Institular ®. Reservados todos los derechos.</p>
        </div>
    )
}
