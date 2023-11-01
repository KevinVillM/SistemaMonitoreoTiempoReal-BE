const {Router} = require('express');
const { check } = require('express-validator');

const {validarCampos} = require('../Middlewares');
const { actualizarImagenClaudinary} = require('../Controllers/UploadCaptura');
const { capturaPorID } = require('../Helpers/Db_Validation');
const router = Router();

// router.post('/', cargarArchivo);

router.put('/:id', [
    check('id', 'El id debe ser de mongo').isMongoId(),
    check('id').custom(capturaPorID),
    validarCampos
], actualizarImagenClaudinary);

module.exports = router;