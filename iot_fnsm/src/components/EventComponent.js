import React, { useEffect, useState } from 'react';
import '../styles/Event.css';

function EventNotifications() {
    const [eventos, setEventos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Llamada a la API para obtener los datos de eventos
        fetch('')       //Mi endpoint para consumir los eventos
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al obtener los datos de los eventos');
                }
                return response.json();
            })
            .then(data => {
                setEventos(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Cargando eventos...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="events-container">
            <h2>????</h2>
            {eventos.length > 0 ? (
                eventos.map(evento => (
                    <div key={evento._id} className="event-card">
                        <h3>{evento.nombre}</h3>
                        {/* Concaterar tecto plano + data */}

                        <p><strong>:</strong> {evento.ubicacion}</p>
                        <p><strong>:</strong> {new Date(evento.hora_inicio).toLocaleString()}</p>
                        <p>{evento.detalles}</p>
                    </div>
                ))
            ) : (
                <p>No hay eventos próximos.</p>
            )}
        </div>
    );
}

export default EventNotifications;
