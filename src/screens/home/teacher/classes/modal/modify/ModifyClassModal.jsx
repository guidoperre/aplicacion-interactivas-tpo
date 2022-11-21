import * as React from 'react';
import './ModifyClassModal.css';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import {TextInput} from "../../../../../../components/input/single/TextInput";
import {toast} from "react-toastify";
import {useSelector} from "react-redux";
import {useState} from "react";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function ModifyClassDialog(props) {
    const userAuth = useSelector((state) => state.userAuth);
    const [name, setName] = useState(props.course.nombre)
    const [subject, setSubject] = useState(props.course.materia)
    const [duration, setDuration] = useState(props.course.duracion)
    const [frequency, setFrequency] = useState(props.course.frecuencia)
    const [price, setPrice] = useState(props.course.costo)

    const onModifyClassClick = () => {
        try {
            updateClass(userAuth.token, {
                key: props.course.key,
                name: name,
                subject: subject,
                duration: duration,
                frequency: frequency,
                price: price
            }).then(r => {
                if(r.status !== 200) {
                    toast.error('No pudimos modificar la clase (' + r.status + ')' , {
                        position: toast.POSITION.BOTTOM_LEFT
                    });
                }  else {
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
                <p className="Modify_Modal_Title">Modificar clase</p>
            </DialogTitle>
            <DialogContent>
                <div className="Modify_Class_Dialog_Content">
                    <TextInput
                        title="Nombre"
                        type="text"
                        placeholder={"Nombre de la clase"}
                        text={name}
                        onTextChange={(e) => setName(e.target.value)}/>
                    <TextInput
                        title="Materia"
                        type="text"
                        placeholder={"Nombre de la materia"}
                        text={subject}
                        onTextChange={(e) => setSubject(e.target.value)}/>
                    <TextInput
                        title="Duracion en horas"
                        type="number"
                        placeholder={"40"}
                        text={duration}
                        onTextChange={(e) => setDuration(e.target.value)}/>
                    <TextInput
                        title="Frecuencia"
                        type="text"
                        placeholder={"Semanal"}
                        text={frequency}
                        onTextChange={(e) => setFrequency(e.target.value)}/>
                    <TextInput
                        title="Costo"
                        type="number"
                        placeholder={"100.00"}
                        text={price}
                        onTextChange={(e) => setPrice(e.target.value)}/>
                </div>
            </DialogContent>
            <DialogActions>
                <div className="Modify_Modal_Button" onClick={onModifyClassClick}>
                    <p className="Modify_Modal_Button_Text">Modificar</p>
                </div>
            </DialogActions>
        </BootstrapDialog>
    );
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
