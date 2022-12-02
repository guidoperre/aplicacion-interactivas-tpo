import React from 'react';
import { ToastContainer } from 'react-toastify';
import './RecoverScreen.css';
import 'react-toastify/dist/ReactToastify.css';
import {RecoverLeft} from "./left/RecoverLeft";
import {RecoverRight} from "./right/RecoverRight";

export default function RecoverScreen() {
    return (
        <div className="RecoverScreen">
            <RecoverLeft/>
            <RecoverRight/>
            <ToastContainer/>
        </div>
    );
}
