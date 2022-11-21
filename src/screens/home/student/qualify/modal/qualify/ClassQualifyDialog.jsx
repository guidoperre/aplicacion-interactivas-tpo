import * as React from 'react';
import './ClassQualifyDialog.css';
import { styled } from '@mui/material/styles';
import Select from 'react-select'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from "@mui/material/DialogActions";
import mock from "../../../../../../components/data/student/qualifications.json";
import {useSelector} from "react-redux";
import {toast} from "react-toastify";
import {useEffect} from "react";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function ClassQualifyDialog(props) {
    const [qualification, setQualification] = React.useState("");
    const userAuth = useSelector((state) => state.userAuth);
    const [qualifications, setQualifications] = React.useState([]);

    useEffect(() => {
        try {
            getQualifications(userAuth.token).then(r => {
                if(r.status !== 200) {
                    toast.error('Ocurrio un error cargando los calificaciones (' + r.status + ')' , {
                        position: toast.POSITION.BOTTOM_LEFT
                    });
                } else {
                    console.log(r.content)
                    setQualifications(r.content.data.docs)
                }
            })
        } catch (error) {
            console.log(error);
        }
    }, [false]);


    const onQualifyClick = () => {
        try {
            postQualification(userAuth.token, qualification, props.selectedClass).then(r => {
                if(r.status !== 200) {
                    toast.error('No pudimos calificar la clase (' + r.status + ')' , {
                        position: toast.POSITION.BOTTOM_LEFT
                    });
                } else {
                    props.handleClose()
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
            <DialogTitle sx={{ marginTop: 2, marginLeft: 4, p: 0 }}>
                <p className="Modal_Title">Calificaión</p>
            </DialogTitle>
            <DialogContent>
                <div className="Class_Qualify_Dialog_Content">
                    <p className="Class_Qualify_Dialog_Label_Title">Calificación del curso</p>
                    <Select
                        placeholder="Seleccione una calificación"
                        className="Search_Filter"                        
                        options={qualifications}
                        onChange={(e) => setQualification(e)}/>
                </div>
            </DialogContent>
            <DialogActions>
                <div className="Modal_Button" onClick={onQualifyClick}>
                    <p className="Modal_Button_Text">Guardar</p>
                </div>
            </DialogActions>
        </BootstrapDialog>
    );
}

async function getQualifications(token) {
    const response = await fetch(`http://localhost:4000/qualification/`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json', 'x-access-token': token}
    })
    return {status: response.status, content: await response.json()};
}

async function postQualification(token, qualification, courseKey) {
    const response = await fetch(`http://localhost:4000/qualification/create`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json', 'x-access-token': token},
        body: JSON.stringify({qualification: qualification})
    })
    return {status: response.status, content: await response.json()};
}
