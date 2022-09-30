import React from "react";
import './StudentClass.css';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import ClassHireDialog from "../modal/ClassHireModal";
import {TextInput} from "../../../../../components/input/single/TextInput";
import mock from "../../../../../components/data/comment/comments.json";

export function StudentClass() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="Student_Class_Content">
            <div className="Student_Class_Container">
                <div className="Student_Class_Content_Left">
                    <p className="Student_Class_Title">Aplicaciones Interactivas</p>
                    <TextInput title="Calificacion" type="text" text={"Buena"}/>
                    <TextInput title="Profesor" type="text" text={"Juan Ramirez"}/>
                    <label className="Student_Class_Label">
                        <p className="Student_Class_Label_Title">Experiencia</p>
                        <textarea
                            className="Student_Class_TextArea"
                            value="Me recibi en la UBA en el año 2002, tengo un master en pedagogia."/>
                    </label>
                    <label className="Student_Class_Label">
                        <p className="Student_Class_Label_Title">Descripción</p>
                        <textarea
                            className="Student_Class_TextArea"
                            value="En esta clase vamos a ver una introduccion al area de estudio."/>
                    </label>
                    <TextInput title="Duracion" type="text" text={"40 horas"}/>
                    <TextInput title="Frecuencia" type="text" text={"Semanal"}/>
                    <TextInput title="Costo" type="text" text={"$500.00"}/>
                    <p className="Student_Class_Subtitle">Comentarios</p>
                    <CommentList comment={mock.comentarios}/>
                    <div className="Student_Class_Hire" onClick={handleClickOpen}>
                        <p className="Student_Class_Hire_Text">CONTRATAR</p>
                    </div>
                </div>
                <ClassHireDialog
                    open={open}
                    handleClickOpen={handleClickOpen}
                    handleClose={handleClose}/>
            </div>
        </div>
    )
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
