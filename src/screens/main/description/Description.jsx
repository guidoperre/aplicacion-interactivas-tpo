import React from "react";
import './Description.css';

export function Description() {
    return (
        <div className="Description">
            <div className="Description_Content">
                <p className="Description_Subtitle">DESCRIPCIÓN</p>
                <p className="Description_Title">¿Quienes somos?</p>
                <p className="Description_Text">En Institular tenemos como misión ayudar a cada alumno que este buscando aprender, a encontrar el curso que siempre soño. Para esto nos encargamos de desarrollar un plataforma completa, donde puedan buscar y administrar todos sus cursos de forma facil y segura.</p>
                <div className="Description_Features_Content">
                    <div className="Description_Features">
                        <Feature
                            icon='🌎'
                            title='Todo en un lugar'
                            description='Centralizamos la listas donde vas a poder encontrar cursos para facilitar el acceso a lo mismo.' />
                        <Feature
                            icon='👩‍💻'
                            title='Autogestionable'
                            description='Vas a poder gestionar tanto tus cursos como tus horarios desde donde quieras y como quieras.' />
                        <Feature
                            icon='👑'
                            title='Tu cursos, tus reglas'
                            description='Al buscar un curso, vas a poder elegir cualquier modalidad que desees y de la forma que buscas.' />
                    </div>
                    <img className="Description_Image"
                         src={process.env.PUBLIC_URL + '/description/description_image.jpg'}
                         alt="description" />
                </div>
            </div>
        </div>
    );
}

function Feature(props) {
    return(
        <div className="Feature">
            <div className="Feature_Title_Container">
                <p className="Feature_Emoji">{props.icon}</p>
                <p className="Feature_Title">{props.title}</p>
            </div>
            <p className="Feature_Description">{props.description}</p>
        </div>
    )
}
