import React, {useEffect} from "react";
import './TeacherHiring.css';
import TeacherSideMenu from "../../navigation/TeacherSideMenu";
import {useSelector} from "react-redux";
import {toast} from "react-toastify";

export function TeacherHiring(props) {
    const userAuth = useSelector((state) => state.userAuth);
    const [hiring, setHiring] = React.useState([]);

    useEffect(() => {
        try {
            getTeacherHiring(userAuth.token).then(r => {
                if(r.status !== 200) {
                    toast.error('No pudimos obtener la informacion de las clases (' + r.status + ')' , {
                        position: toast.POSITION.BOTTOM_LEFT
                    });
                } else {
                    setHiring(r.content.data)
                }
            })
        } catch (error) {
            console.log(error);
        }
    }, [false]);

    return (
        <div className="Teacher_Hiring">
            <TeacherSideMenu titleSelected={2}/>
            <div className="Teacher_Hiring_Content">
                <HiringList hiring={hiring ?? []} dialog={(h) => props.dialog(h)}/>
            </div>
        </div>
    );
}

function HiringList(props) {
    const userAuth = useSelector((state) => state.userAuth);
    const hiring = props.hiring;
    const [items, setItems] = React.useState([]);

    useEffect(() => {
        setItems(hiring)
    }, [hiring]);

    const onDelete = (key) => {
        deleteRequest(userAuth.token, key).then(r => {
            if(r.status !== 200) {
                toast.error('No pudimos rechazar la peticion (' + r.status + ')' , {
                    position: toast.POSITION.BOTTOM_LEFT
                });
            } else {
                window.location.reload()
            }
        })
    };

    const onApprove = (key) => {
        approveRequest(userAuth.token, key).then(r => {
            if(r.status !== 200) {
                toast.error('No pudimos aceptar la peticion (' + r.status + ')' , {
                    position: toast.POSITION.BOTTOM_LEFT
                });
            } else {
                window.location.reload()
            }
        })
    };

    const listItems = items.map((h) =>
        <ListItem
            key={h.key}
            hire={h}
            dialog={(h) => props.dialog(h)}
            onApprove={onApprove}
            onDelete={onDelete}/>
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
                <p className="Teacher_Hiring_Item_Text_Normal">Pendiente</p>
                <p className="Teacher_Hiring_Item_Text_Bold">{h.nombre}</p>
                <p className="Teacher_Hiring_Item_Text_Light">{h.alumno}</p>
            </div>
            <div className="Teacher_Home_Item_Right">
                <HiringAction
                    onClick={() => props.dialog(h)}
                    image="phone"
                    alt="phone"/>
                <HiringAction
                    onClick={() => props.onApprove(h.key)}
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

async function getTeacherHiring(token) {
    const response = await fetch(`http://localhost:4000/hiring/`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json', 'x-access-token': token}
    })
    return {status: response.status, content: await response.json()};
}

async function deleteRequest(token, id) {
    const response = await fetch(`http://localhost:4000/hiring/`, {
        method: 'delete',
        headers: {'Content-Type': 'application/json', 'x-access-token': token},
        body: JSON.stringify({key: id})
    })
    return {status: response.status};
}

async function approveRequest(token, id) {
    const response = await fetch(`http://localhost:4000/hiring/`, {
        method: 'delete',
        headers: {'Content-Type': 'application/json', 'x-access-token': token},
        body: JSON.stringify({key: id})
    })
    return {status: response.status};
}
