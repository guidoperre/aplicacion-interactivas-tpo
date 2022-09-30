import React from "react";
import './TeacherHiring.css';
import mock from "../../../../../components/data/teacher/hiring.json";
import TeacherSideMenu from "../../navigation/TeacherSideMenu";

export function TeacherHiring(props) {
    return (
        <div className="Teacher_Hiring">
            <TeacherSideMenu titleSelected={2}/>
            <div className="Teacher_Hiring_Content">
                <HiringList hiring={mock.contrataciones} dialog={props.dialog}/>
            </div>
        </div>
    );
}

function HiringList(props) {
    const hiring = props.hiring;

    const [items, setItems] = React.useState(hiring);

    const onDelete = (key) => {
        setItems((items) => items.filter((item, _) => item.key !== key));
    };

    const listItems = items.map((h) =>
        <ListItem key={h.key} hire={h} dialog={props.dialog} onDelete={onDelete}/>
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
                <HiringAction
                    onClick={props.dialog}
                    image="phone"
                    alt="phone"/>
                <HiringAction
                    onClick={() => props.onDelete(h.key)}
                    image="approve"
                    alt="approve"/>
                <HiringAction
                    onClick={() => props.onDelete(h.key)}
                    image="cancel"
                    alt="cancel"/>
            </div>
        </li>
    );
}

function HiringAction(props) {
    return (
        <div className="Teacher_Hiring_Item_Actionable" onClick={props.onClick}>
            <img className="Teacher_Hiring_Item_Actionable_Image"
                 src={process.env.PUBLIC_URL + '/class/' + props.image + '.png'}
                 alt={props.alt} />
        </div>
    );
}
