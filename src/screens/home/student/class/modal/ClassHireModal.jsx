import * as React from 'react';
import './ClassHireModal.css';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import {TextInput} from "../../../../../components/input/single/TextInput";
import DialogActions from "@mui/material/DialogActions";
import {useSelector} from "react-redux";
import {toast} from "react-toastify";
import {useLocation, useNavigate} from "react-router-dom";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function ClassHireDialog(props) {
    const location = useLocation();
    const userAuth = useSelector((state) => state.userAuth);
    const navigation = useNavigate();
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [contact, setContact] = React.useState("");
    const [comment, setComment] = React.useState("");

    const onHireClicked = () => {
        try {
            hireClass(
                userAuth.token,
                {
                    classKey: location.state.key,
                    profesorKey: props.profesorKey,
                    nombre: props.materia,
                    alumno: name,
                    email: email,
                    telefono: phone,
                    horaContacto: contact,
                    comentario: comment
                }
            ).then(r => {
                if(r.status !== 201) {
                    toast.error('No pudimos contratar la clase (' + r.status + ')' , {
                        position: toast.POSITION.BOTTOM_LEFT
                    });
                } else {
                    props.handleClose()
                }
            })
        } catch (error) {
            console.log(error);
        } finally {
            navigation('/home/student/classes')
        }
    };

    return (
        <BootstrapDialog
            onClose={props.handleClose}
            aria-labelledby="customized-dialog-title"
            open={props.open}>
            <DialogTitle sx={{ marginTop: 2, marginLeft: 4, p: 0 }}>
                <p className="Modal_Title">Clase</p>
            </DialogTitle>
            <DialogContent>
                <div className="Hire_Dialog_Content">
                    <div className="Contact_Dialog_Content">
                        <TextInput
                            title="Nombre"
                            type="text"
                            placeholder={"Su nombre aqui"}
                            text={name}
                            onTextChange={(e) => setName(e.target.value)}/>
                        <TextInput
                            title="Email"
                            type="text"
                            placeholder={"Su email aqui"}
                            text={email}
                            onTextChange={(e) => setEmail(e.target.value)}/>
                        <TextInput
                            title="Telefono"
                            type="text"
                            placeholder={"Su numero aqui"}
                            text={phone}
                            onTextChange={(e) => setPhone(e.target.value)}/>
                        <TextInput
                            title="Hora de contacto"
                            type="text"
                            placeholder={"La hora de contacto aqui"}
                            text={contact}
                            onTextChange={(e) => setContact(e.target.value)}/>
                        <label className="Contact_Dialog_Label">
                            <p className="Contact_Dialog_Label_Title">Mensaje</p>
                            <textarea
                                className="Contact_Dialog_TextArea"
                                placeholder="Un mensaje que quiera que lea el profesor."
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}/>
                        </label>
                    </div>
                </div>
            </DialogContent>
            <DialogActions>
                <div className="Modal_Button" onClick={onHireClicked}>
                    <p className="Modal_Button_Text">Contatar</p>
                </div>
            </DialogActions>
        </BootstrapDialog>
    );
}

async function hireClass(token, course) {
    console.log(course)
    const response = await fetch(`http://localhost:4000/hiring/create`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'x-access-token': token},
        body: JSON.stringify(course)
    })
    return {status: response.status, content: await response.json()};
}
