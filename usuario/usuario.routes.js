import { createUsuario, getUsuario, patchUsuario, deleteUsuario } from "./usuario.controller";
import {Router} from 'express';
const router = Router();

// GET /usuario
router.get('/', createUsuario );

// POST /usuario
router.post('/', getUsuario );

// PATCH /usuario
router.patch('/', patchUsuario);

// DELETE /usuario
router.delete('/', deleteUsuario);

export default router;