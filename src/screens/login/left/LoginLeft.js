import React from "react";
import './LoginLeft.css';
import { Logo } from "../../../components/logo/Logo";
import { useNavigate } from "react-router-dom";
import { TextInput } from "../../../components/input/single/TextInput";

export function LoginLeft() {
    const onLoginClicked = () => {
        window.location.href='/home/teacher/classes'
    };

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
                <a className="Login_Forgot_Password" href="/forgotpassword">¿Olvidó su contraseña?</a>
                <div className="Login_Button">
                <button type="button" class="btn btn-secondary col-md-12" onClick={onLoginClicked}>Iniciar Sesión</button>
                </div>
            </div>
            <p className="Copyright_Text">2022 Institular ®. Reservados todos los derechos.</p>
        </div>
    )
}
