import React from "react";
import './LoginRight.css';

export function LoginRight() {
    return (
        <div className="LoginRight">
            <div className="Decoration">
                <div className="Card">
                    <div className="Card_Emoji_Left">
                        <p className="Card_Emoji">📚</p>
                    </div>
                    <div className="Vertical_Stick"/>
                    <div className="Horizontal_Stick"/>
                    <div className="Card_Image_Container">
                        <p className="Card_Title">EL FUTURO EN TUS MANOS</p>
                        <img className="Card_Image"
                             src={process.env.PUBLIC_URL + "/home/home_image.png"}
                             alt="logo"/>
                    </div>
                    <div className="Card_Emoji_Right">
                        <p className="Card_Emoji">📖</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
