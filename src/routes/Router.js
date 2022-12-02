import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import MainScreen from "../screens/main/MainScreen";
import LoginScreen from "../screens/login/LoginScreen";
import RegisterScreen from "../screens/register/main/RegisterScreen";
import ForgotScreen from "../screens/forgot/ForgotScreen";
import StudentRegisterScreen from "../screens/register/student/StudentRegisterScreen";
import TeacherRegisterScreen from "../screens/register/teacher/TeacherRegisterScreen";
import TeacherHomeScreen from "../screens/home/teacher/classes/TeacherHomeScreen";
import TeacherHiringScreen from "../screens/home/teacher/hirings/TeacherHiringScreen";
import TeacherCommentScreen from "../screens/home/teacher/comments/TeacherCommentScreen";
import StudentClassesScreen from "../screens/home/student/qualify/StudentClassesScreen";
import SearchClassScreen from "../screens/home/student/search/SearchClassScreen";
import StudentClassScreen from "../screens/home/student/class/StudentClassScreen";
import RecoverScreen from "../screens/recover/RecoverScreen";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainScreen/>
    },
    {
        path: '/login',
        element: <LoginScreen/>
    },
    {
        path: '/register',
        element: <RegisterScreen/>
    },
    {
        path: '/register/student',
        element: <StudentRegisterScreen/>
    },
    {
        path: '/register/teacher',
        element: <TeacherRegisterScreen/>
    },
    {
        path: '/recoverPassword',
        element: <RecoverScreen/>
    },
    {
        path: '/forgotpassword',
        element: <ForgotScreen/>
    },
    {
        path: '/home/teacher/classes',
        element: <TeacherHomeScreen/>
    },
    {
        path: '/home/teacher/hiring',
        element: <TeacherHiringScreen/>
    },
    {
        path: '/home/teacher/comments',
        element: <TeacherCommentScreen/>
    },
    {
        path: '/home/student/search',
        element: <SearchClassScreen/>
    },
    {
        path: '/home/student/search/class',
        element: <StudentClassScreen/>
    },
    {
        path: '/home/student/classes',
        element: <StudentClassesScreen/>
    }
]);
