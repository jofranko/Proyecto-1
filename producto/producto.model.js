const mongoose = require('mongoose');

const productoSchema = mongoose.Schema(
    {
        // campos
        restaurant_id: { type: String, required: true },
        name: { type: String, required: true },
        description: { type: String, required: true },
        category: { type: String, required: true },
        price: { type: Number, required: true, min: 0 },
        isDeleted: { type: Boolean, default: false },
    },
    { timestamps: true }
);

export default mongoose.model('producto', productoSchema);