import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {TeacherComment} from "./main/TeacherComment";
import {TeacherHeader} from "../../header/TeacherHeader";

export default function TeacherCommentScreen() {
    return (
        <div className="Teacher_Comment_Screen">
            <TeacherHeader/>
            <TeacherComment/>
            <ToastContainer/>
        </div>
    );
}
