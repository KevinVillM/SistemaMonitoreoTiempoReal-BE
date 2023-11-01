const {Router} = require('express');
const { empleadoGet,
        empleadoPut, 
        empleadoPost, 
        empleadoDelete, 
        empleadoUnoGet} = require('../Controllers/EmpleadoController');
const { check } = require('express-validator');
const { empleadoPorID } = require('../Helpers/Db_Validation');
const { validarJWT, validarCampos } = require('../Middlewares');

const router = Router();

router.get('/',empleadoGet);

router.get('/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(empleadoPorID),
    validarCampos
],empleadoUnoGet);


router.put('/:cod_empleado', [
    check('cod_empleado').custom(empleadoPorID),
    // check('rol').custom(esRolValido),
    validarCampos
], empleadoPut);

router.post('/', [
    check('cod_empleado','El codigo del empleado es obligatorio').not().isEmpty(),
    check('nom_empleado','El nombre es obligatorio').not().isEmpty(),
    check('dui','El DUI es obligatorio').not().isEmpty(),
    //check('rol').custom(esRolValido),
    validarCampos
], empleadoPost);

router.delete('/:cod_empleado', [
    check('cod_empleado').custom(empleadoPorID),
    //esAdminRole,
    // tieneRole('ADMIN_ROL', 'USER_ROL'),
    validarCampos
], empleadoDelete);

module.exports = router;