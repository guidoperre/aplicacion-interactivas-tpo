import React from 'react';
import { ToastContainer } from 'react-toastify';
import './ForgotScreen.css';
import 'react-toastify/dist/ReactToastify.css';
import {ForgotLeft} from "./left/ForgotLeft";
import {ForgotRight} from "./right/ForgotRight";

export default function ForgotScreen() {
    return (
        <div className="ForgotScreen">
            <ForgotLeft/>
            <ForgotRight/>
            <ToastContainer/>
        </div>
    );
}
