import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {HomeHeader} from "../../header/HomeHeader";
import {StudentClass} from "./main/StudentClass";
import StudentSideMenu from "../navigation/StudentSideMenu";

export default function StudentClassScreen() {
    return (
        <div className="Student_Class_Screen">
            <HomeHeader/>
            <StudentSideMenu titleSelected={1}/>
            <StudentClass/>
            <ToastContainer/>
        </div>
    );
}
