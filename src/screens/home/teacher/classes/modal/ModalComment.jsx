import * as React from 'react';
import './ModalClass.css';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import mock from "../../../../../components/data/comment/comments.json";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function CommentDialog(props) {
    const comments = mock.comentarios;

    const [items, setItems] = React.useState(comments);

    const onBlock = (key) => {
        setItems((items) => items.filter((item, _) => item.key !== key));
    };

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
