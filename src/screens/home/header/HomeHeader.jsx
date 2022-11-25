import React from "react";
import './HomeHeader.css';
import {Logo} from "../../../components/logo/Logo";
import {setToken} from "../../../auth/userAuthSlice.ts";
import {useDispatch} from "react-redux";

export function HomeHeader() {
    const dispatch = useDispatch();
    const onLogoutClicked = () => {
        dispatch(setToken(null));
        window.location.href='/login'
    };

    return (
        <header className="Home_Header">
            <Logo image={'institular_logo'} color={'#6c8ed0'} />
            <div className="Logout" onClick={onLogoutClicked}>
                <p className="Logout_Text">CERRAR SESIÓN</p>
            </div>
        </header>
    );
}
