const mongoose = require('mongoose');

const SalaSchema = new mongoose.Schema({
    cod_sala: {
        type: String,
        required: true
    },
    nom_sala: {
        type: String,
    },
    categoria_sala: {
        type: String,
    },
});

const Sala = mongoose.model('Sala', SalaSchema);
module.exports = Sala;