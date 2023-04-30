import ProductoModel from './producto.model';

//POST /producto
//El endpoint crea un producto de un restaurante en la base de datos con los datos enviados al backend.
export async function postProducto(req, res) {
    try {
        const { restaurant_id, name, description, category, price} = req.body;
        const producto = new ProductoModel({ restaurant_id, name, description, category, price });
        const resultado = await producto.save();
        res.status(200).json(resultado);
    } catch (err) {
        res.status(500).json(err);
    }
}

//GET /producto
//El endpoint retorna los datos del producto que corresponde a la id proveída. 
export async function getProducto(req, res) {
    try {
        const resultado = await ProductoModel.findById({ _id: req.params.id, isDeleleted: false});
        res.status(200).json(resultado);
    } catch (err) {
        res.status(500).json(err);
    }
}

//GET /producto por restaurante id y/o categoria
//El endpoint retorna los datos de los productos que correspondan a el restaurante y/o categoría proveída.
export async function getProductoByRestaurantAndOrCategory(req, res) {
    try {
        const { restaurant_id, category } = req.query;
        const filter = { restaurant_id: restaurant_id,  category: category, isDeleted: false};
        //si no se envia el parametro category, se elimina category del filtro
        if (category == undefined) delete filter.category;
        const resultado = await ProductoModel.find(filter);
        res.status(200).json(resultado);
    } catch (err) {
        res.status(500).json(err);
    }
}

//PATCH /producto
//El endpoint modifica los datos del producto que corresponde a la id proveída, usando los datos proveídos.
export async function patchProducto(req, res) {
    try {
        const producto = await ProductoModel.findOneAndUpdate({_id: req.params.id, isDeleted: false}, req.body, { new: true});
        const resultado = await producto.save();
        res.status(200).json(resultado);
    } catch (err) {
        res.status(500).json(err);
    }
}

//DELETE /producto
//El endpoint “inhabilita” un producto que corresponde a la id proveída.
export async function deleteProducto(req, res) {
    try {
        const producto = await ProductoModel.findOneAndUpdate({_id: req.params.id, isDeleted: false}, { isDeleted: true }, { new: true});
        const resultado = await producto.save();
        res.status(200).json(resultado);
    } catch (err) {
        res.status(500).json(err);
    }
}