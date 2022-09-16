import {toast} from "react-toastify";
import React from "react";
import './Home.css';
import {CardImage} from "../../../components/image/CardImage";

export function Home() {
    return (
        <div className="Home">
            <div className="Home_Content">
                <div className="Brand_Container">
                    <p className="Brand_Subtitle">AHORA TENES</p>
                    <p className="Brand_Title">EL FUTURO EN TUS MANOS</p>
                    <p className="Brand_Description">En Institular ayudamos a los alumnos a que puedan encontrar a su profesor ideal. Le ofrecemos una plataforma donde va a poder buscar todas las clases que siempre quiso asistir.</p>
                    <div className="Brand_Action" onClick={onCreateShopClicked}>
                        <p className="Brand_Action_Text">CREAR CUENTA</p>
                    </div>
                </div>
                <div className="Decoration">
                    <CardImage
                        leftEmoji="📗"
                        rightEmoji="📘"
                        imagePath="/home/home_image.png"/>
                </div>
            </div>
        </div>
    );
}

const onCreateShopClicked = () => {
    showSuccessToast()
};

function showSuccessToast() {
    toast.info('En desarrollo 🔨👷‍', {
        position: toast.POSITION.BOTTOM_LEFT
    });
}
