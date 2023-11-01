const { response } = require("express");
const Usuario = require("../Models/UsuarioModel");
const bcryptjs = require('bcryptjs');
const { generarJWT } = require("../Helpers/GenerarJWT");


const login = async(req, res = response) => {
    const {email, password} = req.body;
    try {
        // Verificar si el email existe
        const usuario = await Usuario.findOne({email});
        if(!usuario){
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - correo'
            });
        }
        // Verificar la contraseña
        const validPassword = bcryptjs.compareSync(password, usuario.password);
        if(!validPassword){
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - password'
            });
        }
        // Generar el JWT
        const token = await generarJWT(usuario.id);

        res.json({
            usuario,
            token
        });

    } catch (error) {

        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
}

module.exports = {
    login
}