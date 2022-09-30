import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {TeacherHomeHeader} from "./header/TeacherHomeHeader";
import {TeacherHome} from "./main/TeacherHome";
import ClassDialog from "./modal/ModalClass";

export default function TeacherHomeScreen() {
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState("");

    const handleClickOpen = (title) => {
        setOpen(true);
        setTitle(title)
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="Teacher_Home_Screen">
            <TeacherHomeHeader dialog={handleClickOpen}/>
            <TeacherHome dialog={handleClickOpen}/>
            <ToastContainer/>
            <ClassDialog
                open={open}
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
                title={title}/>
        </div>
    );
}