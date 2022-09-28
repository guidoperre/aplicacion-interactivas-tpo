import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import MainScreen from "../screens/main/MainScreen";
import LoginScreen from "../screens/login/LoginScreen";
import RegisterScreen from "../screens/register/RegisterScreen";
import FinderScreen from "../screens/finder/FinderScreen";
import RegisterScreen from "../screens/register/main/RegisterScreen";
import ForgotScreen from "../screens/forgot/ForgotScreen";

export default function AppRouter() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<MainScreen/>}/>
                    <Route path="/login" element={<LoginScreen/>}/>
                    <Route path="/register" element={<RegisterScreen/>}/>
                    <Route path="/finder" element={<FinderScreen/>}/>
                    <Route path="/forgotpassword" element={<ForgotScreen/>}/>
                </Routes>
            </div>
        </Router>
    );
}
