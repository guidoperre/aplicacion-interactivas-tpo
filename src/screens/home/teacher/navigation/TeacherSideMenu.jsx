import React, {useEffect} from "react";

import './TeacherSideMenu.css';
import {useSelector} from "react-redux";
import {toast} from "react-toastify";

export default function TeacherSideMenu(props) {
    const userAuth = useSelector((state) => state.userAuth);
    const [user, setUser] = React.useState({});
    let classesStyle
    let hiringStyle
    let commentsStyle
    let userType

    useEffect(() => {
        try {
            getUserInfo(userAuth.token).then(r => {
                console.log(r.content);
                if(r.status !== 200) {
                    toast.error('No pudimos obtener su informacion de usuario (' + r.status + ')' , {
                        position: toast.POSITION.BOTTOM_LEFT
                    });
                } else {
                    setUser(r.content.data)
                }
            })
        } catch (error) {
            console.log(error);
        }
    }, [false]);

    const onClassesClicked = () => {
        window.location.href='/home/teacher/classes'
    };
    const onHiringClicked = () => {
        window.location.href='/home/teacher/hiring'
    };
    const onCommentsClicked = () => {
        window.location.href='/home/teacher/comments'
    };

    switch (props.titleSelected) {
        case 1:
            classesStyle = "bold"
            hiringStyle = "normal"
            commentsStyle = "normal"
            break;
        case 2:
            classesStyle = "normal"
            hiringStyle = "bold"
            commentsStyle = "normal"
            break;
        case 3:
            classesStyle = "normal"
            hiringStyle = "normal"
            commentsStyle = "bold"
            break;
        default:
            classesStyle = "normal"
            hiringStyle = "normal"
            commentsStyle = "normal"
            break;
    }

    if (user.type === "teacher") {
        userType = "Profesor"
    } else if (user.type === "student"){
        userType = "Estudiante"
    }

    return(
        <div className="Teacher_Navigator">
            <div className="Teacher_Navigator_Header">
                <img className="Teacher_Navigator_Image"
                     src={process.env.PUBLIC_URL + '/class/teacher.png'}
                     alt="" />
                <div className="Teacher_Navigator_Header_Content">
                    <p className="Teacher_Navigator_Header_Title">{user.name}</p>
                    <p className="Teacher_Navigator_Header_Subtitle">{userType}</p>
                </div>

            </div>
            <div className="Teacher_Navigator_Button" onClick={onClassesClicked}>
                <p className="Teacher_Navigator_Button_Title" style={{fontWeight: classesStyle}}>Clases</p>
            </div>
            <div className="Teacher_Navigator_Button" onClick={onHiringClicked}>
                <p className="Teacher_Navigator_Button_Title" style={{fontWeight: hiringStyle}}>Contrataciones</p>
            </div>
            <div className="Teacher_Navigator_Button" onClick={onCommentsClicked}>
                <p className="Teacher_Navigator_Button_Title" style={{fontWeight: commentsStyle}}>Comentarios</p>
            </div>
            <p className="Navigator_Footer_Text">2022 Institular ®. Reservados todos los derechos.</p>
        </div>
    );
}

async function getUserInfo(token) {
    const response = await fetch(`http://localhost:4000/users/`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json', 'x-access-token': token}
    })
    return {status: response.status, content: await response.json()};
}
