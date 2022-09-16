import React from "react";
import './Footer.css';
import {Logo} from "../commons/logo/Logo";
import {onPrivacyPolicyClicked, onSocialClicked, onTermsAndConditionsClicked} from "./FooterNavigation";

export function Footer() {
    return (
        <header className="Footer">
            <div className="Footer_Top_Container">
                <Logo className="Footer_Logo" image='institular_logo_white' color='#FFFFFF'/>
                <div className="Social_Container">
                    <SocialLink image='youtube_icon' url='https://'/>
                    <SocialLink image='facebook_icon' url='https://'/>
                    <SocialLink image='instagram_icon' url='https://'/>
                </div>
            </div>
            <div className="Footer_Bottom_Container">
                <div className="Legal_Container">
                    <p className="Footer_Clickable_Text" onClick={onPrivacyPolicyClicked}>Politicas de privacidad</p>
                    <p className="Footer_Clickable_Text" onClick={onTermsAndConditionsClicked}>Términos y condiciones</p>
                </div>
                <p className="Footer_Text">2022 institular ®. Reservados todos los derechos.</p>
            </div>
        </header>
    );
}

function SocialLink(props) {
    return (
        <div className="Social_Link" onClick={() => onSocialClicked(props.url)}>
            <img className="Social_Image"
                 src={process.env.PUBLIC_URL + '/social/' + props.image + '.png'}
                 alt="logo" />
        </div>
    );
}
