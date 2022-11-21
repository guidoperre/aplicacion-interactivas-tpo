import React, {useEffect} from "react";
import './TeacherHome.css';
import CommentDialog from "../modal/ModalComment";
import TeacherSideMenu from "../../navigation/TeacherSideMenu";
import {useSelector} from "react-redux";
import {toast} from "react-toastify";
import ModifyClassDialog from "../modal/modify/ModifyClassModal";

export function TeacherHome(props) {
    const userAuth = useSelector((state) => state.userAuth);
    const [open, setOpen] = React.useState(false);
    const [classes, setClasses] = React.useState([]);

    const handleCommentOpen = () => {
        setOpen(true);
    };

    const handleCommentClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        try {
            getTeacherClasses(userAuth.token).then(r => {
                if(r.status !== 200) {
                    toast.error('No pudimos obtener la informacion de las clases (' + r.status + ')' , {
                        position: toast.POSITION.BOTTOM_LEFT
                    });
                } else {
                    console.log(r.content.data.docs)
                    setClasses(r.content.data.docs)
                }
            })
        } catch (error) {
            console.log(error);
        }
    }, [false]);

    return (
        <div className="Teacher_Home">
            <TeacherSideMenu titleSelected={1}/>
            <div className="Teacher_Home_Content">
                <ClassesList classes={classes} dialog={props.dialog} comment={handleCommentOpen}/>
            </div>
            <div className="Teacher_Home_Add" onClick={() => props.dialog("Crear clase")}>
                <img className="Teacher_Home_Add_Image"
                     src={process.env.PUBLIC_URL + '/class/add.png'}
                     alt={props.alt} />
            </div>
            <CommentDialog
                open={open}
                handleClickOpen={handleCommentOpen}
                handleClose={handleCommentClose}/>
        </div>
    );
}

function ClassesList(props) {
    const userAuth = useSelector((state) => state.userAuth);
    const classes = props.classes;
    const [items, setItems] = React.useState([]);

    useEffect(() => {
        setItems(classes)
    }, [classes]);

    const onDelete = (key) => {
        deleteClass(userAuth.token, key).then(r => {
            if(r.status !== 200) {
                toast.error('No pudimos eliminar la clase (' + r.status + ')' , {
                    position: toast.POSITION.BOTTOM_LEFT
                });
            } else {
                window.location.reload()
            }
        })
    };

    const listItems = items.map((c) =>
        <ListItem key={c.key} class={c} dialog={props.dialog} onDelete={onDelete} comment={props.comment}/>
    );
    return (
        <ul className="Teacher_Home_List">{listItems}</ul>
    );
}

function ListItem(props) {
    const userAuth = useSelector((state) => state.userAuth);
    const [published, setPublished] = React.useState(true);
    const [open, setOpen] = React.useState(false);
    const c = props.class;
    let publishedIcon

    useEffect(() => {
        setPublished(props.activo ?? true)
    }, [props.activo]);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handlePublishState = () => {
        if (published) {
            pauseClass(userAuth.token, c.id).then(r => {
                if(r.status !== 200) {
                    toast.error('No pudimos pausar la clase (' + r.status + ')' , {
                        position: toast.POSITION.BOTTOM_LEFT
                    });
                } else {
                    setPublished(!published);
                }
            })
        } else {
            playClass(userAuth.token, c.id).then(r => {
                if(r.status !== 200) {
                    toast.error('No pudimos empezar la clase (' + r.status + ')' , {
                        position: toast.POSITION.BOTTOM_LEFT
                    });
                } else {
                    setPublished(!published);
                }
            })
        }
    };

    if (published) {
        publishedIcon = 'pause'
    } else {
        publishedIcon = 'play'
    }

    return (
        <li className="Teacher_Home_Item">
            <div className="Teacher_Home_Item_Left">
                <p className="Teacher_Home_Item_Text_Bold">{c.nombre}</p>
                <p className="Teacher_Home_Item_Text_Normal">{c.materia}</p>
                <p className="Teacher_Home_Item_Text_Light">{c.duracion}</p>
                <p className="Teacher_Home_Item_Text_Light">{c.frecuencia}</p>
                <p className="Teacher_Home_Item_Text_Light">{c.costo}</p>
            </div>
            <div className="Teacher_Home_Item_Right">
                <ClassAction
                    onClick={handlePublishState}
                    image={publishedIcon}
                    alt={publishedIcon}/>
                <ClassAction
                    onClick={handleClickOpen}
                    image="edit"
                    alt="edit"/>
                <ClassAction
                    onClick={() => props.onDelete(c.key)}
                    image="delete"
                    alt="delete"/>
                <ClassAction
                    onClick={props.comment}
                    image="comment"
                    alt="comment"/>
            </div>
            <ModifyClassDialog
                open={open}
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
                course={c}/>
        </li>
    );
}

function ClassAction(props) {
    return (
        <div className="Teacher_Home_Item_Actionable" onClick={props.onClick}>
            <img className="Teacher_Home_Item_Actionable_Image"
                 src={process.env.PUBLIC_URL + '/class/' + props.image + '.png'}
                 alt={props.alt} />
        </div>
    );
}

async function getTeacherClasses(token) {
    const response = await fetch(`http://localhost:4000/teacherClasses/`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json', 'x-access-token': token}
    })
    return {status: response.status, content: await response.json()};
}

async function pauseClass(token, id) {
    const response = await fetch(`http://localhost:4000/teacherClasses/pause`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json', 'x-access-token': token},
        body: JSON.stringify({key: id})
    })
    return {status: response.status, content: await response.json()};
}

async function playClass(token, id) {
    const response = await fetch(`http://localhost:4000/teacherClasses/start`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json', 'x-access-token': token},
        body: JSON.stringify({key: id})
    })
    return {status: response.status, content: await response.json()};
}

async function deleteClass(token, id) {
    const response = await fetch(`http://localhost:4000/teacherClasses/`, {
        method: 'delete',
        headers: {'Content-Type': 'application/json', 'x-access-token': token},
        body: JSON.stringify({key: id})
    })
    return {status: response.status};
}
