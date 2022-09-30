import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import MainScreen from "../screens/main/MainScreen";
import LoginScreen from "../screens/login/LoginScreen";
import FinderScreen from "../screens/finder/FinderScreen";
import RegisterScreen from "../screens/register/main/RegisterScreen";
import ForgotScreen from "../screens/forgot/ForgotScreen";
import StudentRegisterScreen from "../screens/register/student/StudentRegisterScreen";
import TeacherRegisterScreen from "../screens/register/teacher/TeacherRegisterScreen";
import TeacherHome from "../screens/home/teacher/classes/TeacherHomeScreen";
import TeacherHomeScreen from "../screens/home/teacher/classes/TeacherHomeScreen";
import TeacherHiringScreen from "../screens/home/teacher/hirings/TeacherHiringScreen";
import TeacherCommentScreen from "../screens/home/teacher/comments/TeacherCommentScreen";

export default function AppRouter() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<MainScreen/>}/>
                    <Route path="/login" element={<LoginScreen/>}/>
                    <Route path="/register" element={<RegisterScreen/>}/>
                    <Route path="/register/student" element={<StudentRegisterScreen/>}/>
                    <Route path="/register/teacher" element={<TeacherRegisterScreen/>}/>
                    <Route path="/finder" element={<FinderScreen/>}/>
                    <Route path="/forgotpassword" element={<ForgotScreen/>}/>
                    <Route path="/home/teacher/classes" element={<TeacherHomeScreen/>}/>
                    <Route path="/home/teacher/hiring" element={<TeacherHiringScreen/>}/>
                    <Route path="/home/teacher/comments" element={<TeacherCommentScreen/>}/>
                </Routes>
            </div>
        </Router>
    );
}
