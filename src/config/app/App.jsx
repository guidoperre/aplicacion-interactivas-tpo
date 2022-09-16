import React, {useRef} from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Home} from "../../screens/main/home/Home";
import {Description} from "../../screens/main/description/Description";
import {Header} from "../../screens/main/header/Header";
import {Footer} from "../../screens/main/footer/Footer";

export default function App() {
    const descriptionSection = useRef(null);
    const priceSection = useRef(null);
    const faqSection = useRef(null);
    const contactSection = useRef(null);

    return (
        <div>
            <Header
                description={descriptionSection}
                price={priceSection}
                faq={faqSection}
                contact={contactSection}/>
            <Home/>
            <Description section={descriptionSection}/>
            <Footer/>
            <ToastContainer/>
        </div>
    );
}
