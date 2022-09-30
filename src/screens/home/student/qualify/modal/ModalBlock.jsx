import * as React from 'react';
import './ModalBlock.css';
import { styled } from '@mui/material/styles';
import Select from 'react-select'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from "@mui/material/DialogActions";
import mock from "../../../../../components/data/student/filters.json";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function BlockDialog(props) {
    return (
        <BootstrapDialog
            onClose={props.handleClose}
            aria-labelledby="customized-dialog-title"
            open={props.open}>
            <DialogTitle sx={{ marginTop: 2, marginLeft: 4, p: 0 }}>
                <p className="Modal_Title">Calificaión</p>
            </DialogTitle>
            <DialogContent>
                <div className="Block_Dialog_Content">
                    <label className="Block_Dialog_Label">
                        <p className="Block_Dialog_Label_Title">Calificación del Curso</p>                        
                    </label>
                    <Select
                        placeholder="Seleccione una calificación"
                        className="Search_Filter"                        
                        options={mock.calificacion} />
                </div>
            </DialogContent>
            <DialogActions>
                <div className="Modal_Button" onClick={props.onQualify}>
                    <p className="Modal_Button_Text">Guardar</p>
                </div>
            </DialogActions>
        </BootstrapDialog>
    );
}
