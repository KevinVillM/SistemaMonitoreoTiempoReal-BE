const {response} = require('express');
const Sesion = require('../Models/Sesion');

const getSesion = async (req, res = response) => {
    let sesiones = await Sesion.find().populate('empleado', 'nom_empleado -_id').populate('sala', 'cod_sala');
    res.json(
        sesiones
    );
}

const getUnaSesion = async (req, res = response) => {
    const {id} = req.params;
    const {hora_inicio_sesion, hora_fin_sesion, fecha_sesion, sala, empleado} = await Sesion.findById(id);

    res.json({
        hora_inicio_sesion,
        hora_fin_sesion,
        fecha_sesion,
        sala,
        empleado
    });
}

// const getCapturasPorSesion = async (req, res = response) => {
// }


const crearSesion = async (req, res = response) => {
    const {_id, ...resto} = req.body;


    const sesion =await new Sesion(resto);
    await sesion.save();
    res.json({
        msg: `Sesion creada`,
        sesion
    });
}

const actualizarSesion = async (req, res = response) => {
    const {id} = req.params;
    const {hora_inicio_sesion, hora_fin_sesion, fecha_sesion} = req.body;


    const sesion = await Sesion.findByIdAndUpdate(id, {hora_inicio_sesion, hora_fin_sesion, fecha_sesion});
    const sesionActualizada = await Sesion.findById(id);

    res.json(sesionActualizada);
}

const eliminarSesion = async (req, res = response) => {
    const {id} = req.params;
    const sesion = await Sesion.findOneAndDelete(id);
    res.json({
        msg: `Sesion eliminada`,
        sesion
    });
}   

module.exports = {
    getSesion,
    getUnaSesion,
    crearSesion,
    actualizarSesion,
    eliminarSesion,
}
