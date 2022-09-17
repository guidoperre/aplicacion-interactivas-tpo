import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import MainScreen from "../screens/main/MainScreen";
import LoginScreen from "../screens/login/LoginScreen";
import RegisterScreen from "../screens/register/RegisterScreen";

export default function AppRouter() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<MainScreen/>}/>
                    <Route path="/login" element={<LoginScreen/>}/>
                    <Route path="/register" element={<RegisterScreen/>}/>
                </Routes>
            </div>
        </Router>
    );
}
