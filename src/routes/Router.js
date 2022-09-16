import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import MainScreen from "../screens/main/MainScreen";

export default function AppRouter() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<MainScreen/>}/>
                    <Route path="/login" element={<MainScreen/>}/>
                    <Route path="/register" element={<MainScreen/>}/>
                </Routes>
            </div>
        </Router>
    );
}
