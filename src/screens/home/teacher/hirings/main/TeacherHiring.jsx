import React from "react";
import './TeacherHiring.css';
import mock from "../../../../../components/data/teacher/hiring.json";

export function TeacherHiring(props) {
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
            <div className="Teacher_Hiring_Content">
                <HiringList hiring={mock.contrataciones} dialog={props.dialog}/>
            </div>
        </div>
    );
}

function HiringList(props) {
    const hiring = props.hiring;
    const listItems = hiring.map((h) =>
        <ListItem key={h.key} hire={h} dialog={props.dialog}/>
    );
    return (
        <ul className="Teacher_Hiring_List">{listItems}</ul>
    );
}

function ListItem(props) {
    const h = props.hire;
    return (
        <li className="Teacher_Hiring_Item">
            <div className="Teacher_Hiring_Item_Left">
                <p className="Teacher_Hiring_Item_Text_Normal">{h.estado}</p>
                <p className="Teacher_Hiring_Item_Text_Bold">{h.nombre}</p>
                <p className="Teacher_Hiring_Item_Text_Light">{h.alumno}</p>
            </div>
            <div className="Teacher_Home_Item_Right">
                <p className="Teacher_Hiring_Item_Actionable" onClick={props.dialog}>Contactar</p>
                <p className="Teacher_Hiring_Item_Actionable">Aceptar</p>
                <p className="Teacher_Hiring_Item_Actionable">Cancelar</p>
            </div>
        </li>
    );
}
