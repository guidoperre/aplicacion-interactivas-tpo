import React from "react";
import './TeacherComment.css';
import mock from "../../../../../components/data/comment/comments.json";

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
                <div className="Teacher_Comment_Navigator_Button">
                    <p className="Teacher_Comment_Navigator_Button_Title" onClick={onHiringClicked}>Contrataciones</p>
                </div>
                <div className="Teacher_Comment_Navigator_Button">
                    <p className="Teacher_Comment_Navigator_Button_Title_Selected">Comentarios</p>
                </div>
            </div>
            <div className="Teacher_Comment_Content">
                <CommentList Comment={mock.comentarios}/>
            </div>
        </div>
    );
}

function CommentList(props) {
    const Comment = props.Comment;
    const listItems = Comment.map((h) =>
        <ListItem key={h.key} hire={h} dialog={props.dialog}/>
    );
    return (
        <ul className="Teacher_Comment_List">{listItems}</ul>
    );
}

function ListItem(props) {
    const h = props.hire;
    return (
        <li className="Teacher_Comment_Item">
            <div className="Teacher_Comment_Item_Left">
                <p className="Teacher_Comment_Item_Text_Normal">{h.estado}</p>
                <p className="Teacher_Comment_Item_Text_Bold">{h.nombre}</p>
                <p className="Teacher_Comment_Item_Text_Light">{h.alumno}</p>
            </div>
            <div className="Teacher_Home_Item_Right">
                <p className="Teacher_Comment_Item_Actionable" onClick={props.dialog}>Contactar</p>
                <p className="Teacher_Comment_Item_Actionable">Aceptar</p>
                <p className="Teacher_Comment_Item_Actionable">Cancelar</p>
            </div>
        </li>
    );
}
