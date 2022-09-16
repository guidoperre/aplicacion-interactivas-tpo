import {toast} from "react-toastify";
import React from "react";
import './Home.css';

export function Home() {
    return (
        <div className="Home">
            <div className="Home_Content">
                <div className="Brand_Container">
                    <p className="Brand_Subtitle">AHORA TENES</p>
                    <p className="Brand_Title">EL FUTURO EN TUS MANOS</p>
                    <p className="Brand_Description">En Institular ayudamos a los alumnos a que puedan encontrar a su profesor ideal. Le ofrecemos una plataforma donde va a poder buscar todas las clases que siempre quiso asistir.</p>
                    <div className="Brand_Action" onClick={onCreateShopClicked}>
                        <p className="Brand_Action_Text">BUSCA CURSOS</p>
                    </div>
                </div>
                <div className="Decoration">
                    <div className="Decoration_Emoji_Left">
                        <p className="Decoration_Emoji">📗</p>
                    </div>
                    <div className="Decoration_Image_Container">
                        <img className="Decoration_Image"
                             src={process.env.PUBLIC_URL + '/home/home_image.png'}
                             alt="logo" />
                    </div>
                    <div className="Decoration_Emoji_Right">
                        <p className="Decoration_Emoji">📘</p>
                    </div>
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
