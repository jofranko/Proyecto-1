import RestauranteModel from './restaurante.model';

//POST /restaurante
//El endpoint crea un restaurante en la base de datos con los datos enviados al backend.
export async function postRestaurante(req, res) {
    try {
        const { name, description, category, address, phone, logo } = req.body;
        const restaurante = new RestauranteModel({ name, description, category, address, phone, logo });
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
        const resultado = await RestauranteModel.findById({ _id: req.params.id, isDeleleted: false});
        res.status(200).json(resultado);
    } catch (err) {
        res.status(500).json(err);
    }
}

//GET /restaurante por categoria
//El endpoint retorna los datos de los restaurantes que correspondan a la categoría proveída y/o su nombre se asemeje a la búsqueda.
export async function getRestauranteByCategory(req, res) {
    try {
        const { category, name } = req.query;
        const filter = { category: category, name: { $regex: name, $options: 'i' }, isDeleted: false};
        //si no se envia el parametro category, se elimina category del filtro
        if (category == undefined) delete filter.category;
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
        const resultado = await RestauranteModel.findOneAndUpdate({_id: req.params.id, isDeleted: false}, req.body, { new: true});
        res.status(200).json(resultado);
    } catch (err) {
        res.status(500).json(err);
    }
}

//DELETE /restaurante
//El endpoint “inhabilita” un restaurante que corresponde a la id proveída.
export async function deleteRestaurante(req, res) {
    try {
        const resultado = await RestauranteModel.findOneAndUpdate({_id: req.params.id, isDeleted: false}, { isDeleted: true }, { new: true});
        res.status(200).json(resultado);
    } catch (err) {
        res.status(500).json(err);
    }
}