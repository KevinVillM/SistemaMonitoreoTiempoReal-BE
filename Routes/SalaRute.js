const {Router} = require('express');
const { check } = require('express-validator');
const { validarCampos, validarJWT } = require('../Middlewares');
const { crearSala, getSala, actualizarSala, eliminarSala, getUnaSala } = require('../Controllers/SalaController');
const { salaPorID, salaPorCodigo } = require('../Helpers/Db_Validation');


const router = Router();
router.get('/', validarJWT, getSala);

router.get('/:id', [
    validarJWT,
    check('id').custom(salaPorID),
    validarCampos
], getUnaSala);

router.post('/', [
    check('cod_sala').custom(salaPorCodigo),
    validarJWT,
], crearSala);

router.put('/:id', [
    validarJWT,
    check('id').custom(salaPorID),
    validarCampos
], actualizarSala);

router.delete('/:id', [
    validarJWT,
    check('id').custom(salaPorID),
], eliminarSala);

module.exports = router;