import React, {useEffect} from "react";
import './SearchClass.css';
import Select from 'react-select'
import 'bootstrap/dist/css/bootstrap.min.css' ;
import {useSelector} from "react-redux";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

export function SearchClass() {
    const userAuth = useSelector((state) => state.userAuth);
    const [classes, setClasses] = React.useState([]);
    const [filters, setFilters] = React.useState({});
    const [course, setClass] = React.useState(undefined);
    const [classType, setClassType] = React.useState(undefined);
    const [frequency, setFrequency] = React.useState(undefined);
    const [qualification, setQualification] = React.useState(undefined);

    useEffect(() => {
        try {
            getClasses(userAuth.token).then(r => {
                if(r.status !== 200) {
                    toast.error('Ocurrio un error cargando los cursos (' + r.status + ')' , {
                        position: toast.POSITION.BOTTOM_LEFT
                    });
                } else {
                    console.log(r.content.data.docs);
                    setClasses(r.content.data.docs)
                }
            })
        } catch (error) {
            console.log(error);
        }
    }, [false]);

    useEffect(() => {
        try {
            getFilters(userAuth.token).then(r => {
                if(r.status !== 200) {
                    toast.error('Ocurrio un error cargando los filtros (' + r.status + ')' , {
                        position: toast.POSITION.BOTTOM_LEFT
                    });
                } else {
                    const data = r.content.data
                    const materias = data.materias.map(
                        function(element, index){
                            return {value: index, label: element};
                        }
                    )
                    const tipo = data.tipo.map(
                        function(element, index){
                            return {value: index, label: element};
                        }
                    )
                    const frecuencia = data.frecuencia.map(
                        function(element, index){
                            return {value: index, label: element};
                        }
                    )
                    const calificacion = data.calificacion.map(
                        function(element, index){
                            return {value: index, label: element};
                        }
                    )

                    data.materias = materias
                    data.tipo = tipo
                    data.frecuencia = frecuencia
                    data.calificacion = calificacion
                    setFilters(data)
                }
            })
        } catch (error) {
            console.log(error);
        }
    }, [false]);

    const searchClass = () => {
        setClasses(
            () => classes
                .filter((item, _) => {
                    return (course === undefined || item.materia === course) &&
                    (classType === undefined || item.tipo === classType) &&
                    (frequency === undefined || item.frecuencia === frequency) &&
                    (qualification === undefined || item.calificacion === qualification)
                })
        )
    }

    const listItems = (classes ?? []).map((c) =>
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
                                onChange={e => setClass(e.label)}
                                options={filters.materias} />
                            <Select
                                placeholder="Seleccionar tipo de clase"
                                className="Search_Filter"
                                onChange={e => setClassType(e.label)}
                                options={filters.tipo} />
                            <Select
                                placeholder="Seleccionar frecuencia"
                                className="Search_Filter"
                                onChange={e => setFrequency(e.label)}
                                options={filters.frecuencia} />
                            <Select
                                placeholder="Seleccionar calificación"
                                className="Search_Filter"
                                onChange={e => setQualification(e.label)}
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
    const navigate = useNavigate();
    const c = props.class;

    const onClassClicked = () => {
        navigate('/home/student/search/class', {state: {key: c.key}})
    };

    return (
        <li className="Search_Comment_Item" onClick={onClassClicked}>
            <img className="Search_Comment_Image"
                 src={process.env.PUBLIC_URL + '/class/course.png'}
                 alt="course"/>
            <p className="Search_Comment_Text_Bold">{c.nombre}</p>
            <p className="Search_Comment_Text_Normal">${c.costo}</p>
        </li>
    );
}

async function getClasses(token) {
    const response = await fetch(`http://localhost:4000/teacherClasses/all`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json', 'x-access-token': token}
    })
    return {status: response.status, content: await response.json()};
}

async function getFilters(token) {
    const response = await fetch(`http://localhost:4000/teacherClasses/filters`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json', 'x-access-token': token}
    })
    return {status: response.status, content: await response.json()};
}
