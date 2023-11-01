const mongoose = require('mongoose');

const SesionSchema = new mongoose.Schema({
    hora_inicio_sesion: {
        type: Date,
        required: true
    },
    hora_fin_sesion: {
        type: Date,
    },
    fecha_sesion: {
        type: Date,
        required: true
    },
    empleado: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Empleado',
    },
    sala: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sala',
        required: true
    },
});

const Sesion = mongoose.model('Sesion', SesionSchema);
module.exports = Sesion;