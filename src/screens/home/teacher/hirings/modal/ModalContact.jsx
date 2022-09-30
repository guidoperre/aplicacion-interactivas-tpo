import * as React from 'react';
import './ModalContact.css';
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

export default function ContactDialog(props) {
    return (
        <BootstrapDialog
            onClose={props.handleClose}
            aria-labelledby="customized-dialog-title"
            open={props.open}>
            <DialogTitle sx={{ m: 0, p: 2 }}>Datos de contacto</DialogTitle>
            <DialogContent>
                <div className="Contact_Dialog_Content">
                    <TextInput title="Nombre" type="text" text={"Pedro Alfonso"}/>
                    <TextInput title="Email" type="text" text={"pedroalfonso@gmail.com"}/>
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
            <DialogActions>
                <Button autoFocus onClick={props.handleClose}>
                    Cerrar
                </Button>
            </DialogActions>
        </BootstrapDialog>
    );
}
