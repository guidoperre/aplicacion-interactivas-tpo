import React from "react";
import './RegisterRight.css';

export function RegisterRight() {
    return (
        <div className="RegisterRight">
            <div className="Decoration">
                <div className="Register_Card">
                    <div className="Register_Card_Emoji_Left">
                        <p className="Register_Card_Emoji">📚</p>
                    </div>
                    <div className="Vertical_Stick"/>
                    <div className="Horizontal_Stick"/>
                    <div className="Register_Card_Image_Container">
                        <p className="Register_Card_Title">EL FUTURO EN TUS MANOS</p>
                        <img className="Register_Card_Image"
                             src={process.env.PUBLIC_URL + "/home/home_image.png"}
                             alt="logo"/>
                    </div>
                    <div className="Register_Card_Emoji_Right">
                        <p className="Register_Card_Emoji">📖</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
