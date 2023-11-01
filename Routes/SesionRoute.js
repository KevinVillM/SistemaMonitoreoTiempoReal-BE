const {Router} = require('express');
const { check } = require('express-validator');

const { validarCampos, validarJWT } = require('../Middlewares');

const { crearSesion, getSesion, actualizarSesion, eliminarSesion, getUnaSesion } = require('../Controllers/SesionController');
const { sesionPorID, salaPorID } = require('../Helpers/Db_Validation');


const router = Router();

router.get('/', validarJWT, getSesion);

router.get('/:id', [
    validarJWT,
    check('id').custom(sesionPorID),
    validarCampos
], getUnaSesion);

router.post('/', [
    validarJWT,
    check('sala').custom(salaPorID),
    validarCampos
], crearSesion);

router.put('/:id', [
    validarJWT,
    check('id').custom(sesionPorID),
    validarCampos
], actualizarSesion);

router.delete('/:id', [
    validarJWT,
    check('id').custom(sesionPorID),
], eliminarSesion);

module.exports = router;