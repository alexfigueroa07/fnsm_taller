const express = require('express');
const router = express.Router();
const Sensor = require('../models/Sensor');
const Alerta = require('../models/Alerta');
const Evento = require('../models/Evento');
const Notification = require('../models/Notification');

// Ruta para obtener todos los sensores
router.('/', async (req, res) => {          //Agregar el metodo y ruta a cada api
    try {
        const sensores = await Sensor.find();
        res.json(sensores);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los sensores' });
    }
});

// Ruta para obtener todas las alertas
router.('/', async (req, res) => {
    try {
        const alertas = await Alerta.find();
        res.json(alertas);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las alertas' });
    }
});

// Ruta para obtener todos los eventos
router.('/', async (req, res) => {
    try {
        const eventos = await Evento.find();
        res.json(eventos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los eventos' });
    }
});

// Ruta para obtener todas las notificaciones públicas
router.('/', async (req, res) => {
    try {
        const notificaciones = await Notification.find();
        res.json(notificaciones);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las notificaciones' });
    }
});



module.exports = router;
