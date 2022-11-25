import React, {useState} from "react";
import './TeacherRegisterLeft.css';
import {Logo} from "../../../../components/logo/Logo";
import {TextInput} from "../../../../components/input/single/TextInput";
import {useLocation, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

export function TeacherRegisterLeft() {
    const location = useLocation();
    const navigate = useNavigate()
    const [title, setTitle] = useState()
    const [experience, setExperience] = useState()

    const onTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const onExperienceChange = (e) => {
        setExperience(e.target.value)
    }
    const onRegisterClicked = () => {
        register(
            {
                name: location.state.name,
                email: location.state.email,
                phone: location.state.phone,
                password: location.state.password,
                title: title,
                experience: experience
            }
        ).then(r => {
            if(r.status !== 201) {
                toast.error(r.content.message, {
                    position: toast.POSITION.BOTTOM_LEFT
                });
            } else {
                navigate('/login', {state: {register_success: true}})
            }
        })
    }

    return (
        <div className="TeacherRegisterLeft">
            <div className="Logo_Container">
                <Logo image="institular_logo" color="#6c8ed0"/>
            </div>
            <div className="TeacherRegister_Container">
                <p className="TeacherRegister_Title">Crea tu cuenta de profesor 😋</p>
                <p className="TeacherRegister_Subtitle">Si ya tenes cuenta, podes <a className="TeacherRegister_Login" href="/login">iniciar sesión aquí</a></p>
                <div className="TeacherRegister_Input_Container">
                    <TextInput
                        title="Titulo"
                        type="text"
                        placeholder="Repartidor de pizzas"
                        value={title}
                        onTextChange={onTitleChange}/>
                    <label className="TeacherRegister_Label">
                        <p className="TeacherRegister_Label_Title">Experiencia</p>
                        <textarea
                            className="TeacherRegister_TextArea"
                            placeholder="Hace 5 años trabajo como repartidor en..."
                            value={experience}
                            onChange={onExperienceChange}/>
                    </label>
                </div>
                <div className="TeacherRegister_Button" onClick={onRegisterClicked}>
                    <p className="TeacherRegister_Button_Text">Crear cuenta</p>
                </div>
            </div>
            <p className="Copyright_Text">2022 Institular ®. Reservados todos los derechos.</p>
        </div>
    )
}

async function register(data) {
    const response = await fetch(`http://localhost:4000/teacher/registration`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    return {status: response.status, content: await response.json()};
}
