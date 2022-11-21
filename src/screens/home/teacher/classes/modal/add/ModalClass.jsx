import * as React from 'react';
import './ModalClass.css';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import {TextInput} from "../../../../../../components/input/single/TextInput";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import {useSelector} from "react-redux";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function ClassDialog(props) {
    const userAuth = useSelector((state) => state.userAuth);
    const [name, setName] = useState("")
    const [subject, setSubject] = useState("")
    const [duration, setDuration] = useState("")
    const [frequency, setFrequency] = useState("")
    const [price, setPrice] = useState("")

    const onAddClassClick = () => {
        try {
            addClass(userAuth.token, {
                name: name,
                subject: subject,
                duration: duration,
                frequency: frequency,
                price: price
            }).then(r => {
                if(r.status !== 201) {
                    toast.error('No pudimos agregar la clase (' + r.status + ')' , {
                        position: toast.POSITION.BOTTOM_LEFT
                    });
                } else {
                    window.location.reload()
                }
            })
        } catch (error) {
            console.log(error);
        } finally {
            props.handleClose()
        }
    };

    return (
        <BootstrapDialog
            onClose={props.handleClose}
            aria-labelledby="customized-dialog-title"
            open={props.open}>
            <DialogTitle sx={{ m: 2, p: 2 }}>
                <p className="Modal_Title">{props.title}</p>
            </DialogTitle>
            <DialogContent>
                <div className="Class_Dialog_Content">
                    <TextInput
                        title="Nombre"
                        type="text"
                        placeholder={"Nombre de la clase"}
                        value={name}
                        onTextChange={(e) => setName(e.target.value)}/>
                    <TextInput
                        title="Materia"
                        type="text"
                        placeholder={"Nombre de la materia"}
                        value={subject}
                        onTextChange={(e) => setSubject(e.target.value)}/>
                    <TextInput
                        title="Duracion en horas"
                        type="number"
                        placeholder={"40"}
                        value={duration}
                        onTextChange={(e) => setDuration(e.target.value)}/>
                    <TextInput
                        title="Frecuencia"
                        type="text"
                        placeholder={"Semanal"}
                        value={frequency}
                        onTextChange={(e) => setFrequency(e.target.value)}/>
                    <TextInput
                        title="Costo"
                        type="number"
                        placeholder={"100.00"}
                        value={price}
                        onTextChange={(e) => setPrice(e.target.value)}/>
                </div>
            </DialogContent>
            <DialogActions>
                <div className="Modal_Button" onClick={onAddClassClick}>
                    <p className="Modal_Button_Text">Guardar</p>
                </div>
            </DialogActions>
        </BootstrapDialog>
    );
}

async function addClass(token, course) {
    const response = await fetch(`http://localhost:4000/teacherClasses/create`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'x-access-token': token},
        body: JSON.stringify({
            key: '1',
            nombre: course.name,
            materia: course.subject,
            duracion: course.duration,
            frecuencia: course.frequency,
            costo: course.price
        })
    })
    return {status: response.status, content: await response.json()};
}

async function updateClass(token, course) {
    const response = await fetch(`http://localhost:4000/teacherClasses/`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json', 'x-access-token': token},
        body: JSON.stringify({
            key: course.key,
            nombre: course.name,
            materia: course.subject,
            duracion: course.duration,
            frecuencia: course.frequency,
            costo: course.price
        })
    })
    return {status: response.status, content: await response.json()};
}