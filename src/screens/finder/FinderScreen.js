import React from 'react';
import { ToastContainer } from 'react-toastify';
import './FinderScreen.css';
import {Logo} from "../../components/logo/Logo";
import 'react-toastify/dist/ReactToastify.css';

export default function FinderScreen() {
    return (
        <div>
            <div className="Logo_Container">
                <Logo image="institular_logo" color="#6c8ed0"/>
            </div>
            <div>
                hola
                <ToastContainer/>
            </div>
            
        </div>
    );
}
