import React from "react";
import './TeacherComment.css';
import mock from "../../../../../components/data/comment/comments.json";
import BlockDialog from "../modal/ModalBlock";

export function TeacherComment() {
    const onClassesClicked = () => {
        window.location.href='/home/teacher/classes'
    };
    const onHiringClicked = () => {
        window.location.href='/home/teacher/hiring'
    };

    return (
        <div className="Teacher_Comment">
            <div className="Teacher_Comment_Navigator">
                <div className="Teacher_Comment_Navigator_Header">
                    <p className="Teacher_Comment_Navigator_Header_Title">Profesor Juan Ramirez</p>
                </div>
                <div className="Teacher_Comment_Navigator_Button" onClick={onClassesClicked}>
                    <p className="Teacher_Comment_Navigator_Button_Title">Clases</p>
                </div>
                <div className="Teacher_Comment_Navigator_Button" onClick={onHiringClicked}>
                    <p className="Teacher_Comment_Navigator_Button_Title">Contrataciones</p>
                </div>
                <div className="Teacher_Comment_Navigator_Button">
                    <p className="Teacher_Comment_Navigator_Button_Title_Selected">Comentarios</p>
                </div>
            </div>
            <div className="Teacher_Comment_Content">
                <CommentList comment={mock.comentarios}/>
            </div>
        </div>
    );
}

function CommentList(props) {
    const comment = props.comment;
    const [items, setItems] = React.useState(comment);

    const onDelete = (key) => {
        setItems((items) => items.filter((item, _) => item.key !== key));
    };

    const listItems = items.map((h) =>
        <ListItem key={h.key} comment={h} onDelete={onDelete}/>
    );
    return (
        <ul className="Teacher_Comment_List">{listItems}</ul>
    );
}

function ListItem(props) {
    const c = props.comment;
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <li className="Teacher_Comment_Item" onClick={handleClickOpen}>
            <div className="Teacher_Comment_Left">
                <p className="Teacher_Comment_Text_Bold">{c.autor}</p>
                <p className="Teacher_Comment_Text_Normal">{c.descripcion}</p>
            </div>
            <img className="Teacher_Comment_Image"
                 src={process.env.PUBLIC_URL + '/class/block.png'}
                 alt={props.alt} />
            <BlockDialog
                open={open}
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
                onDelete={() => props.onDelete(c.key)}/>
        </li>
    );
}
