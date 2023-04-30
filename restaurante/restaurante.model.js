const mongoose = require('mongoose');

const restauranteSchema = mongoose.Schema(
    {
        // campos
        name: { type: String, required: true },
        description: { type: String, required: true },
        category: { type: String, required: true },
        address: { type: String, required: true },
        phone: { type: String, required: true },
        logo: { type: String, required: true },
        isDeleted: { type: Boolean, default: false },
    },
    { timestamps: true }
);

export default mongoose.model('restaurante', restauranteSchema);