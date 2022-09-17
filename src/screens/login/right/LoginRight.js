import React from "react";
import './LoginRight.css';

export function LoginRight() {
    return (
        <div className="LoginRight">
            <div className="Decoration">
                <div className="Login_Card">
                    <div className="Login_Card_Emoji_Left">
                        <p className="Login_Card_Emoji">📚</p>
                    </div>
                    <div className="Vertical_Stick"/>
                    <div className="Horizontal_Stick"/>
                    <div className="Login_Card_Image_Container">
                        <p className="Login_Card_Title">EL FUTURO EN TUS MANOS</p>
                        <img className="Login_Card_Image"
                             src={process.env.PUBLIC_URL + "/home/home_image.png"}
                             alt="logo"/>
                    </div>
                    <div className="Login_Card_Emoji_Right">
                        <p className="Login_Card_Emoji">📖</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
