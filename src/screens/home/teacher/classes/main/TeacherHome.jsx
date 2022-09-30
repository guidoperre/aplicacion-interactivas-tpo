import React from "react";
import './TeacherHome.css';
import mock from "../../../../../components/data/teacher/clases.json";
import CommentDialog from "../modal/ModalComment";

export function TeacherHome(props) {
    const [open, setOpen] = React.useState(false);

    const handleCommentOpen = () => {
        setOpen(true);
    };

    const handleCommentClose = () => {
        setOpen(false);
    };

    const onHiringClicked = () => {
        window.location.href='/home/teacher/hiring'
    };
    const onCommentsClicked = () => {
        window.location.href='/home/teacher/comments'
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
                <div className="Teacher_Comment_Navigator_Button" onClick={onCommentsClicked}>
                    <p className="Teacher_Comment_Navigator_Button_Title">Comentarios</p>
                </div>
            </div>
            <div className="Teacher_Home_Content">
                <ClassesList classes={mock.clases} dialog={props.dialog} comment={handleCommentOpen}/>
            </div>
            <CommentDialog
                open={open}
                handleClickOpen={handleCommentOpen}
                handleClose={handleCommentClose}/>
        </div>
    );
}

function ClassesList(props) {
    const classes = props.classes;

    const [items, setItems] = React.useState(classes);

    const onDelete = (key) => {
        setItems((items) => items.filter((item, _) => item.key !== key));
    };

    const listItems = items.map((c) =>
        <ListItem key={c.key} class={c} dialog={props.dialog} onDelete={onDelete} comment={props.comment}/>
    );
    return (
        <ul className="Teacher_Home_List">{listItems}</ul>
    );
}

function ListItem(props) {
    const [published, setPublished] = React.useState(true);

    const handlePublishState = () => {
        setPublished(!published);
    };

    let publishedIcon
    const c = props.class;

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
                    onClick={() => props.dialog("Modificar clase")}
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
