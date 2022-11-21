import React, {useEffect} from "react";
import './TeacherComment.css';
import BlockDialog from "../modal/ModalBlock";
import TeacherSideMenu from "../../navigation/TeacherSideMenu";
import {useSelector} from "react-redux";
import {toast} from "react-toastify";

export function TeacherComment() {
    const userAuth = useSelector((state) => state.userAuth);
    const [comments, setComments] = React.useState([]);

    useEffect(() => {
        try {
            getTeacherComments(userAuth.token).then(r => {
                if(r.status !== 200) {
                    toast.error('No pudimos obtener la informacion de los comentarios (' + r.status + ')' , {
                        position: toast.POSITION.BOTTOM_LEFT
                    });
                } else {
                    setComments(r.content.data.docs)
                }
            })
        } catch (error) {
            console.log(error);
        }
    }, [false]);

    return (
        <div className="Teacher_Comment">
            <TeacherSideMenu titleSelected={3}/>
            <div className="Teacher_Comment_Content">
                <CommentList comment={comments}/>
            </div>
        </div>
    );
}

function CommentList(props) {
    const userAuth = useSelector((state) => state.userAuth);
    const comments = props.comment;
    const [items, setItems] = React.useState([]);

    useEffect(() => {
        setItems(comments)
    }, [comments]);

    const onDelete = (key, message) => {
        deleteComment(userAuth.token, key, message).then(r => {
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
        approveComment(userAuth.token, key).then(r => {
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
            comment={h}
            onDelete={onDelete}
            onApprove={onApprove}/>
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
        <li className="Teacher_Comment_Item">
            <div className="Teacher_Comment_Left">
                <p className="Teacher_Comment_Text_Bold">{c.autor}</p>
                <p className="Teacher_Comment_Text_Normal">{c.descripcion}</p>
            </div>
            <div className="Teacher_Comment_Right">
                <img className="Teacher_Comment_Image"
                     src={process.env.PUBLIC_URL + '/class/approve.png'}
                     alt="approve"
                     onClick={() => props.onApprove(c.key)}/>
                <img className="Teacher_Comment_Image"
                     src={process.env.PUBLIC_URL + '/class/block.png'}
                     alt="block"
                     onClick={handleClickOpen}/>
            </div>
            <BlockDialog
                open={open}
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
                onDelete={(message) => props.onDelete(c.key, message)}/>
        </li>
    );
}

async function getTeacherComments(token) {
    const response = await fetch(`http://localhost:4000/comments/`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json', 'x-access-token': token}
    })
    return {status: response.status, content: await response.json()};
}

async function deleteComment(token, id, message) {
    const response = await fetch(`http://localhost:4000/comments/`, {
        method: 'delete',
        headers: {'Content-Type': 'application/json', 'x-access-token': token},
        body: JSON.stringify({key: id})
    })
    return {status: response.status};
}

async function approveComment(token, id) {
    const response = await fetch(`http://localhost:4000/comments/`, {
        method: 'delete',
        headers: {'Content-Type': 'application/json', 'x-access-token': token},
        body: JSON.stringify({key: id})
    })
    return {status: response.status};
}
