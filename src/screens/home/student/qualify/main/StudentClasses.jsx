import React from "react";
import './StudentClasses.css';
import mock from "../../../../../components/data/student/classes.json";
import BlockDialog from "../modal/ModalBlock";
import StudentSideMenu from "../../navigation/StudentSideMenu";

export function StudentClasses() {
    return (
        <div className="Student_Comment">
            <div className="Student_Comment_Content">
                <CoursesQualifyList qualify={mock.cursos}/>
            </div>
        </div>
    );
}

function CoursesQualifyList(props) {    
    const qualify = props.qualify;
    const [items, setItems] = React.useState(qualify);

    const onQualify = (key) => {
        debugger;
        setItems((items) => items.filter((item, _) => item.key !== key));
    };

    const listItems = items.map((h) =>
        <ListItem key={h.key} qualify={h} onQualify={onQualify}/>
    );
    return (
        <ul className="Student_Comment_List">{listItems}</ul>
    );
}

function ListItem(props) {
    const c = props.qualify;
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <li className="Student_Comment_Item" onClick={handleClickOpen}>
            <div className="Student_Comment_Left">
                <p className="Student_Comment_Text_Bold">{c.materiaNombre}</p>
                <p className="Student_Comment_Text_Normal"><b>Calificación: </b>{c.calificacion}</p>
            </div>
            <div className="Student_Comment_Right">
                <img className="Student_Comment_Image"
                     src={process.env.PUBLIC_URL + '/class/edit.png'}
                     alt="aprove"
                     />
            </div>
            <BlockDialog
                open={open}
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
                onQualify={() => props.onQualify(c.key)}
                />
        </li>
    );
}
