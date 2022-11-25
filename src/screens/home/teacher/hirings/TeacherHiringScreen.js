import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {TeacherHiring} from "./main/TeacherHiring";
import ContactDialog from "./modal/ModalContact";
import {HomeHeader} from "../../header/HomeHeader";

export default function TeacherHiringScreen() {
    const [open, setOpen] = React.useState(false);
    const [hiring, setHiring] = React.useState({});

    const handleClickOpen = (h) => {
        setHiring(h)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="Teacher_Hiring_Screen">
            <HomeHeader/>
            <TeacherHiring dialog={handleClickOpen}/>
            <ToastContainer/>
            <ContactDialog
                open={open}
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
                h={hiring}/>
        </div>
    );
}
