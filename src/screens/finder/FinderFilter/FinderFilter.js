import React from "react";
import './FinderFilter.css';
import {Logo} from "../../../components/logo/Logo";
import mock from "../../../components/data/clases.json";
import Card from "../../../components/card/Card";
import Grid from "../../../components/grid/Grid";
import Select from 'react-select'
import 'bootstrap/dist/css/bootstrap.min.css' ;


export function FinderFilter() {

    var materia,tipoClase, frecuencia, cal= 0;
    var cursosFiltrados = [];

    const setMateria = (e) => { materia = e.value }
    const setTipoClase = (e) => { tipoClase = e.value }
    const setFrecuencia = (e) => { frecuencia = e.value }
    const setCalificacion = (e) => { cal = e.value }

    const filtrar = () => {
        //debugger;       
        cursosFiltrados = mock.cursos.filter(function(item) { 
            if(item.materiaId === materia) { 
                return item;
            }
        });        
        console.log(cursosFiltrados);
    }

    return (
        <div className="FinderContent">
            <div className="Logo_Container">
                <Logo image="institular_logo" color="#6c8ed0"/>
            </div>
        
            <div class="container">
                <div className="FinderSeparador"></div>
                <div className="Finder_Container" >
                    <p className="Finder_Title">Seleccione el filtro de busqueda</p>
                    <div className="Finder_Input_Container">
                        <div>
                            <div class="row">
                                <div class="col-md-3">
                                     <Select onChange={e => setMateria(e)} options={mock.materias} />                                    
                                </div> 
                                <div class="col-md-3">
                                    <Select onChange={e => setTipoClase(e)} options={mock.tipoClase} />
                                </div>     
                                <div class="col-md-3">
                                    <Select onChange={e => setFrecuencia(e)}  options={mock.frecuencia} /> 
                                </div>  
                                <div class="col-md-3">
                                    <Select onChange={e => setCalificacion(e)} options={mock.calificacion} />
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
                        <Grid>
                            {cursosFiltrados.map(curso => (
                                <Card key={curso.id} 
                                    id={curso.id} 
                                    name={curso.materiaNombre} 
                                    descripcion={curso.materiaDescription} 
                                    tipoClaseDescripcion={curso.tipoClaseDescripcion} 
                                    frecuenciaDescripcion={curso.frecuenciaDescripcion} 
                                    calificacion={curso.calificacion}
                                />
                            ))}
                        </Grid>
                    </div> 
                      
                </div>
                
            </div>
            
        </div>
    )
}
