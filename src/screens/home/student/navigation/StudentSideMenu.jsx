import React, {useEffect} from "react";

import './StudentSideMenu.css';
import {useSelector} from "react-redux";
import {toast} from "react-toastify";

export default function StudentSideMenu(props) {
    const userAuth = useSelector((state) => state.userAuth);
    const [user, setUser] = React.useState({});
    let classesStyle
    let searchClassesStyle
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

    const onSearchClassesClicked = () => {
        window.location.href='/home/student/search'
    };
    const onClassesClicked = () => {
        window.location.href='/home/student/classes'
    };

    if (user.type === "teacher") {
        userType = "Profesor"
    } else if (user.type === "student"){
        userType = "Estudiante"
    }

    switch (props.titleSelected) {
        case 1:
            searchClassesStyle = "bold"
            classesStyle = "normal"
            break;
        case 2:
            searchClassesStyle = "normal"
            classesStyle = "bold"
            break;
        default:
            classesStyle = "normal"
            searchClassesStyle = "normal"
            break;
    }

    return(
        <div className="Student_Navigator">
            <div className="Student_Navigator_Header">
                <img className="Student_Navigator_Image"
                     src={process.env.PUBLIC_URL + '/class/student.png'}
                     alt="" />
                <div className="Student_Navigator_Header_Content">
                    <p className="Student_Navigator_Header_Title">{user.name}</p>
                    <p className="Student_Navigator_Header_Subtitle">{userType}</p>
                </div>
            </div>
            <div className="Student_Navigator_Button" onClick={onSearchClassesClicked}>
                <p className="Student_Navigator_Button_Title" style={{fontWeight: searchClassesStyle}}>Buscar clases</p>
            </div>
            <div className="Student_Navigator_Button" onClick={onClassesClicked}>
                <p className="Student_Navigator_Button_Title" style={{fontWeight: classesStyle}}>Clases</p>
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
