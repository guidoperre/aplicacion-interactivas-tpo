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
                    <TextInput title="Nombre" type="text" text={"Guido Perre"}/>
                    <TextInput title="Email" type="text" text={"perreguido@gmail.com"}/>
                    <TextInput title="Telefono" type="text" text={"+54 116846836"}/>
                    <TextInput title="Hora de contacto" type="text" text={"De 9hs a 18hs"}/>
                    <label className="Contact_Dialog_Label">
                        <p className="Contact_Dialog_Label_Title">Mensaje</p>
                        <textarea
                            className="Contact_Dialog_TextArea"
                            value="Hola profesor, me gustaria poder asistir a su claso. Aguardo su contacto."/>
                    </label>
                </div>
            </DialogContent>
        </BootstrapDialog>
    );
}
