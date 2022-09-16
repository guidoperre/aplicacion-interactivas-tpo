import {toast} from "react-toastify";
import React from "react";
import './Home.css';

export function Home() {
    return (
        <div className="Home">
            <div className="Home_Content">
                <div className="Brand_Container">
                    <p className="Brand_Subtitle">AHORA TENES</p>
                    <p className="Brand_Title">EL MUNDO EN TUS MANOS</p>
                    <p className="Brand_Description">En instituto ayudamos a los comercios a que puedan digitalizarse. Ponemos tu comercio en el mapa para que pueda ser visible por todos los usuarios cercanos, aumentando asi tus ventas.</p>
                    <div className="Brand_Action" onClick={onCreateShopClicked}>
                        <p className="Brand_Action_Text">CREA TU TIENDA</p>
                    </div>
                </div>
                <div className="Decoration">
                    <div className="Decoration_Emoji_Left">
                        <img className="Decoration_Emoji"
                             src={process.env.PUBLIC_URL + '/home/home_shop_emoji.png'}
                             alt="logo" />
                    </div>
                    <div className="Decoration_Image_Container">
                        <img className="Decoration_Image"
                             src={process.env.PUBLIC_URL + '/home/home_image.png'}
                             alt="logo" />
                    </div>
                    <div className="Decoration_Emoji_Right">
                        <img className="Decoration_Emoji"
                             src={process.env.PUBLIC_URL + '/home/home_glasses_emoji.png'}
                             alt="logo" />
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
