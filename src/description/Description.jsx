import React from "react";
import './Description.css';

export function Description(props) {
    return (
        <div className="Description" ref={props.section}>
            <div className="Description_Content">
                <p className="Description_Subtitle">DESCRIPCIÓN</p>
                <p className="Description_Title">¿Quienes somos?</p>
                <p className="Description_Text">En institular tenemos como misión ayudar a encontrar a cada persona que tenga una tienda, a encontrar su lugar en el mundo digital. Para esto nos encargamos de desarrollar un plataforma completa, donde puedan crear y administrar su tienda de forma facil y segura.</p>
                <div className="Description_Features_Content">
                    <div className="Description_Features">
                        <Feature
                            icon='🌎'
                            title='Tu lugar en el mapa'
                            description='Cada tienda registrada va a participar del mapa de nuestra aplicacion movil, que le va a garantizar mas exposicion de la misma.' />
                        <Feature
                            icon='👩‍💻'
                            title='Autogestionable'
                            description='Vas a poder gestionar tanto tu tienda como tus productos desde donde quieras y como quieras.' />
                        <Feature
                            icon='👑'
                            title='Tu tienda, tus reglas'
                            description='Al crearte una tienda, te vamos a otorgar un vinculo hacia la misma que podes compartir y utilizar como gustes.' />
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
