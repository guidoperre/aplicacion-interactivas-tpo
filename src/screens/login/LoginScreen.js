import React from 'react';
import { ToastContainer } from 'react-toastify';
import './LoginScreen.css';
import 'react-toastify/dist/ReactToastify.css';
import {LoginLeft} from "./left/LoginLeft";
import {LoginRight} from "./right/LoginRight";

export default function LoginScreen() {
    return (
        <div className="LoginScreen">
            <LoginLeft/>
            <LoginRight/>
            <ToastContainer/>
        </div>
    );
}
