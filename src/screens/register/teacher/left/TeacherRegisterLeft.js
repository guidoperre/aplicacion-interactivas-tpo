import React from "react";
import './TeacherRegisterLeft.css';
import {Logo} from "../../../../components/logo/Logo";
import {TextInput} from "../../../../components/input/single/TextInput";

export function TeacherRegisterLeft() {
    return (
        <div className="TeacherRegisterLeft">
            <div className="Logo_Container">
                <Logo image="institular_logo" color="#6c8ed0"/>
            </div>
            <div className="TeacherRegister_Container">
                <p className="TeacherRegister_Title">Crea tu cuenta de profesor 😋</p>
                <p className="TeacherRegister_Subtitle">Si ya tenes cuenta, podes <a className="TeacherRegister_Login" href="/login">iniciar sesión aquí</a></p>
                <div className="TeacherRegister_Input_Container">
                    <TextInput title="Titulo" type="text" placeholder="Repartidor de pizzas"/>
                    <label className="TeacherRegister_Label">
                        <p className="TeacherRegister_Label_Title">Experiencia</p>
                        <textarea
                            className="TeacherRegister_TextArea"
                            placeholder="Hace 5 años trabajo como repartidor en..."/>
                    </label>
                </div>
                <div className="TeacherRegister_Button">
                    <p className="TeacherRegister_Button_Text">Crear cuenta</p>
                </div>
            </div>
            <p className="Copyright_Text">2022 Institular ®. Reservados todos los derechos.</p>
        </div>
    )
}
