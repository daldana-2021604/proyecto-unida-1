const {Schema, model} = require('mongoose');

const CategoriaSchema= Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    descripcion:{
        type: String,
        required: [true, 'La descripción es obligatorio']
    }

});

module.exports = model('Categoria', CategoriaSchema)
