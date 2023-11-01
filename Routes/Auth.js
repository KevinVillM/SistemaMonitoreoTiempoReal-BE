const {Router} = require('express');

const { check } = require('express-validator');
const { login } = require('../Controllers/Auth');
const { validarCampos } = require('../Middlewares');

const router = Router();

router.post('/login', [
    check('email','El correo no  es valido').isEmail(),
    check('password','La contraseña es obligatoria').not().isEmpty(),
    validarCampos
],login);


module.exports = router;