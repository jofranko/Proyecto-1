const mongoose = require('mongoose');

const usuarioSchema = mongoose.Schema(
    {
        // campos
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        phone: { type: String, required: true },
        address: { type: String, required: true },
        role: { type: String, required: true, enum: ['cliente', 'domiciliario', 'administrador de restaurante'], default: 'cliente' },
        isDeleted: { type: Boolean, default: false },
    },
    { timestamps: true }
);

export default mongoose.model('usuario', usuarioSchema);
