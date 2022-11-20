import React from "react";
import './StudentClass.css';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import ClassHireDialog from "../modal/ClassHireModal";
import {TextInput} from "../../../../../components/input/single/TextInput";
import {toast} from "react-toastify";
import {useSelector} from "react-redux";
import {useLocation} from "react-router-dom";

export function StudentClass() {
    const userAuth = useSelector((state) => state.userAuth);
    const location = useLocation();
    const [open, setOpen] = React.useState(false);
    let course = {}

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    try {
        getClass(userAuth.token, location.state.id ?? -1).then(r => {
            if(r.status !== 200) {
                toast.error('No pudimos obtener la informacion de la clase (' + r.status + ')' , {
                    position: toast.POSITION.BOTTOM_LEFT
                });
            } else {
                course = r.content
            }
        })
    } catch (error) {
        console.log(error);
    }

    return (
        <div className="Student_Class_Content">
            <div className="Student_Class_Container">
                <div className="Student_Class_Content_Left">
                    <p className="Student_Class_Title">{course.title}</p>
                    <TextInput title="Calificacion" type="text" text={course.qualification}/>
                    <TextInput title="Profesor" type="text" text={course.teacher}/>
                    <label className="Student_Class_Label">
                        <p className="Student_Class_Label_Title">Experiencia</p>
                        <textarea
                            className="Student_Class_TextArea"
                            value={course.teacherExperience}/>
                    </label>
                    <label className="Student_Class_Label">
                        <p className="Student_Class_Label_Title">Descripción</p>
                        <textarea
                            className="Student_Class_TextArea"
                            value={course.classDescription}/>
                    </label>
                    <TextInput title="Duracion" type="text" text={course.duration}/>
                    <TextInput title="Frecuencia" type="text" text={course.frequency}/>
                    <TextInput title="Costo" type="text" text={course.price}/>
                    <p className="Student_Class_Subtitle">Comentarios</p>
                    <CommentList comment={course.comments ?? []}/>
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

async function getClass(token, id) {
    const response = await fetch(`http://localhost:4000/teacherClasses/`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json', 'x-access-token': token},
        body: {id: id}
    })
    return {status: response.status, content: await response.json()};
}
