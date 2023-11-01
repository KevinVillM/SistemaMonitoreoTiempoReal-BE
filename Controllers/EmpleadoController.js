const { response } = require('express');
const bcryptjs = require('bcryptjs');
const Empleado = require('../Models/Empleado');


const empleadoGet = async (req, res = response) => {
    const empleados = await Empleado.find();
    res.json(
        empleados
    );
}

const empleadoUnoGet = async (req, res = response) => {
    const {id} = req.params;
    const empleado = await Empleado.findById(id);
    res.json(
        empleado
    );
}

const empleadoPut = async(req, res = response) => {

    const id = req.params.cod_empleado; 
    const {cod_empleado, ...resto} = req.body;
    //Actualizar Empleado con base al compo cod_empleado y guardar en la la constante empleado el resultado
    await Empleado.findOneAndUpdate({cod_empleado: id}, resto);
    const empleadoActualizado = await Empleado.findOne({cod_empleado: id});

    res.json(
        empleadoActualizado
    );
}

const empleadoPost = async (req, res = response) => {
    const allData = req.body;
    const empleado = new Empleado(allData);

    await empleado.save();
    
    res.json(
        empleado
    );
}

const empleadoDelete = async(req, res = response) => {

    //eliminar fisicamente
    const {cod_empleado} = req.params;
    const empleado = await Empleado.findOneAndDelete({cod_empleado: cod_empleado});

    res.json(
        empleado
    );
}


module.exports = {
    empleadoGet,
    empleadoPut,
    empleadoPost,
    empleadoDelete,
    empleadoUnoGet
}