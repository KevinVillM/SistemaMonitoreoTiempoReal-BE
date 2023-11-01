//Crear las rutas para cada metodo

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos, validarJWT } = require('../Middlewares');
const { crearCaptura, getCaptura, getUnaCaptura, actualizarCaptura, eliminarCaptura } = require('../Controllers/CapturaController');
const { capturaPorID } = require('../Helpers/Db_Validation');

const router = Router();

router.get('/', validarJWT, getCaptura);

router.get('/:id', [
    validarJWT,
    check('id').custom(capturaPorID),
    validarCampos
], getUnaCaptura);

router.post('/', [
    validarJWT,
    check('url_captura', 'La url de la captura es obligatoria').not().isEmpty(),
    check('nom_captura', 'El nombre de la captura es obligatorio').not().isEmpty(),
    check('fecha_captura', 'La fecha de la captura es obligatoria').not().isEmpty(),
    validarCampos
], crearCaptura);

router.put('/:id', [
    validarJWT,
    check('id').custom(capturaPorID),
    validarCampos
], actualizarCaptura);

router.delete('/:id', [
    validarJWT,
    check('id').custom(capturaPorID),
], eliminarCaptura);

module.exports = router;
