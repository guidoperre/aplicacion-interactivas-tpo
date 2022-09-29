import React from 'react';
import { ToastContainer } from 'react-toastify';
import './TeacherRegisterScreen.css';
import 'react-toastify/dist/ReactToastify.css';
import {TeacherRegisterLeft} from "./left/TeacherRegisterLeft";
import {TeacherRegisterRight} from "./right/TeacherRegisterRight";

export default function TeacherRegisterScreen() {
    return (
        <div className="TeacherRegisterScreen">
            <TeacherRegisterLeft/>
            <TeacherRegisterRight/>
            <ToastContainer/>
        </div>
    );
}
