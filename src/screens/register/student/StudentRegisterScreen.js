import React from 'react';
import { ToastContainer } from 'react-toastify';
import './StudentRegisterScreen.css';
import 'react-toastify/dist/ReactToastify.css';
import {StudentRegisterLeft} from "./left/StudentRegisterLeft";
import {StudentRegisterRight} from "./right/StudentRegisterRight";

export default function StudentRegisterScreen() {
    return (
        <div className="StudentRegisterScreen">
            <StudentRegisterLeft/>
            <StudentRegisterRight/>
            <ToastContainer/>
        </div>
    );
}
