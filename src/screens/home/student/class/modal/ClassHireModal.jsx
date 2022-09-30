import * as React from 'react';
import './ClassHireModal.css';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import {TextInput} from "../../../../../components/input/single/TextInput";
import mock from "../../../../../components/data/comment/comments.json";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function ClassHireDialog(props) {
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
                    <div className="Hire_Dialog_Content_Left">
                        <p className="Hire_Dialog_Label_Title">Descripción</p>
                        <TextInput title="Calificacion" type="text" text={"Buena"}/>
                        <TextInput title="Profesor" type="text" text={"Juan Ramirez"}/>
                        <label className="Hire_Dialog_Label">
                            <p className="Hire_Dialog_Label_Title">Experiencia</p>
                            <textarea
                                className="Hire_Dialog_TextArea"
                                value="Me recibi en la UBA en el año 2002, tengo un master en pedagogia."/>
                        </label>
                        <label className="Hire_Dialog_Label">
                            <p className="Hire_Dialog_Label_Title">Descripción</p>
                            <textarea
                                className="Hire_Dialog_TextArea"
                                value="En esta clase vamos a ver una introduccion al area de estudio."/>
                        </label>
                        <TextInput title="Duracion" type="text" text={"40 horas"}/>
                        <TextInput title="Frecuencia" type="text" text={"Semanal"}/>
                        <TextInput title="Costo" type="text" text={"$500.00"}/>
                    </div>
                    <div className="Hire_Dialog_Content_Right">
                        <p className="Hire_Dialog_Label_Title">Comentarios</p>
                        <CommentList comment={mock.comentarios}/>
                    </div>
                </div>
            </DialogContent>
        </BootstrapDialog>
    );
}

function CommentList(props) {
    const comment = props.comment;

    const listItems = comment.map((h) =>
        <ListItem key={h.key} comment={h}/>
    );
    return (
        <ul className="Student_Class_User_Comment_List">{listItems}</ul>
    );
}

function ListItem(props) {
    const c = props.comment;

    return (
        <li className="Student_Class_User_Comment_Item">
            <div className="Student_Class_User_Comment_Left">
                <p className="Student_Class_User_Comment_Text_Bold">{c.autor}</p>
                <p className="Student_Class_User_Comment_Text_Normal">{c.descripcion}</p>
            </div>
        </li>
    );
}

