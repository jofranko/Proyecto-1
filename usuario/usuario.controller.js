import Usuario from './usuario.model';

//POST /usuario
//El endpoint crea un usuario en la base de datos con los datos enviados al backend. 
export async function createUsuario(req, res) {
    try {
        const { email, name, password, phone, address, role } = req.body;
        const usuario = new Usuario({ email, name, password, phone, address, role });
        const resultado = await usuario.save();
        res.status(200).json(resultado);
    } catch (err) {
        res.status(500).json(err);
    }
}

//GET /usuario
//El endpoint retorna los datos del usuario que corresponden a las credenciales (correo y contraseña) o al id enviados al backend.
export async function getUsuario(req, res) {
    try {
        const { id, email, password } = req.params;
        let usuario
        id ? usuario = await Usuario.findOne({ _id: id, isDeleted: false}) : usuario = await Usuario.findOne({ email: email, password: password,isDeleted: false})
        res.status(200).json(usuario);
    } catch (err) {
        res.status(500).json(err);
    }
}

//PATCH /usuario
//El endpoint modifica los datos del usuario que corresponde a la id proveída, usando los datos proveídos.
export async function patchUsuario(req, res) {
    try {
        const { id, email, name, password, phone, address, role } = req.body;
        const usuario = await Usuario.findOne({ _id: id, isDeleted: false});
        usuario.email = email;
        usuario.name = name;
        usuario.password = password;
        usuario.phone = phone;
        usuario.address = address;
        usuario.role = role;
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
        const { id } = req.body;
        const usuario = await Usuario.findOne({ _id: id, isDeleted: false});
        usuario.isDeleted = true;
        const resultado = await usuario.save();
        res.status(200).json(resultado);
    } catch (err) {
        res.status(500).json(err);
    }
}