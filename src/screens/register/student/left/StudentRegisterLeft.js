import React, {useState} from "react";
import './StudentRegisterLeft.css';
import {Logo} from "../../../../components/logo/Logo";
import mock from "../../../../components/data/studies/studies.json";
import Select from "react-select";
import {TextInput} from "../../../../components/input/single/TextInput";
import {useLocation, useNavigate} from 'react-router-dom';
import {toast} from "react-toastify";

export function StudentRegisterLeft() {
    const location = useLocation();
    const navigate = useNavigate()
    const [date, setDate] = useState("")
    const [primary, setPrimary] = useState()
    const [secondary, setSecondary] = useState()
    const [associate, setAssociate] = useState()
    const [bachelor, setBachelor] = useState()

    const onDateChange = (e) => {
        setDate(e.target.value)
    }

    const onPrimaryChange = (e) => {
        setPrimary(e)
    }

    const onSecondaryChange = (e) => {
        setSecondary(e)
    }

    const onAssociateChange = (e) => {
        setAssociate(e)
    }

    const onBachelorChange = (e) => {
        setBachelor(e)
    }

    const onRegisterClicked = () => {
        register(
            {
                name: location.state.name,
                email: location.state.email,
                phone: location.state.phone,
                password: location.state.password,
                date: date,
                primary: primary,
                secondary: secondary,
                associate: associate,
                bachelor: bachelor
            }
        ).then(r => {
            if(r.status === undefined || r.status !== 200) {
                toast.error(r.message, {
                    position: toast.POSITION.BOTTOM_LEFT
                });
            } else {
                navigate('/login', {state: {register_success: true}})
            }
        })
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
                    <TextInput
                        title="Fecha de nacimiento"
                        type="date"
                        value = {date}
                        onTextChange={onDateChange}
                    />
                    <div className="StudentRegister_Studies_Container">
                        <p className="StudentRegister_Studies_Label">Primaria</p>
                        <p className="StudentRegister_Studies_Label">Secundaria</p>
                        <Select
                            className="StudentRegister_Studies"
                            options={mock.estudios}
                            onChange={onPrimaryChange}
                        />
                        <Select
                            className="StudentRegister_Studies"
                            options={mock.estudios}
                            onChange={onSecondaryChange}
                        />
                        <p className="StudentRegister_Studies_Label">Terciaria</p>
                        <p className="StudentRegister_Studies_Label">Universitaria</p>
                        <Select
                            className="StudentRegister_Studies"
                            options={mock.estudios}
                            onChange={onAssociateChange}
                        />
                        <Select
                            className="StudentRegister_Studies"
                            options={mock.estudios}
                            onChange={onBachelorChange}
                        />
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

async function register(data) {
    const response = await fetch(`http://localhost:4000/users/registration`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    return await response.json();
}

