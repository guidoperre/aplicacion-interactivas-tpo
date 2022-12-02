import React, {useState} from "react";
import './RecoverLeft.css';
import {Logo} from "../../../components/logo/Logo";
import {TextInput} from "../../../components/input/single/TextInput";
import {toast} from "react-toastify";
import {useNavigate, useSearchParams} from "react-router-dom";

export function RecoverLeft() {
    const navigate = useNavigate();
    const [password, setPassword] = useState("")
    const [searchParams, setSearchParams] = useSearchParams();
    const token = searchParams.get("token")

    const onPasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const onRecoverClicked = () => {
        recoverPassword(token, password).then(r => {
            if(r.status !== 200) {
                toast.error(r.message, {
                    position: toast.POSITION.BOTTOM_LEFT
                });
            } else {
                navigate('/login')
            }
        })
    };

    return (
        <div className="RecoverLeft">
            <div className="Logo_Container">
                <Logo image="institular_logo" color="#6c8ed0"/>
            </div>
            <div className="Recover_Container">
                <p className="Recover_Title">Cambiar contraseña 🙊</p>
                <p className="Recover_Subtitle">Si recordaste tu contraseña, podes <a className="Recover_Login" href="/login">iniciar sesión aquí</a></p>
                <div className="Recover_Input_Container">
                    <TextInput
                        title="Contraseña"
                        type="password"
                        placeholder="Nueva contraseña secreta"
                        value = {password}
                        onTextChange={onPasswordChange}/>
                </div>
                <div className="Recover_Button" onClick={onRecoverClicked}>
                    <p className="Recover_Button_Text">Cambiar contraseña</p>
                </div>
            </div>
            <p className="Copyright_Text">2022 Institular ®. Reservados todos los derechos.</p>
        </div>
    )
}

async function recoverPassword(token, password) {
    console.log(token)
    console.log(password)
    const response = await fetch(`http://localhost:4000/users/recoverPassword`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json', 'x-access-token': token},
        body: JSON.stringify({ password: password })
    })
    return await response.json();
}
