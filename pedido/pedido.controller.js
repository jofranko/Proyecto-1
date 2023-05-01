import PedidoModel from './pedido.model';

//POST /pedido
//El endpoint crea un pedido de un usuario a un restaurante en la base de datos con los datos enviados al backend.
export async function postPedido(req, res) {
    try {
        const { user_id, restaurant_id,delivery_id, name, description, category, quantity, total, address,phone } = req.body;
        const pedido = new PedidoModel({ user_id, restaurant_id, delivery_id,name, description, category, quantity, total, address,phone });
        const resultado = await pedido.save();
        res.status(200).json(resultado);
    } catch (err) {
        res.status(500).json(err);
    }
}

//GET /pedido
//El endpoint retorna los datos del pedido que corresponde a la id proveída. 
export async function getPedido(req, res) {
    try {
        const resultado = await PedidoModel.findOne({ _id: req.params.id, isDeleted: false});
        res.status(200).json(resultado);
    } catch (err) {
        res.status(500).json(err);
    }
}

//GET /pedido 2
//El endpoint retorna los datos de los pedidos realizados por el usuario proveído, enviados por el usuario proveído, pedidos a un restaurante proveído y/o entre las fechas proveídas
export async function getPedido2(req, res) {
    try {
        const { user_id, restaurant_id, delivery_id, a_date, b_date} = req.query;
        const filter = {user_id: user_id, restaurant_id: restaurant_id, delivery_id: delivery_id, createdAt: {$gte: new Date(a_date),$lte: new Date(b_date),}, isDeleted: false};
        const resultado = await PedidoModel.find(filter);
        res.status(200).json(resultado);
    } catch (err) {
        res.status(500).json(err);
    }
}

//GET /pedido 3
//El endpoint retorna los datos de los pedidos enviados, pero sin aceptar.
export async function getPedido3(req, res) {
    try {
        const resultado = await PedidoModel.find({ sent: true,  accepted: false, isDeleted: false });
        res.status(200).json(resultado);
    } catch (err) {
        res.status(500).json(err);
    }
}

//PATCH /pedido
//El endpoint modifica los datos del pedido que corresponde a la id proveída, usando los datos proveídos, a menos que este ya haya sido enviado
export async function patchPedido(req, res) {
    try {
        //si sent es true, no se puede modificar los datos, solo los estados
        const pedido = await PedidoModel.findOne({_id: req.params.id, isDeleted: false}).then((pedido) => {
        if(pedido.sent){
            delete req.body.user_id, req.body.restaurant_id, req.body.delivery_id, req.body.name, req.body.description, req.body.category, req.body.quantity, req.body.total, req.body.address, req.body.phone;
        }});
        const pedido2 = await PedidoModel.findOneAndUpdate({_id: req.params.id, isDeleted: false}, req.body, { new: true});
        const resultado = await pedido2.save();
        res.status(200).json(resultado);
    } catch (err) {
        res.status(500).json(err);
    }
}

//DELETE /pedido
//El endpoint “inhabilita” un producto que corresponde a la id proveída.
export async function deletePedido(req, res) {
    try {
        const pedido = await PedidoModel.findOneAndUpdate({_id: req.params.id, isDeleted: false}, { isDeleted: true }, { new: true});
        const resultado = await pedido.save();
        res.status(200).json(resultado);
    } catch (err) {
        res.status(500).json(err);
    }
}
