const { response } = require('express');
const Captura = require('../Models/Captura');
const claudinary = require('cloudinary').v2;
claudinary.config(process.env.CLOUDINARY_URL);

const actualizarImagenClaudinary = async (req, res = response) => {
const { id } = req.params;

let captura = await Captura.findById(id);

    //Limpiar imágenes previas
    if (captura.url_captura) {
        const nombreArr = captura.url_captura.split('/');
        const nombre = nombreArr[nombreArr.length - 1];
        const [public_id] = nombre.split('.');
        await claudinary.uploader.destroy(public_id);
    }


    //Subir a cloudinary en la carpeta capturas
    const { tempFilePath } = req.files.archivo;
    const { secure_url } = await claudinary.uploader.upload(tempFilePath, { folder: 'capturas' });

    captura.url_captura = secure_url;

    await captura.save();

    res.json({
        captura
    });
}


module.exports = {
    actualizarImagenClaudinary
}