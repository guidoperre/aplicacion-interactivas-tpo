import React from "react";
import './FinderFilter.css';
import {Logo} from "../../../components/logo/Logo";
import mock from "../../../components/data/clases.json";
// import {TextInput} from "../../../components/input/single/TextInput";
import Select from 'react-select'
import Button from '@mui/material/Button';


export function FinderFilter() {


    return (
        <div className="FinderContent">
            <div className="Logo_Container">
                <Logo image="institular_logo" color="#6c8ed0"/>
            </div>
            <div className="FinderSeparador"></div>
            <div className="Finder_Container">
                <p className="Finder_Title">Seleccione el filtro de busqueda</p>
                <div className="Finder_Input_Container">
                    <div className="container">
                        <div className="row">
                            <Select className="Finder_Select" options={mock.materias} />
                            <Select className="Finder_Select" options={mock.tipoClase} />   
                            <Select className="Finder_Select" options={mock.frecuencia} />   
                            <Select className="Finder_Select" options={mock.calificacion} />                           
                        </div>                        
                    </div>
                   
                </div>
                <div className="Finder_Button">
                    <Button className="Finder_Button_Text" onClick="filtrar()" variant="text">BUSCAR</Button>
                </div>
            </div>
        </div>
    )
}
