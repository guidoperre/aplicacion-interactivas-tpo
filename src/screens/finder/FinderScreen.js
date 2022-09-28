import React from 'react';
import { ToastContainer } from 'react-toastify';
import './FinderScreen.css';
import 'react-toastify/dist/ReactToastify.css';
import {FinderFilter} from "./FinderFilter/FinderFilter";

export default function FinderScreen() {
    return (
        <div className="FinderScreen">      
            <FinderFilter/>
            <ToastContainer/>
        </div>
    );
}
