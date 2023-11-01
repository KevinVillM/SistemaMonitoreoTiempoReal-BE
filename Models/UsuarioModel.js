const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nom_usuario: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    img_url: {
        type: String,
    }
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
