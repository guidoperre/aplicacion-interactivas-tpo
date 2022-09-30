import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {HomeHeader} from "../../header/HomeHeader";
import {SearchClass} from "./main/SearchClass";
import StudentSideMenu from "../navigation/StudentSideMenu";

export default function SearchClassScreen() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="Teacher_Hiring_Screen">
            <HomeHeader/>
            <StudentSideMenu titleSelected={1}/>
            <SearchClass dialog={handleClickOpen}/>
            <ToastContainer/>
        </div>
    );
}
