import React from "react";
import './SessionCard.css';

export function SessionCard() {
    return (
        <div className="Session_Card">
            <div className="Session_Card_Emoji_Left">
                <p className="Session_Card_Emoji">📚</p>
            </div>
            <div className="Session_Vertical_Stick"/>
            <div className="Session_Horizontal_Stick"/>
            <div className="Session_Card_Image_Container">
                <p className="Session_Card_Title">EL FUTURO EN TUS MANOS</p>
                <img className="Session_Card_Image"
                     src={process.env.PUBLIC_URL + "/home/home_image.png"}
                     alt="logo"/>
            </div>
            <div className="Session_Card_Emoji_Right">
                <p className="Session_Card_Emoji">📖</p>
            </div>
        </div>
    )
}
