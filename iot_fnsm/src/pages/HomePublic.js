import React, { useEffect, useState } from 'react';
import AlertComponent from "../components/AlertComponent";
import EventNotifications from "../components/EventComponent";
import CircleSensor from "../components/CircleSensor";
import { Link } from 'react-router-dom';
import '../styles/HomePublic.css'


function HomePublic() {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="main-container">
            <div className="header">
                <h1>TITULO</h1>

                <div className="clock">{currentTime}</div>
            </div>
            <div className="sensors">
                {/* Agregar los componente circulares de iot y filtrar por tipo ej> tipoSensor="Calidad del Aire" */}

            </div>
            <div className="events">
                {/*Agregar el componente de eventNotificaciones  */}
            </div>
            <div className="alerts">
                {/* Agregar el componente de alertas, filtrar por solo las activas */}

            </div>
        </div>
    );
}

export default HomePublic;