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

export default function AppRouter() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<MainScreen/>}/>
                    <Route path="/login" element={<LoginScreen/>}/>
                    <Route path="/register" element={<RegisterScreen/>}/>
                    <Route path="/register/student" element={<StudentRegisterScreen/>}/>
                    <Route path="/finder" element={<FinderScreen/>}/>
                    <Route path="/forgotpassword" element={<ForgotScreen/>}/>
                </Routes>
            </div>
        </Router>
    );
}
