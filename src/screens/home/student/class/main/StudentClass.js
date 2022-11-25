import React, {useEffect} from "react";
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
    const [course, setCourse] = React.useState({});
    const [comments, setComments] = React.useState([]);
    let calificacion
    let profesor
    let experiencia
    let descripcion
    let duracion
    let frecuencia
    let costo

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        try {
            getClass(userAuth.token, location.state.key ?? -1).then(r => {
                if(r.status !== 200) {
                    toast.error('No pudimos obtener la informacion de la clase (' + r.status + ')' , {
                        position: toast.POSITION.BOTTOM_LEFT
                    });
                } else {
                    setCourse(r.content.data)
                }
            })
        } catch (error) {
            console.log(error);
        }
    }, [false]);

    useEffect(() => {
        try {
            getComments(userAuth.token, location.state.key ?? -1).then(r => {
                if(r.status !== 200) {
                    toast.error('No pudimos obtener la informacion de la clase (' + r.status + ')' , {
                        position: toast.POSITION.BOTTOM_LEFT
                    });
                } else {
                    setComments(r.content.data)
                }
            })
        } catch (error) {
            console.log(error);
        }
    }, [false]);

    calificacion = course.calificacion ?? 'N/E'
    profesor = course.profesor ?? 'N/E'
    experiencia = course.experiencia ?? 'N/E'
    descripcion = course.descripcion ?? 'N/E'
    duracion = course.duracion ?? 'N/E'
    frecuencia = course.frecuencia ?? 'N/E'
    costo = "$" + course.costo ?? '0'

    return (
        <div className="Student_Class_Content">
            <div className="Student_Class_Container">
                <div className="Student_Class_Content_Left">
                    <p className="Student_Class_Title">{course.nombre}</p>
                    <TextInput title="Calificacion" type="text" text={calificacion}/>
                    <TextInput title="Profesor" type="text" text={profesor}/>
                    <label className="Student_Class_Label">
                        <p className="Student_Class_Label_Title">Experiencia</p>
                        <textarea className="Student_Class_TextArea" value={experiencia}/>
                    </label>
                    <label className="Student_Class_Label">
                        <p className="Student_Class_Label_Title">Descripción</p>
                        <textarea className="Student_Class_TextArea" value={descripcion}/>
                    </label>
                    <TextInput title="Duracion" type="text" text={duracion}/>
                    <TextInput title="Frecuencia" type="text" text={frecuencia}/>
                    <TextInput title="Costo" type="text" text={costo}/>
                    <p className="Student_Class_Subtitle">Comentarios</p>
                    <CommentList comment={comments ?? []}/>
                    <div className="Student_Class_Hire" onClick={handleClickOpen}>
                        <p className="Student_Class_Hire_Text">CONTRATAR</p>
                    </div>
                </div>
                <ClassHireDialog
                    open={open}
                    handleClickOpen={handleClickOpen}
                    handleClose={handleClose}
                    key={location.state.key ?? -1}
                    materia={course.nombre}/>
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
                <p className="Student_Class_User_Comment_Text_Bold">{c.author}</p>
                <p className="Student_Class_User_Comment_Text_Normal">{c.comment}</p>
            </div>
        </li>
    );
}

async function getClass(token, key) {
    const response = await fetch(`http://localhost:4000/teacherClasses/`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json', 'x-access-token': token, 'key': key}
    })
    return {status: response.status, content: await response.json()};
}

async function getComments(token, key) {
    const response = await fetch(`http://localhost:4000/teacherClassComment/`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json', 'x-access-token': token, 'key': key}
    })
    return {status: response.status, content: await response.json()};
}
