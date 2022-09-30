import React from "react";

import './StudentSideMenu.css';

export default function StudentSideMenu(props) {
    const onSearchClassesClicked = () => {
        window.location.href='/home/student/search'
    };
    const onClassesClicked = () => {
        window.location.href='/home/student/classes'
    };

    let classesStyle
    let searchClassesStyle

    switch (props.titleSelected) {
        case 1:
            searchClassesStyle = "bold"
            classesStyle = "normal"
            break;
        case 2:
            searchClassesStyle = "normal"
            classesStyle = "bold"
            break;
        default:
            classesStyle = "normal"
            searchClassesStyle = "normal"
            break;
    }

    return(
        <div className="Student_Navigator">
            <div className="Student_Navigator_Header">
                <img className="Student_Navigator_Image"
                     src={process.env.PUBLIC_URL + '/class/student.jpg'}
                     alt="" />
                <div className="Student_Navigator_Header_Content">
                    <p className="Student_Navigator_Header_Title">Guido Perre</p>
                    <p className="Student_Navigator_Header_Subtitle">Alumno</p>
                </div>

            </div>
            <div className="Student_Navigator_Button" onClick={onSearchClassesClicked}>
                <p className="Student_Navigator_Button_Title" style={{fontWeight: searchClassesStyle}}>Buscar clases</p>
            </div>
            <div className="Student_Navigator_Button" onClick={onClassesClicked}>
                <p className="Student_Navigator_Button_Title" style={{fontWeight: classesStyle}}>Clases</p>
            </div>
            <p className="Navigator_Footer_Text">2022 Institular ®. Reservados todos los derechos.</p>
        </div>
    );
}
