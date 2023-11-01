//Controller de captura metodos: crear, obtener, actualizar, eliminar
const { response } = require('express');
const Captura = require('../Models/Captura');


//Obtener capturas
const getCaptura = async(req, res = response) => {
    const capturas = await Captura.find();
    res.json(
        capturas
    );
}

//Obtener captura por id
const getUnaCaptura = async(req, res = response) => {
    const { id } = req.params;
    const captura = await Captura.findById(id);
    res.json({
        msg: 'Captura obtenida',
        captura
    });
}

//Crear captura
const crearCaptura = async(req, res = response) => {
    const { url_captura, nom_captura, fecha_captura } = req.body;
    const captura = new Captura({ url_captura, nom_captura, fecha_captura });

    await captura.save();
    res.json({
        msg: 'Captura creada',
        captura
    });
}

//Actualizar captura
const actualizarCaptura = async(req, res = response) => {
    const { id } = req.params;
    const { url_captura, nom_captura, sesion } = req.body;
    const captura = await Captura.findByIdAndUpdate(id, { url_captura, nom_captura, sesion });
    res.json({
        msg: 'Captura actualizada',
        captura
    });
}

//Eliminar captura
const eliminarCaptura = async(req, res = response) => {
    const { id } = req.params;
    const captura = await Captura.findByIdAndDelete(id);
    res.json({
        msg: 'Captura eliminada',
        captura
    });
}

//Exportar metodos
module.exports = {
    getCaptura,
    getUnaCaptura,
    crearCaptura,
    actualizarCaptura,
    eliminarCaptura
}
