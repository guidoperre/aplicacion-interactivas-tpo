import React, {useState} from "react";
import './ForgotLeft.css';
import {Logo} from "../../../components/logo/Logo";
import {TextInput} from "../../../components/input/single/TextInput";
import {toast} from "react-toastify";

export function ForgotLeft() {
    const [email, setEmail] = useState("")

    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const onForgotClicked = () => {
        forgotPassword(email).then(r => {
            // TODO: Probar muestra de snackbars cuando se traiga respuesta
            if(r.status !== 200) {
                toast.error(r.message, {
                    position: toast.POSITION.BOTTOM_LEFT
                });
            } else {
                toast.success(r.message, {
                    position: toast.POSITION.BOTTOM_LEFT
                });
            }
        })
    };

    return (
        <div className="ForgotLeft">
            <div className="Logo_Container">
                <Logo image="institular_logo" color="#6c8ed0"/>
            </div>
            <div className="Forgot_Container">
                <p className="Forgot_Title">Recupera tu clave 😵</p>
                <p className="Forgot_Subtitle">Si recordaste tu clave, podes <a className="Forgot_Login" href="/login">iniciar sesión aquí</a></p>
                <div className="Forgot_Input_Container">
                    <TextInput
                        title="Email"
                        type="email"
                        placeholder="alumno@gmail.com"
                        value = {email}
                        onTextChange={onEmailChange}/>
                </div>
                <div className="Forgot_Button" onClick={onForgotClicked}>
                    <p className="Forgot_Button_Text">Recuperar clave</p>
                </div>
            </div>
            <p className="Copyright_Text">2022 Institular ®. Reservados todos los derechos.</p>
        </div>
    )
}

async function forgotPassword(email) {
    const response = await fetch(`http://localhost:4000/users/sendMail`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            destinatario: email,
            asunto: 'Recuperar contraseña',
        })
    })
    return await response.json();
}
