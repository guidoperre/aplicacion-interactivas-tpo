import React, {useState} from "react";
import './RegisterLeft.css';
import {Logo} from "../../../../components/logo/Logo";
import {TextInput} from "../../../../components/input/single/TextInput";

export function RegisterLeft() {
    return (
        <div className="RegisterLeft">
            <div className="Logo_Container">
                <Logo image="institular_logo" color="#6c8ed0"/>
            </div>
            <div className="Register_Container">
                <p className="Register_Title">Crea tu cuenta 😋</p>
                <p className="Register_Subtitle">Si ya tenes cuenta, podes <a className="Register_Login" href="/login">iniciar sesión aquí</a></p>
                <div className="Register_Input_Container">
                    <UserTypeSelector/>
                    <TextInput title="Nombre completo" type="text" placeholder="Juan Perez"/>
                    <TextInput title="Email" type="email" placeholder="alumno@gmail.com"/>
                    <TextInput title="Telefono" type="number" placeholder="1123456789"/>
                    <TextInput title="Contraseña" type="password" placeholder="Secreta1234"/>
                </div>
                <div className="Register_Button">
                    <p className="Register_Button_Text">Crear cuenta</p>
                </div>
            </div>
            <p className="Copyright_Text">2022 Institular ®. Reservados todos los derechos.</p>
        </div>
    )
}

function UserTypeSelector() {
    const [checked, setChecked] = useState("alumno")

    const onCheckboxClicked = (e) => {
        console.log(e.target.id)
        if (checked !== e.target.name) {
            setChecked(e.target.name)
        }
    }

    return (
        <div className="Register_User_Type_Container">
            <p className="Register_User_Type_Title">¿Sos alumno o profesor?</p>
            <div className="Register_Checkbox_Container">
                <label className="Register_Checkbox_Label">
                    <input
                        type="checkbox"
                        className="Register_Checkbox"
                        name="alumno"
                        checked={checked === "alumno"}
                        onChange={onCheckboxClicked}/>
                    <p className="Register_Checkbox_Label_Text">Alumno</p>
                </label>
                <label className="Register_Checkbox_Label">
                    <input
                        type="checkbox"
                        className="Register_Checkbox"
                        name="profesor"
                        checked={checked === "profesor"}
                        onChange={onCheckboxClicked}/>
                    <p className="Register_Checkbox_Label_Text">Profesor</p>
                </label>
            </div>
        </div>
    )
}
