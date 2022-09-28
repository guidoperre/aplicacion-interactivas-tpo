import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import MainScreen from "../screens/main/MainScreen";
import LoginScreen from "../screens/login/LoginScreen";
import RegisterScreen from "../screens/register/RegisterScreen";
<<<<<<< HEAD
import FinderScreen from "../screens/finder/FinderScreen";
=======
import ForgotScreen from "../screens/forgot/ForgotScreen";
>>>>>>> 79263d66d5a6693f7aa5c8355c278158a163d598

export default function AppRouter() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<MainScreen/>}/>
                    <Route path="/login" element={<LoginScreen/>}/>
                    <Route path="/register" element={<RegisterScreen/>}/>
<<<<<<< HEAD
                    <Route path="/finder" element={<FinderScreen/>}/>
=======
                    <Route path="/forgotpassword" element={<ForgotScreen/>}/>
>>>>>>> 79263d66d5a6693f7aa5c8355c278158a163d598
                </Routes>
            </div>
        </Router>
    );
}
