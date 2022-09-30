import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {TeacherCommentHeader} from "./header/TeacherCommentHeader";
import {TeacherComment} from "./main/TeacherComment";

export default function TeacherCommentScreen() {
    return (
        <div className="Teacher_Comment_Screen">
            <TeacherCommentHeader/>
            <TeacherComment/>
            <ToastContainer/>
        </div>
    );
}
