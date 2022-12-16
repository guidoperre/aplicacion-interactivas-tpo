import * as React from 'react';
import '../comment/ClassCommentDialog.css';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from "@mui/material/DialogActions";
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

export default function ClassCommentDialog(props) {
    const [comment, setComment] = React.useState("");
    const userAuth = useSelector((state) => state.userAuth);

    const onCommentClick = () => {
        try {
            postComment(userAuth.token, comment, props.selectedClass).then(r => {
                if(r.status !== 201) {
                    toast.error('No pudimos publicar el comentario (' + r.status + ')' , {
                        position: toast.POSITION.BOTTOM_LEFT
                    });
                } else {
                    props.handleClose()
                }
            })
        } catch (error) {
            console.log(error);
        } finally {
            props.handleClose()
        }
    };

    return (
        <BootstrapDialog
            onClose={props.handleClose}
            aria-labelledby="customized-dialog-title"
            open={props.open}>
            <DialogTitle sx={{ marginTop: 2, marginLeft: 4, p: 0 }}>
                <p className="Modal_Title">Comentar</p>
            </DialogTitle>
            <DialogContent>
                <div className="Class_Comment_Dialog_Content">
                    <label className="Class_Comment_Dialog_Label">
                        <p className="Class_Comment_Dialog_Label_Title">Comentario</p>
                        <textarea
                            className="Class_Comment_TextArea"
                            placeholder="Me gusto mucho la clase porque..."
                            value = {comment}
                            onChange={(e) => setComment(e.target.value)}/>
                    </label>
                </div>
            </DialogContent>
            <DialogActions>
                <div className="Modal_Button" onClick={onCommentClick}>
                    <p className="Modal_Button_Text">Enviar</p>
                </div>
            </DialogActions>
        </BootstrapDialog>
    );
}

async function postComment(token, comment, courseKey) {
    debugger;
    const response = await fetch(`http://localhost:4000/comments/create`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'x-access-token': token},
        body: JSON.stringify({comment: comment, classKey: courseKey})
    })
    return {status: response.status, content: await response.json()};
}
