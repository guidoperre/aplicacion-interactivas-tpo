import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Home} from "./home/Home";
import {Description} from "./description/Description";
import {Header} from "./header/Header";
import {Footer} from "./footer/Footer";

export default function MainScreen() {
    return (
        <div>
            <Header/>
            <Home/>
            <Description/>
            <Footer/>
            <ToastContainer/>
        </div>
    );
}
