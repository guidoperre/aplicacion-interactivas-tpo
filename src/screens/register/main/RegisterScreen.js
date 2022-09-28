import React from 'react';
import { ToastContainer } from 'react-toastify';
import './RegisterScreen.css';
import 'react-toastify/dist/ReactToastify.css';
import {RegisterLeft} from "./left/RegisterLeft";
import {RegisterRight} from "./right/RegisterRight";

export default function RegisterScreen() {
    return (
        <div className="RegisterScreen">
            <RegisterLeft/>
            <RegisterRight/>
            <ToastContainer/>
        </div>
    );
}
