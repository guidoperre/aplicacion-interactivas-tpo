import React from "react";
import './StudentClasses.css';
import mock from "../../../../../components/data/student/classes.json";
import ClassQualifyDialog from "../modal/ClassQualifyDialog";

export function StudentClasses() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onQualify = (key) => {
        setOpen(true);
    };

    return (
        <div className="Student_Class_Qualify">
            <div className="Student_Class_Qualify_Content">
                <CoursesQualifyList qualify={mock.cursos} onQualify={onQualify}/>
            </div>
            <ClassQualifyDialog
                open={open}
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}/>
        </div>
    );
}

function CoursesQualifyList(props) {    
    const qualify = props.qualify;
    const [items, setItems] = React.useState(qualify);

    const listItems = items.map((h) =>
        <ListItem key={h.key} qualify={h} onQualify={props.onQualify}/>
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
                     onClick={() => props.onQualify(c.key)}
                     src={process.env.PUBLIC_URL + '/class/edit.png'}
                     alt="edit"/>
            </div>
        </li>
    );
}
