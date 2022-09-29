import React from "react";
import './TeacherHome.css';
import mock from "../../../../../components/data/teacher/clases.json";

export function TeacherHome(props) {
    const onHiringClicked = () => {
        window.location.href='/home/teacher/hiring'
    };

    return (
        <div className="Teacher_Home">
            <div className="Teacher_Home_Navigator">
                <div className="Teacher_Home_Navigator_Header">
                    <p className="Teacher_Home_Navigator_Header_Title">Profesor Juan Ramirez</p>
                </div>
                <div className="Teacher_Home_Navigator_Button">
                    <p className="Teacher_Home_Navigator_Button_Title_Selected">Clases</p>
                </div>
                <div className="Teacher_Home_Navigator_Button" onClick={onHiringClicked}>
                    <p className="Teacher_Home_Navigator_Button_Title">Contrataciones</p>
                </div>
            </div>
            <div className="Teacher_Home_Content">
                <ClassesList classes={mock.clases} dialog={props.dialog}/>
            </div>
        </div>
    );
}

function ClassesList(props) {
    const classes = props.classes;
    const listItems = classes.map((c) =>
        <ListItem key={c.key} class={c} dialog={props.dialog} />
    );
    return (
        <ul className="Teacher_Home_List">{listItems}</ul>
    );
}

function ListItem(props) {
    const c = props.class;
    return (
        <li className="Teacher_Home_Item">
            <div className="Teacher_Home_Item_Left">
                <p className="Teacher_Home_Item_Text_Bold">{c.nombre}</p>
                <p className="Teacher_Home_Item_Text_Normal">{c.materia}</p>
                <p className="Teacher_Home_Item_Text_Light">{c.frecuencia}</p>
                <p className="Teacher_Home_Item_Text_Light">{c.costo}</p>
            </div>
            <div className="Teacher_Home_Item_Right">
                <p className="Teacher_Home_Item_Actionable">Despublicar</p>
                <p className="Teacher_Home_Item_Actionable"
                   onClick={() => props.dialog("Modificar clase")}>
                    Modificar
                </p>
                <p className="Teacher_Home_Item_Actionable">Eliminar</p>
            </div>
        </li>
    );
}
