import React from "react";
import './SearchClass.css';
import Select from 'react-select'
import 'bootstrap/dist/css/bootstrap.min.css' ;
import filters from "../../../../../components/data/student/filters.json";
import classes from "../../../../../components/data/student/classes.json";

export function SearchClass() {
    let course, classType, frequency, qualification = "";
    let filteresCourses = [];

    const setClass = (e) => { course = e.value }
    const setClassType = (e) => { classType = e.value }
    const setFrequency = (e) => { frequency = e.value }
    const setQualification = (e) => { qualification = e.value }

    const searchClass = () => {
        filteresCourses = classes.cursos.filter(function(item) {
            if(item.materiaId === course) {
                return item;
            }
        });
    }

    return (
        <div className="SearchContent">
            <div className="Search_Container">
                <div className="Search_Filter_Container" >
                    <p className="Search_Title">Seleccione el filtro de busqueda</p>
                    <div className="Search_Filter_List_Container">
                        <div className="Search_Filter_List">
                            <Select
                                placeholder="Seleccionar materia"
                                className="Search_Filter"
                                onChange={e => setClass(e)}
                                options={filters.materias} />
                            <Select
                                placeholder="Seleccionar tipo de clase"
                                className="Search_Filter"
                                onChange={e => setClassType(e)}
                                options={filters.tipoClase} />
                            <Select
                                placeholder="Seleccionar frecuencia"
                                className="Search_Filter"
                                onChange={e => setFrequency(e)}
                                options={filters.frecuencia} />
                            <Select
                                placeholder="Seleccionar calificación"
                                className="Search_Filter"
                                onChange={e => setQualification(e)}
                                options={filters.calificacion} />
                        </div>
                    </div>
                    <div className="Search_Filter_Button" onClick={searchClass}>
                        <p className="Search_Filter_Button_Text">Buscar</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
