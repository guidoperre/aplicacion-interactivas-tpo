import React from "react";
import './SearchClass.css';
import Select from 'react-select'
import 'bootstrap/dist/css/bootstrap.min.css' ;
import {useSelector} from "react-redux";

export function SearchClass() {
    const userAuth = useSelector((state) => state.userAuth);
    let classes = {}
    let filters = {}

    try {
        classes = getClasses(userAuth.token)
    } catch (error) {
        console.log(error);
    }

    try {
        filters = getFilters(userAuth.token)
    } catch (error) {
        console.log(error);
    }

    const [course, setClass] = React.useState(undefined);
    const [classType, setClassType] = React.useState(undefined);
    const [frequency, setFrequency] = React.useState(undefined);
    const [qualification, setQualification] = React.useState(undefined);
    const [items, setFilteredCourses] = React.useState(classes.cursos ?? []);

    const searchClass = () => {
        setFilteredCourses(
            () => classes.cursos
                .filter((item, _) =>
                    (course === undefined || item.materiaId === course) &&
                    (classType === undefined || item.tipoClaseId === classType) &&
                    (frequency === undefined || item.frecuenciaId === frequency) &&
                    (qualification === undefined || item.calificacionId === qualification)
                )
        )
    }

    const listItems = items.map((c) =>
        <ListItem key={c.key} class={c}/>
    );

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
                                onChange={e => setClass(e.value)}
                                options={filters.materias} />
                            <Select
                                placeholder="Seleccionar tipo de clase"
                                className="Search_Filter"
                                onChange={e => setClassType(e.value)}
                                options={filters.tipoClase} />
                            <Select
                                placeholder="Seleccionar frecuencia"
                                className="Search_Filter"
                                onChange={e => setFrequency(e.value)}
                                options={filters.frecuencia} />
                            <Select
                                placeholder="Seleccionar calificación"
                                className="Search_Filter"
                                onChange={e => setQualification(e.value)}
                                options={filters.calificacion} />
                        </div>
                    </div>
                    <div className="Search_Filter_Button" onClick={searchClass}>
                        <p className="Search_Filter_Button_Text">Buscar</p>
                    </div>
                </div>
                <ul className="Search_Comment_List">{listItems}</ul>
            </div>
        </div>
    )
}

function ListItem(props) {
    const c = props.class;

    const onClassClicked = () => {
        window.location.href='/home/student/search/class'
    };

    return (
        <li className="Search_Comment_Item" onClick={onClassClicked}>
            <img className="Search_Comment_Image"
                 src={process.env.PUBLIC_URL + '/class/course.png'}
                 alt="course"/>
            <p className="Search_Comment_Text_Bold">{c.materiaNombre}</p>
            <p className="Search_Comment_Text_Normal">{c.costo}</p>
        </li>
    );
}

async function getClasses(token) {
    const response = await fetch(`http://localhost:4000/studentClasses/`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json', 'x-access-token': token}
    })
    return await response.json();
}

async function getFilters(token) {
    const response = await fetch(`http://localhost:4000/studentClasses/`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json', 'x-access-token': token}
    })
    return await response.json();
}
