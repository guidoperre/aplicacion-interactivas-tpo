import React from "react";
import './StudentRegisterLeft.css';
import {Logo} from "../../../../components/logo/Logo";
import mock from "../../../../components/data/studies/studies.json";
import Select from "react-select";
import {TextInput} from "../../../../components/input/single/TextInput";

export function StudentRegisterLeft() {
    const onRegisterClicked = () => {
        window.location.href='/login'
    }

    return (
        <div className="StudentRegisterLeft">
            <div className="Logo_Container">
                <Logo image="institular_logo" color="#6c8ed0"/>
            </div>
            <div className="StudentRegister_Container">
                <p className="StudentRegister_Title">Crea tu cuenta de estudiante 😋</p>
                <p className="StudentRegister_Subtitle">Si ya tenes cuenta, podes <a className="StudentRegister_Login" href="/login">iniciar sesión aquí</a></p>
                <div className="StudentRegister_Input_Container">
                    <TextInput title="Fecha de nacimiento" type="date"/>
                    <div className="StudentRegister_Studies_Container">
                        <p className="StudentRegister_Studies_Label">Primaria</p>
                        <p className="StudentRegister_Studies_Label">Secundaria</p>
                        <Select className="StudentRegister_Studies" options={mock.estudios} />
                        <Select className="StudentRegister_Studies" options={mock.estudios} />
                        <p className="StudentRegister_Studies_Label">Terciaria</p>
                        <p className="StudentRegister_Studies_Label">Universitaria</p>
                        <Select className="StudentRegister_Studies" options={mock.estudios} />
                        <Select className="StudentRegister_Studies" options={mock.estudios} />
                    </div>
                </div>
                <div className="StudentRegister_Button" onClick={onRegisterClicked}>
                    <p className="StudentRegister_Button_Text">Crear cuenta</p>
                </div>
            </div>
            <p className="Copyright_Text">2022 Institular ®. Reservados todos los derechos.</p>
        </div>
    )
}