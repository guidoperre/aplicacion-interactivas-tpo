import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {StudentQualify} from "./main/StudentQualify";
import {HomeHeader} from "../../header/HomeHeader";

export default function StudentQualifyScreen() {
    return (
        <div className="Teacher_Comment_Screen">
            <HomeHeader/>
            <StudentQualify/>
            <ToastContainer/>
        </div>
    );
}