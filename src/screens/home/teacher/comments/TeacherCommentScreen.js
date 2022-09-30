import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {TeacherComment} from "./main/TeacherComment";
import {HomeHeader} from "../../header/HomeHeader";

export default function TeacherCommentScreen() {
    return (
        <div className="Teacher_Comment_Screen">
            <HomeHeader/>
            <TeacherComment/>
            <ToastContainer/>
        </div>
    );
}
