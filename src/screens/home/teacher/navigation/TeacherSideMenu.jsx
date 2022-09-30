import React from "react";

import './TeacherSideMenu.css';

export default function TeacherSideMenu(props) {
    const onClassesClicked = () => {
        window.location.href='/home/teacher/classes'
    };
    const onHiringClicked = () => {
        window.location.href='/home/teacher/hiring'
    };
    const onCommentsClicked = () => {
        window.location.href='/home/teacher/comments'
    };

    let classesStyle
    let hiringStyle
    let commentsStyle

    switch (props.titleSelected) {
        case 1:
            classesStyle = "bold"
            hiringStyle = "normal"
            commentsStyle = "normal"
            break;
        case 2:
            classesStyle = "normal"
            hiringStyle = "bold"
            commentsStyle = "normal"
            break;
        case 3:
            classesStyle = "normal"
            hiringStyle = "normal"
            commentsStyle = "bold"
            break;
        default:
            classesStyle = "normal"
            hiringStyle = "normal"
            commentsStyle = "normal"
            break;
    }

    return(
        <div className="Teacher_Navigator">
            <div className="Teacher_Navigator_Header">
                <img className="Teacher_Navigator_Image"
                     src={process.env.PUBLIC_URL + '/class/profesor.jpg'}
                     alt="" />
                <div className="Teacher_Navigator_Header_Content">
                    <p className="Teacher_Navigator_Header_Title">Juan Ramirez</p>
                    <p className="Teacher_Navigator_Header_Subtitle">Profesor</p>
                </div>

            </div>
            <div className="Teacher_Navigator_Button" onClick={onClassesClicked}>
                <p className="Teacher_Navigator_Button_Title" style={{fontWeight: classesStyle}}>Clases</p>
            </div>
            <div className="Teacher_Navigator_Button" onClick={onHiringClicked}>
                <p className="Teacher_Navigator_Button_Title" style={{fontWeight: hiringStyle}}>Contrataciones</p>
            </div>
            <div className="Teacher_Navigator_Button" onClick={onCommentsClicked}>
                <p className="Teacher_Navigator_Button_Title" style={{fontWeight: commentsStyle}}>Comentarios</p>
            </div>
            <p className="Navigator_Footer_Text">2022 Institular ®. Reservados todos los derechos.</p>
        </div>
    );
}
