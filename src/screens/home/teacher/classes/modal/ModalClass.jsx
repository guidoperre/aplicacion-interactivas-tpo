import * as React from 'react';
import './ModalClass.css';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import {TextInput} from "../../../../../components/input/single/TextInput";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function ClassDialog(props) {
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
                    <TextInput title="Nombre" type="text" placeholder={"Nombre de la clase"}/>
                    <TextInput title="Materia" type="text" placeholder={"Nombre de la materia"}/>
                    <TextInput title="Duracion en horas" type="number" placeholder={"40"}/>
                    <TextInput title="Frecuencia" type="text" placeholder={"Semanal"}/>
                    <TextInput title="Costo" type="number" placeholder={"100.00"}/>
                </div>
            </DialogContent>
            <DialogActions>
                <div className="Modal_Button" onClick={props.handleClose}>
                    <p className="Modal_Button_Text">Guardar</p>
                </div>
            </DialogActions>
        </BootstrapDialog>
    );
}
