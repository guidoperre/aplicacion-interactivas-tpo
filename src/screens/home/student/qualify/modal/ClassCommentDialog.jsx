import * as React from 'react';
import './ClassQualifyDialog.css';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from "@mui/material/DialogActions";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function ClassCommentDialog(props) {
    return (
        <BootstrapDialog
            onClose={props.handleClose}
            aria-labelledby="customized-dialog-title"
            open={props.open}>
            <DialogTitle sx={{ marginTop: 2, marginLeft: 4, p: 0 }}>
                <p className="Modal_Title">Comentar</p>
            </DialogTitle>
            <DialogContent>
                <div className="Class_Qualify_Dialog_Content">
                    <label className="Contact_Dialog_Label">
                        <p className="Contact_Dialog_Label_Title">Comentario</p>
                        <textarea
                            className="Contact_Dialog_TextArea"
                            placeholder="Me gusto mucho la clase porque..."/>
                    </label>
                </div>
            </DialogContent>
            <DialogActions>
                <div className="Modal_Button" onClick={props.handleClose}>
                    <p className="Modal_Button_Text">Enviar</p>
                </div>
            </DialogActions>
        </BootstrapDialog>
    );
}
