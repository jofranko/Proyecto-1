import { postUsuario, getUsuarioById, getUsuarioByEmailAndPassword, patchUsuario, deleteUsuario } from "./usuario.controller";
import { Router } from 'express';
const router = Router();
// POST localhost:8080/usuario/
router.post('/', postUsuario);
// GET localhost:8080/usuario/644e111b3f6e7f0b363505a5
router.get('/:id', getUsuarioById);
// GET localhost:8080/usuario?email=jofrankorozcoll@gmail.com&password=12345
router.get('', getUsuarioByEmailAndPassword);
// PATCH localhost:8080/usuario/644e3d2b86f014ea7cb929c0
router.patch('/:id', patchUsuario);
// DELETE localhost:8080/usuario/644e3d2b86f014ea7cb929c0
router.delete('/:id', deleteUsuario);

export default router;