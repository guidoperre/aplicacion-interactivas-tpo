import React from "react";
import './TeacherHiring.css';

export function TeacherHiring() {
    const onClassesClicked = () => {
        window.location.href='/home/teacher/classes'
    };

    return (
        <div className="Teacher_Hiring">
            <div className="Teacher_Hiring_Navigator">
                <div className="Teacher_Hiring_Navigator_Header">
                    <p className="Teacher_Hiring_Navigator_Header_Title">Profesor Juan Ramirez</p>
                </div>
                <div className="Teacher_Hiring_Navigator_Button" onClick={onClassesClicked}>
                    <p className="Teacher_Hiring_Navigator_Button_Title">Clases</p>
                </div>
                <div className="Teacher_Hiring_Navigator_Button">
                    <p className="Teacher_Hiring_Navigator_Button_Title_Selected">Contrataciones</p>
                </div>
            </div>
        </div>
    );
}
