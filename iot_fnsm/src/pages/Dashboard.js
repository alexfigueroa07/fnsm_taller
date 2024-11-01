import React, { useState, useEffect } from 'react';
import Notifications from '../components/Notification';
import SensorComponent from '../components/SensorComponent';
import IotList from '../components/IotList';
import '../styles/Dashboard.css';

function Dashboard() {
    const [showNotifications, setShowNotifications] = useState(false);
    const [notificationCount, setNotificationCount] = useState(0);

    // Obtener el conteo de notificaciones desde la API
    useEffect(() => {
        fetch('')           //Agregar el endpoint para la ruta
            .then(response => response.json())
            .then(data => setNotificationCount(data.length))
            .catch(error => console.error('Error al obtener el conteo de notificaciones:', error));
    }, []);

    const toggleNotifications = () => {
        setShowNotifications(!showNotifications);
    };

    const closeNotifications = () => {
        setShowNotifications(false);
    };

    return (
        <div className="dashboard-container" onClick={() => showNotifications && closeNotifications()}>
            <div className="notifications-toggle" onClick={(e) => e.stopPropagation()}>
                <button className="notifications-button" onClick={toggleNotifications}>
                    Ver Notificaciones {notificationCount > 0 && <span className="notification-badge">{notificationCount}</span>}
                </button>
            </div>

            {showNotifications && (
                <div className="notifications-modal">
                    <button className="close-button" onClick={closeNotifications}>Cerrar</button>
                    <Notifications />
                </div>
            )}


            <div className="actions-section">
                <h2>????</h2>
                <div className="action-buttons">
                    <button onClick={() => alert('?????')}>Prender Sistema de Riego</button>
                    {/* Agregar botones para cerrar puerta, apagar bocinas, llamar a servicios de aire, llamar a seguridad de sonido */}

                </div>
            </div>
            {/* Agregar el sensor compoent aqui */}
            <div className="iot-sections">
                <h2>??????</h2>
                {/* Agregar el componente IOT y filtrar por tipo ej:  tipo="puerta"  */}

            </div>



        </div>
    );
}

export default Dashboard;
