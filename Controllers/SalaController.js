const {response} = require('express');
const Sala = require('../Models/Sala');

const getSala = async (req, res = response) => {
    let salas = await Sala.find();
    res.json({
        salas
    });
}

const getUnaSala = async (req, res = response) => {
    const {id} = req.params;
    const {cod_sala,nom_sala, categoria_sala} = await Sala.findById(id);

    res.json({
        cod_sala,
        nom_sala,
        categoria_sala
    });
}



const crearSala = async (req, res = response) => {
    const {_id, ...resto} = req.body;


    const sala =await new Sala(resto);
    await sala.save();
    res.json({
        msg: `Sala creada`,
        sala
    });
}

const actualizarSala = async (req, res = response) => {
    const {id} = req.params;
    const {cod_sala, nom_sala, categoria_sala} = req.body;


    const sala = await Sala.findByIdAndUpdate(id, {cod_sala, nom_sala, categoria_sala});
    res.json({
        sala
    });
}

const eliminarSala = async (req, res = response) => {
    const {id} = req.params;
    const sala = await Sala.findOneAndDelete(id);
    res.json({
        msg: `Sala eliminada`,
        sala
    });
}   

module.exports = {
    getSala,
    getUnaSala,
    crearSala,
    actualizarSala,
    eliminarSala,
}
