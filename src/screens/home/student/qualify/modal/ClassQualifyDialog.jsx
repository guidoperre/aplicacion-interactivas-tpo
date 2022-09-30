import * as React from 'react';
import './ClassQualifyDialog.css';
import { styled } from '@mui/material/styles';
import Select from 'react-select'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from "@mui/material/DialogActions";
import mock from "../../../../../components/data/student/qualifications.json";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function ClassQualifyDialog(props) {
    return (
        <BootstrapDialog
            onClose={props.handleClose}
            aria-labelledby="customized-dialog-title"
            open={props.open}>
            <DialogTitle sx={{ marginTop: 2, marginLeft: 4, p: 0 }}>
                <p className="Modal_Title">Calificaión</p>
            </DialogTitle>
            <DialogContent>
                <div className="Class_Qualify_Dialog_Content">
                    <p className="Class_Qualify_Dialog_Label_Title">Calificación del curso</p>
                    <Select
                        placeholder="Seleccione una calificación"
                        className="Search_Filter"                        
                        options={mock.calificacion} />
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
