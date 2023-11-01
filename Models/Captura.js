const mongoose = require('mongoose');

const CapturaSchema = new mongoose.Schema({
    url_captura: {
        type: String,
    },
    nom_captura: {
        type: String,
        required: true
    },
    fecha_captura: {
        type: Date,
        default: Date.now
    },
});

const Captura = mongoose.model('Captura', CapturaSchema);
module.exports = Captura;