const { response } = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../Models/UsuarioModel');


const usuariosGet = async (req, res = response) => {
    const usuarios = await Usuario.find();
    res.json({
        msg: 'get API - controlador',
        usuarios
    });
}

const usuarioUnoGet = async (req, res = response) => {
    const {id} = req.params;
    const usuario = await Usuario.findById(id);
    res.json(
        usuario
    );
}

const usuarioPorEmailGet = async (req, res = response) => {
    const {email} = req.params;
    const usuario = await Usuario.findOne({email});
    res.json(
        usuario
    );
}

const usuariosPut = async(req, res = response) => {

    const id = req.params.id; 
    const {_id, password, email,...resto} = req.body;

    // TODO validar contra base de datos
    if(password){
        // Encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password, salt);
    }

    const usuario = await Usuario.findByIdAndUpdate(id, resto);


    res.json(
        usuario
    );
}

const usuariosPost = async (req, res = response) => {
    const allData = req.body;
    const usuario = new Usuario(allData);

    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();

    usuario.password = bcryptjs.hashSync(usuario.password, salt);

    await usuario.save();
    
    res.json(
        usuario
    );
}

const usuariosDelete = async(req, res = response) => {

    //eliminar fisicamente
    const {id} = req.params;
    const usuario = await Usuario.findByIdAndDelete(id);

    res.json(
        usuario
    );

}




module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuarioUnoGet,
    usuarioPorEmailGet
}