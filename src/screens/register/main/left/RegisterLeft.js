import React, {useState} from "react";
import './RegisterLeft.css';
import {Logo} from "../../../../components/logo/Logo";
import {TextInput} from "../../../../components/input/single/TextInput";
import { useNavigate } from "react-router-dom";

export function RegisterLeft() {
    const navigate = useNavigate()
    const [checked, setChecked] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")

    const onNameChange = (e) => {
        setName(e.target.value)
    }

    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const onPhoneChange = (e) => {
        setPhone(e.target.value)
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const onCheckboxClicked = (e) => {
        setChecked(e.target.name)
    }

    const onRegisterClicked = () => {
        let path
        switch (checked) {
            case "alumno":
                path = '/register/student'
                break
            case "profesor":
                path = '/register/teacher'
                break
        }
        navigate(path, {state: {name: name, email: email, phone: phone, password: password}})
    };

    return (
        <div className="RegisterLeft">
            <div className="Logo_Container">
                <Logo image="institular_logo" color="#6c8ed0"/>
            </div>
            <div className="Register_Container">
                <p className="Register_Title">Crea tu cuenta 😋</p>
                <p className="Register_Subtitle">Si ya tenes cuenta, podes <a className="Register_Login" href="/login">iniciar sesión aquí</a></p>
                <div className="Register_Input_Container">
                    <UserTypeSelector onChanged={event => onCheckboxClicked(event)}/>
                    <TextInput
                        title="Nombre completo"
                        type="text"
                        placeholder="Juan Perez"
                        value = {name}
                        onTextChange={onNameChange}/>
                    <TextInput
                        title="Email"
                        type="email"
                        placeholder="alumno@gmail.com"
                        value = {email}
                        onTextChange={onEmailChange}/>
                    <TextInput
                        title="Telefono"
                        type="number"
                        placeholder="1123456789"
                        value = {phone}
                        onTextChange={onPhoneChange}/>
                    <TextInput
                        title="Contraseña"
                        type="password"
                        placeholder="Secreta1234"
                        value = {password}
                        onTextChange={onPasswordChange}/>
                </div>
                <div className="Register_Button" onClick={onRegisterClicked}>
                    <p className="Register_Button_Text">Continuar</p>
                </div>
            </div>
            <p className="Copyright_Text">2022 Institular ®. Reservados todos los derechos.</p>
        </div>
    )
}

function UserTypeSelector(props) {
    const [checked, setChecked] = useState("")

    const onCheckboxClicked = (e) => {
        console.log(e.target.id)
        if (checked !== e.target.name) {
            setChecked(e.target.name)
        }
        props.onChanged(e)
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
