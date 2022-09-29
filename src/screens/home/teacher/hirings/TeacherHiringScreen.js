import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {TeacherHiringHeader} from "./header/TeacherHiringHeader";
import {TeacherHiring} from "./main/TeacherHiring";

export default function TeacherHiringScreen() {

    return (
        <div className="Teacher_Hiring_Screen">
            <TeacherHiringHeader/>
            <TeacherHiring/>
            <ToastContainer/>
        </div>
    );
}
