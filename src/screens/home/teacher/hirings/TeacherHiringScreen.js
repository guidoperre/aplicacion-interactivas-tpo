import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {TeacherHiring} from "./main/TeacherHiring";
import ContactDialog from "./modal/ModalContact";
import {TeacherHeader} from "../../header/TeacherHeader";

export default function TeacherHiringScreen() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="Teacher_Hiring_Screen">
            <TeacherHeader/>
            <TeacherHiring dialog={handleClickOpen}/>
            <ToastContainer/>
            <ContactDialog
                open={open}
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}/>
        </div>
    );
}
