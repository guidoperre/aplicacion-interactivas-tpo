import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import reportWebVitals from './config/reportWebVitals';
import {RouterProvider} from "react-router-dom";
import {router} from "./routes/Router";
import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./auth/userAuthSlice.ts";
import {Provider} from "react-redux";
import {StateLoader} from "./config/StateLoader"

const stateLoader = new StateLoader();

const store = configureStore({
    reducer: {
        userAuth: authReducer
    },
    preloadedState: stateLoader.loadState()
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

store.subscribe(() => {
    //this is just a function that saves state to localStorage
    stateLoader.saveState(store.getState());
});
