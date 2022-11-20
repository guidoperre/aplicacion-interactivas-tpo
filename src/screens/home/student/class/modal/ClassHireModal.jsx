import * as React from 'react';
import './ClassHireModal.css';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import {TextInput} from "../../../../../components/input/single/TextInput";
import DialogActions from "@mui/material/DialogActions";
import {useSelector} from "react-redux";
import {toast} from "react-toastify";
import {useLocation, useNavigate} from "react-router-dom";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function ClassHireDialog(props) {
    const userAuth = useSelector((state) => state.userAuth);
    const navigation = useNavigate();
    const location = useLocation();
    const [comment, setComment] = React.useState("");

    const onHireClicked = () => {
        try {
            hireClass(userAuth.token, location.state.id, comment).then(r => {
                if(r.status !== 200) {
                    toast.error('No pudimos contratar la clase (' + r.status + ')' , {
                        position: toast.POSITION.BOTTOM_LEFT
                    });
                } else {
                    props.handleClose()
                }
            })
        } catch (error) {
            console.log(error);
        } finally {
            navigation('/home/student/classes')
        }
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
                                placeholder="Un mensaje que quiera que lea el profesor."
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}/>
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

async function hireClass(token, id) {
    const response = await fetch(`http://localhost:4000/studentClass/create`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json', 'x-access-token': token},
        body: {class: id}
    })
    return {status: response.status, content: await response.json()};
}
