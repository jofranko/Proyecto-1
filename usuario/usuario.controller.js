import UsuarioModel from './usuario.model';

//POST /usuario
//El endpoint crea un usuario en la base de datos con los datos enviados al backend. 
export async function postUsuario(req, res) {
    try {
        const { name, email, password, phone, address, role } = req.body;
        const usuario = new UsuarioModel({  name, email, password, phone, address, role });
        const resultado = await usuario.save();
        res.status(200).json(resultado);
    } catch (err) {
        res.status(500).json(err);
    }
}

//GET /usuario por id
//El endpoint retorna los datos del usuario que corresponden al id proveida.
export async function getUsuarioById(req, res) {
    try {
        const { id } = req.params;
        const usuario = await UsuarioModel.findOne({ _id: id, isDeleted: false})
        res.status(200).json(usuario);
    } catch (err) {
        res.status(500).json(err);
    }
}

//GET /usuario por correo y contraseña
//El endpoint retorna los datos del usuario que corresponden a las credenciales correo y contraseña.
export async function getUsuarioByEmailAndPassword(req, res) {
    try {
        const { email, password} = req.query;
        const usuario = await UsuarioModel.findOne({ email: email, password: password, isDeleted: false})
        res.status(200).json(usuario);
    } catch (err) {
        res.status(500).json(err);
    }
}

//PATCH /usuario
//El endpoint modifica los datos del usuario que corresponde a la id proveída, usando los datos proveídos.
export async function patchUsuario(req, res) {
    try {
        const usuario = await UsuarioModel.findOneAndUpdate({ _id: req.params.id, isDeleted: false}, req.body, { new: true});
        const resultado = await usuario.save();
        res.status(200).json(resultado);
    } catch (err) {
        res.status(500).json(err);
    }
}

//DELETE /usuario
//El endpoint “inhabilita” un usuario que corresponde a la id proveída.
export async function deleteUsuario(req, res) {
    try {
        const usuario = await UsuarioModel.findOneAndUpdate({ _id: req.params.id, isDeleted: false}, {isDeleted: true}, {new: true});
        const resultado = await usuario.save();
        res.status(200).json(resultado);
    } catch (err) {
        res.status(500).json(err);
    }
}