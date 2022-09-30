import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {StudentClasses} from "./main/StudentClasses";
import {HomeHeader} from "../../header/HomeHeader";
import StudentSideMenu from "../navigation/StudentSideMenu";

export default function StudentClassesScreen() {
    return (
        <div className="Teacher_Comment_Screen">
            <HomeHeader/>
            <StudentClasses/>
            <StudentSideMenu titleSelected={2}/>
            <ToastContainer/>
        </div>
    );
}