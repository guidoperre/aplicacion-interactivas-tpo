import React from "react";
import './StudentClasses.css';
import mock from "../../../../../components/data/student/classes.json";
import ClassQualifyDialog from "../modal/ClassQualifyDialog";
import ClassCommentDialog from "../modal/ClassCommentDialog";
import {useSelector} from "react-redux";
import {toast} from "react-toastify";

export function StudentClasses() {
    const [open, setOpen] = React.useState(false);
    const [openC, setOpenC] = React.useState(false);
    const userAuth = useSelector((state) => state.userAuth);
    let courses = {}

    try {
        getClasses(userAuth.token).then(r => {
            if(r.status !== 200) {
                toast.error('Ocurrio un error cargando los cursos (' + r.status + ')' , {
                    position: toast.POSITION.BOTTOM_LEFT
                });
            } else {
                courses = r.content
            }
        })
    } catch (error) {
        console.log(error);
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCClickOpen = () => {
        setOpenC(true);
    };

    const handleCClose = () => {
        setOpenC(false);
    };

    const onQualify = () => {
        setOpen(true);
    };

    return (
        <div className="Student_Class_Qualify">
            <div className="Student_Class_Qualify_Content">
                <CoursesQualifyList qualify={courses.cursos ?? []} onQualify={onQualify} onComment={handleCClickOpen}/>
            </div>
            <ClassQualifyDialog
                open={open}
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}/>
            <ClassCommentDialog
                open={openC}
                handleClickOpen={handleCClickOpen}
                handleClose={handleCClose}/>
        </div>
    );
}

function CoursesQualifyList(props) {    
    const qualify = props.qualify;
    const [items, setItems] = React.useState(qualify);

    const listItems = items.map((h) =>
        <ListItem key={h.key} qualify={h} onQualify={props.onQualify} onComment={props.onComment}/>
    );
    return (
        <ul className="Student_Class_Qualify_List">{listItems}</ul>
    );
}

function ListItem(props) {
    const c = props.qualify;

    return (
        <li className="Student_Class_Qualify_Item">
            <div className="Student_Class_Qualify_Left">
                <p className="Student_Class_Qualify_Text_Bold">{c.materiaNombre}</p>
                <p className="Student_Class_Qualify_Text_Normal"><b>Frecuencia: </b>{c.frecuenciaDescripcion}</p>
            </div>
            <div className="Student_Class_Qualify_Right" >
                <img className="Student_Class_Qualify_Image"
                     onClick={props.onComment}
                     src={process.env.PUBLIC_URL + '/class/comment.png'}
                     alt="edit"/>
                <img className="Student_Class_Qualify_Image"
                     onClick={() => props.onQualify(c.key)}
                     src={process.env.PUBLIC_URL + '/class/edit.png'}
                     alt="edit"/>
            </div>
        </li>
    );
}

async function getClasses(token) {
    const response = await fetch(`http://localhost:4000/studentClasses/`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json', 'x-access-token': token}
    })
    return {status: response.status, content: await response.json()};
}