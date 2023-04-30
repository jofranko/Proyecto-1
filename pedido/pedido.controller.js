import PedidoModel from './pedido.model';

//POST /pedido
//El endpoint crea un pedido de un usuario a un restaurante en la base de datos con los datos enviados al backend.
export async function postPedido(req, res) {
    try {
        const { name, description, category, address, phone, logo } = req.body;
        const pedido = new PedidoModel({ name, description, category, address, phone, logo });
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
        const resultado = await PedidoModel.findById({ _id: req.params.id, isDeleleted: false});
        res.status(200).json(resultado);
    } catch (err) {
        res.status(500).json(err);
    }
}

//GET /pedido cantidad 1
//El endpoint retorna los datos de los pedidos realizados por el usuario proveído, enviados por el usuario proveído, pedidos a un restaurante proveído, y/o entre las fechas proveídas.
export async function getPedido1(req, res) {}

//GET /pedido cantidad 2
//El endpoint retorna los datos de los pedidos enviados, pero sin aceptar.
export async function getPedido2(req, res) {
    try {
        const resultado = await PedidoModel.find({ isDeleted: false, isAccepted: false });
        res.status(200).json(resultado);
    } catch (err) {
        res.status(500).json(err);
    }
}

//PATCH /pedido
//El endpoint modifica los datos del pedido que corresponde a la id proveída, usando los datos proveídos, a menos que este ya haya sido enviado
export async function patchPedido(req, res) {
    try {
        const resultado = await PedidoModel.findOneAndUpdate({_id: req.params.id, isDeleted: false, isAccepted: false}, req.body, { new: true});
        res.status(200).json(resultado);
    } catch (err) {
        res.status(500).json(err);
    }
}

//DELETE /pedido
//El endpoint “inhabilita” un producto que corresponde a la id proveída.
export async function deletePedido(req, res) {
    try {
        const resultado = await PedidoModel.findOneAndUpdate({_id: req.params.id, isDeleted: false}, { isDeleted: true }, { new: true});
        res.status(200).json(resultado);
    } catch (err) {
        res.status(500).json(err);
    }
}
