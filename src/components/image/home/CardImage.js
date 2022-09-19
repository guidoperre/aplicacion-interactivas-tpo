import React from "react";
import './CardImage.css';

export function CardImage(props) {
    return(
        <div className="Card">
            <div className="Card_Emoji_Left">
                <p className="Card_Emoji">{props.leftEmoji}</p>
            </div>
            <div className="Card_Image_Container">
                <img className="Card_Image"
                     src={process.env.PUBLIC_URL + props.imagePath}
                     alt="logo"/>
            </div>
            <div className="Card_Emoji_Right">
                <p className="Card_Emoji">{props.rightEmoji}</p>
            </div>
        </div>
    );
}
