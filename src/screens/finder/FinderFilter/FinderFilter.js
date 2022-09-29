import React from "react";
import './FinderFilter.css';
import {Logo} from "../../../components/logo/Logo";
import mock from "../../../components/data/clases.json";
import Card from "../../../components/card/Card";
import Select from 'react-select'
import 'bootstrap/dist/css/bootstrap.min.css' ;


export function FinderFilter() {

    const filtrar = () => {
        debugger;
    }

    return (
        <div className="FinderContent">
            <div className="Logo_Container">
                <Logo image="institular_logo" color="#6c8ed0"/>
            </div>
            <div className="FinderSeparador"></div>
            <div class="container">
                <div className="Finder_Container" >
                    <p className="Finder_Title">Seleccione el filtro de busqueda</p>
                    <div className="Finder_Input_Container">
                        <div>
                            <div class="row">
                                <div class="col-md-3">
                                     <Select options={mock.materias} />                                    
                                </div> 
                                <div class="col-md-3">
                                    <Select options={mock.tipoClase} />
                                </div>     
                                <div class="col-md-3">
                                    <Select  options={mock.frecuencia} /> 
                                </div>  
                                <div class="col-md-3">
                                    <Select options={mock.calificacion} />
                                </div>  
                            </div>                                      
                        </div>                   
                    </div>
                    <div>
                        <button type="button" class="btn btn-secondary col-md-12" onClick={filtrar}>BUSCAR</button>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-3">
                        <Card key={1} id={1} name={"Programación"} descripcion={"descripcion de la materia"}/>
                    </div>
                    <div class="col-md-3">                    
                        <Card key={2} id={2} name={"Bases de Datos"} descripcion={"descripcion de la materia"}/>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}
