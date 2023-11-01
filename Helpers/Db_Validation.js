const Empleado = require('../Models/Empleado');
const Rol = require('../Models/Rol');
const Usuario = require('../Models/UsuarioModel');
const Sala = require('../Models/Sala');
const Sesion = require('../Models/Sesion');
const Captura = require('../Models/Captura');


const esRolValido = async(rol) => {
    const existeRol = await Rol.findOne({rol})
    if(!existeRol){
        throw new Error(`El rol ${rol} no es valido`)
    }
}

    const emailExiste = async(email) => {
        const existeEmail = await Usuario.findOne({email});
        if(existeEmail){
            throw new Error(`El correo ${email} ya está registrado`)
        }
    }

    const emailNoExiste = async(email) => {
        const emailNoExiste = await Usuario.findOne({email});
        if(!email){
            throw new Error(`El correo ${email} no está registrado`)
        }
    }

const usuarioPorID = async(id) => {
    const existeUsuario = await Usuario.findById(id);
    if(!existeUsuario){
        throw new Error(`El usuario con ${id} no existe`)
    }
}

const empleadoPorID = async(id) => {
    const existeEmpleado = await Empleado.findOne({cod_empleado: id});
    console.log(existeEmpleado);
    if(!existeEmpleado){
        throw new Error(`El empleado con codigo: ${cod_empleado} no existe`)
    }
}

const rolPorID = async(id) => {
    const rol = await Rol.findById(id);
    if(!rol){
        throw new Error(`El rol con ${id} no existe`)
    }
}

const salaPorID = async(id) => {
    const sala = await Sala.findById(id);
    if(!sala){
        throw new Error(`La sala con ${id} no existe`)
    }
}

//Sala por cod_sala
const salaPorCodigo = async(cod_sala) => {
    const sala = await Sala.findOne({cod_sala});
    if(sala){
        throw new Error(`La sala con codigo: ${cod_sala} ya existe`)
    }
}

const sesionPorID = async(id) => {
    const sesion = await Sesion.findById(id);
    if(!sesion){
        throw new Error(`La sesion con ${id} no existe`)
    }
}

const capturaPorID = async(id) => {
    const captura = await Captura.findById(id);
    if(!captura){
        throw new Error(`La captura con ${id} no existe`)
    }
}



//validar si el rol ya existe
const rolExiste = async(rol) => {
    const existeRol = await Rol.findOne({rol});
    if(existeRol){
        throw new Error(`El rol ${rol} ya existe`)
    }
}

module.exports = {
    esRolValido,
    emailExiste,
    usuarioPorID,
    emailNoExiste,
    rolPorID,
    rolExiste,
    empleadoPorID,
    salaPorID,
    sesionPorID,
    capturaPorID,
    salaPorCodigo
}