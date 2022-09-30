import * as React from 'react';
import './ClassHireModal.css';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import {TextInput} from "../../../../../components/input/single/TextInput";
import DialogActions from "@mui/material/DialogActions";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function ClassHireDialog(props) {
    const onHireClicked = () => {
        window.location.href='/home/student/classes'
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
                        <TextInput title="Nombre" type="text" placeholder={"Su nombre aqui"}/>
                        <TextInput title="Email" type="text" placeholder={"Su email aqui"}/>
                        <TextInput title="Telefono" type="text" placeholder={"Su numero aqui"}/>
                        <TextInput title="Hora de contacto" type="text" placeholder={"La hora de contacto aqui"}/>
                        <label className="Contact_Dialog_Label">
                            <p className="Contact_Dialog_Label_Title">Mensaje</p>
                            <textarea
                                className="Contact_Dialog_TextArea"
                                placeholder="Un mensaje que quiera que lea el profesor."/>
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
