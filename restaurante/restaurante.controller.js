import RestauranteModel from './restaurante.model';

//POST /restaurante
//El endpoint crea un restaurante en la base de datos con los datos enviados al backend.
export async function postRestaurante(req, res) {
    try {
        const { name, address, category, description, inventory } = req.body;
        const restaurante = new RestauranteModel({ name, address, category, description, inventory });
        const resultado = await restaurante.save();
        res.status(200).json(resultado);
    } catch (err) {
        res.status(500).json(err);
    }
}

//GET /restaurante
//El endpoint retorna los datos del restaurante que corresponde a la id proveída
export async function getRestaurante(req, res) {
    try {
        const restaurante = await RestauranteModel.findOne({ _id: req.params.id, isDeleted: false});
        res.status(200).json(restaurante);
    } catch (err) {
        res.status(500).json(err);
    }
}

//GET /restaurante por categoria
//El endpoint retorna los datos de los restaurantes que correspondan a la categoría proveída y/o su nombre se asemeje a la búsqueda.
export async function getRestauranteByCategory(req, res) {
    try {
        const {  name, category} = req.query;
        const filter = {name: { $regex: name, $options: 'i' }, category: { $regex: category, $options: 'i' }, isDeleted: false};
        const resultado = await RestauranteModel.find(filter);
        res.status(200).json(resultado);
    } catch (err) {
        res.status(500).json(err);
    }
}

//PATCH /restaurante
//El endpoint modifica los datos del restaurante que corresponde a la id proveída, usando los datos proveídos.
export async function patchRestaurante(req, res) {
    try {
        const restaurante = await RestauranteModel.findOneAndUpdate({_id: req.params.id, isDeleted: false}, req.body, { new: true});
        const resultado = await restaurante.save();
        res.status(200).json(resultado);
    } catch (err) {
        res.status(500).json(err);
    }
}

//DELETE /restaurante
//El endpoint “inhabilita” un restaurante que corresponde a la id proveída.
export async function deleteRestaurante(req, res) {
    try {
        const restaurante = await RestauranteModel.findOneAndUpdate({_id: req.params.id, isDeleted: false}, { isDeleted: true }, { new: true});
        const resultado = await restaurante.save();
        res.status(200).json(resultado);
    } catch (err) {
        res.status(500).json(err);
    }
}