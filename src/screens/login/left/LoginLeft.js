import React, {useEffect, useState} from "react";
import './LoginLeft.css';
import { Logo } from "../../../components/logo/Logo";
import { TextInput } from "../../../components/input/single/TextInput";
import {toast} from "react-toastify";
import {useLocation, useNavigate} from "react-router-dom";
import {setToken} from "../../../auth/userAuthSlice.ts";
import {useDispatch} from "react-redux";

export function LoginLeft() {
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        try {
            if (location.state.register_success) {
                toast.success("¡Se registro correctamente!", {
                    position: toast.POSITION.BOTTOM_LEFT
                });
            }
        } catch (e) {
            // no-op
        }
    }, [location.state]);

    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const onLoginClicked = () => {
        login(email, password).then(r => {
            console.log(r)
            if(r.status !== 201) {
                toast.error(r.message, {
                    position: toast.POSITION.BOTTOM_LEFT
                });
            } else {
                dispatch(setToken(r.content.loginUser.token));
                if (r.content.loginUser.user.type === "teacher") {
                    navigator('/home/teacher/classes')
                } else {
                    navigator('/home/student/search')
                }
            }
        })
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
                    <TextInput
                        title="Email"
                        type="email"
                        placeholder="alumno@gmail.com"
                        value = {email}
                        onTextChange={onEmailChange}/>
                    <TextInput
                        title="Contraseña"
                        type="password"
                        placeholder="Secreta1234"
                        value = {password}
                        onTextChange={onPasswordChange}/>
                </div>
                <a className="Login_Forgot_Password" href="/forgotpassword">¿Olvidó su contraseña?</a>
                <div className="Login_Button" onClick={onLoginClicked}>
                    <p className="Login_Button_Text">Iniciar sesión</p>
                </div>
            </div>
            <p className="Copyright_Text">2022 Institular ®. Reservados todos los derechos.</p>
        </div>
    )
}

async function login(email, password) {
    const response = await fetch(`http://localhost:4000/users/login/`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email: email, password: password})
    })
    return {status: response.status, content: await response.json()};
}
