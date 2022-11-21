import * as React from 'react';
import './add/ModalClass.css';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import {useSelector} from "react-redux";
import {toast} from "react-toastify";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function CommentDialog(props) {
    const userAuth = useSelector((state) => state.userAuth);
    let comments = [];

    const [items, setItems] = React.useState(comments);

    const onBlock = (key) => {
        setItems((items) => items.filter((item, _) => item.key !== key));
    };

    try {
        getClassComments(userAuth.token, props.id ?? -1).then(r => {
            if(r.status !== 200) {
                toast.error('No pudimos obtener los comentarios de la clase (' + r.status + ')' , {
                    position: toast.POSITION.BOTTOM_LEFT
                });
            } else {
                comments = r.content
            }
        })
    } catch (error) {
        console.log(error);
    }

    const listItems = items.map((c) =>
        <ListComment key={c.key} comment={c} onBlock={onBlock}/>
    );

    return (
        <BootstrapDialog
            onClose={props.handleClose}
            aria-labelledby="customized-dialog-title"
            open={props.open}>
            <DialogTitle sx={{ marginTop: 0.5, p: 2}}>
                <p className="Modal_Title">Comentarios</p>
            </DialogTitle>
            <DialogContent>
                <div className="Teacher_Modal_Comment_Content">
                    <ul className="Teacher_Modal_Comment_List">{listItems}</ul>
                </div>
            </DialogContent>
        </BootstrapDialog>
    );
}

function ListComment(props) {
    const c = props.comment;
    return (
        <li className="Teacher_Modal_Comment_Item">
            <div className="Teacher_Modal_Comment_Left">
                <p className="Teacher_Modal_Comment_Text_Bold">{c.autor}</p>
                <p className="Teacher_Modal_Comment_Text_Normal">{c.descripcion}</p>
            </div>
        </li>
    );
}

async function getClassComments(token, id) {
    const response = await fetch(`http://localhost:4000/teacherClasses/`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json', 'x-access-token': token}
    })
    return {status: response.status, content: await response.json()};
}
