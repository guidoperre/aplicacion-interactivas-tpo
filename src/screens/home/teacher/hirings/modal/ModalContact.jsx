import * as React from 'react';
import './ModalContact.css';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import {TextInput} from "../../../../../components/input/single/TextInput";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function ContactDialog(props) {
    const hiring = props.h ?? {}

    return (
        <BootstrapDialog
            onClose={props.handleClose}
            aria-labelledby="customized-dialog-title"
            open={props.open}>
            <DialogTitle sx={{ marginTop: 2, marginLeft: 4, p: 0 }}>
                <p className="Modal_Title">Contacto</p>
            </DialogTitle>
            <DialogContent>
                <div className="Contact_Dialog_Content">
                    <TextInput title="Nombre" type="text" text={hiring.alumno}/>
                    <TextInput title="Email" type="text" text={hiring.email}/>
                    <TextInput title="Telefono" type="text" text={hiring.telefono}/>
                    <TextInput title="Hora de contacto" type="text" text={hiring.horaContacto}/>
                    <label className="Contact_Dialog_Label">
                        <p className="Contact_Dialog_Label_Title">Mensaje</p>
                        <textarea
                            className="Contact_Dialog_TextArea"
                            value={hiring.comentario}/>
                    </label>
                </div>
            </DialogContent>
        </BootstrapDialog>
    );
}

