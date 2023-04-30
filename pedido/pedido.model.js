const mongoose = require('mongoose');

const pedidoSchema = mongoose.Schema(
    {
        // campos
        user_id: { type: String, required: true },
        restaurant_id: { type: String, required: true },
        delivery_id: { type: String, required: true },
        name: { type: String, required: true },
        description: { type: String, required: true },
        category: { type: String, required: true },
        quantity: { type: Number, required: true },
        total: { type: Number, required: true, min: 0 },
        address: { type: String, required: true },
        phone: { type: String, required: true },
        isDeleted: { type: Boolean, default: false },
        created: { type: Boolean, default: true },
        sent: { type: Boolean, default: false },
        accepted: { type: Boolean, default: false },
        received: { type: Boolean, default: false },
        onItsWay: { type: Boolean, default: false },
        completed: { type: Boolean, default: false },
    },
    { timestamps: true }
);

export default mongoose.model('pedido', pedidoSchema);
