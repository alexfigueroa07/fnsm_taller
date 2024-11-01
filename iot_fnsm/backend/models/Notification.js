const mongoose = require('mongoose');

const notificacionsSchema = new mongoose.Schema({
    mensaje: { type: String, required: true },
    tipo: { type: String, required: true },
    fecha_hora: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Notificacione', notificacionsSchema);
