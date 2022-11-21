import React, {useEffect} from "react";
import './StudentClasses.css';
import mock from "../../../../../components/data/student/classes.json";
import ClassQualifyDialog from "../modal/qualify/ClassQualifyDialog";
import ClassCommentDialog from "../modal/comment/ClassCommentDialog";
import {useSelector} from "react-redux";
import {toast} from "react-toastify";

export function StudentClasses() {
    const [qualifyDialog, openQualifyDialog] = React.useState(false);
    const [commentDialog, openCommentDialog] = React.useState(false);
    const [selectedClass, setSelectedClass] = React.useState();
    const userAuth = useSelector((state) => state.userAuth);
    const [courses, setCourses] = React.useState([]);

    useEffect(() => {
        try {
            getClasses(userAuth.token).then(r => {
                if(r.status !== 200) {
                    toast.error('Ocurrio un error cargando los cursos (' + r.status + ')' , {
                        position: toast.POSITION.BOTTOM_LEFT
                    });
                } else {
                    setCourses(r.content.data.docs)
                }
            })
        } catch (error) {
            console.log(error);
        }
    }, [false]);

    const openQualify = (key) => {
        setSelectedClass(key)
        openQualifyDialog(true);
    };

    const closeQualify = () => {
        openQualifyDialog(false);
    };

    const openComment = (key) => {
        setSelectedClass(key)
        openCommentDialog(true);
    };

    const closeComment = () => {
        openCommentDialog(false);
    };

    return (
        <div className="Student_Class_Qualify">
            <div className="Student_Class_Qualify_Content">
                <CoursesQualifyList qualify={courses} onQualify={openQualify} onComment={openComment}/>
            </div>
            <ClassQualifyDialog
                open={qualifyDialog}
                handleClickOpen={openQualify}
                handleClose={closeQualify}
                selectedClass={selectedClass}/>
            <ClassCommentDialog
                open={commentDialog}
                handleClickOpen={openComment}
                handleClose={closeComment}
                selectedClass={selectedClass}/>
        </div>
    );
}

function CoursesQualifyList(props) {
    const qualify = props.qualify;
    const [items, setItems] = React.useState([]);

    useEffect(() => {
        setItems(qualify)
    }, [qualify]);

    const listItems = items.map((h) =>
        <ListItem
            key={h.key}
            qualify={h}
            onQualify={() => props.onQualify(h.key)}
            onComment={() => props.onComment(h.key)}/>
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