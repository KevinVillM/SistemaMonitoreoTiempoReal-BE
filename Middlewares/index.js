const validarJWT  = require('../Middlewares/ValidarJWT');
const validarRoles = require('../Middlewares/ValidarROL');
const validarCampos = require('../Middlewares/ValidarCamposMiddleware');


module.exports = {
    ...validarJWT,
    ...validarRoles,
    ...validarCampos
}