import React, { useEffect, useState } from 'react';
import '../styles/IotList.css';
import { FaDoorClosed, FaLightbulb, FaVolumeUp, FaFan, FaTv, FaWater } from 'react-icons/fa';

function IotList({ tipo }) {
    const [dispositivos, setDispositivos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('')           //Mi endpoint para consumir los dispositivos de iot
            .then(response => response.json())
            .then(data => {
                const dispositivosFiltrados = data.filter(dispositivo => dispositivo.tipo.toLowerCase() === tipo.toLowerCase());
                setDispositivos(dispositivosFiltrados);
            })
            .catch(err => setError(err.message));
    }, [tipo]);

    const toggleEstado = (id, estadoActual) => {
        fetch(``, {         //Mi endpoint para filtrar un dispositipo por Id y poderlo actualizar
            method: '',         //El metodo necesario
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ estado: !estadoActual }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al actualizar el estado del dispositivo');
                }
                return response.json();
            })
            .then(updatedDevice => {
                setDispositivos(prevDispositivos =>
                    prevDispositivos.map(dispositivo =>
                        dispositivo._id === updatedDevice._id ? updatedDevice : dispositivo
                    )
                );
            })
            .catch(err => setError(err.message));
    };

    const renderIcon = (tipo) => {
        switch (tipo.toLowerCase()) {
            case 'puerta':
                return <FaDoorClosed className="iot-icon" />;
            case 'lámpara':
                return <FaLightbulb className="iot-icon" />;
            case 'bocina':
                return <FaVolumeUp className="iot-icon" />;
            case 'ventilador':
                return <FaFan className="iot-icon" />;
            case 'pantalla':
                return <FaTv className="iot-icon" />;
            case 'rociador':
                return <FaWater className="iot-icon" />;
            default:
                return null;
        }
    };



    return (

        <div className="iot-list-container">
            {error && <p className="iot-error">Error: {error}</p>}
            {dispositivos.length > 0 ? (
                dispositivos.map((dispositivo, index) => (
                    <div key={index} className="iot-item">
                        {renderIcon(tipo)}
                        <h4>{dispositivo.nombre}</h4>
                        <p><strong>????:</strong> {dispositivo.marca}</p>

                        {/* Agregar operador ternario para texto y color de botones dependiendo el status del disp IOT */}
                    </div>
                ))
            ) : (
                <p className="iot-no-data">No hay dispositivos de tipo {tipo} disponibles.</p>
            )}
        </div>
    );
}

export default IotList;
