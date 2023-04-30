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
        const resultado = await ProductoModel.findById(req.params.id);
        res.status(200).json(resultado);
    } catch (err) {
        res.status(500).json(err);
    }
}

//GET /producto
//El endpoint retorna los datos de los productos que correspondan a el restaurante y/o categoría proveída.
export async function getAllProducto(req, res) {
    try {
        const { restaurant_id, category } = req.query;
        const resultado = await ProductoModel.find({ restaurant_id: restaurant_id, category: category });
        res.status(200).json(resultado);
    } catch (err) {
        res.status(500).json(err);
    }
}

