import { postRestaurante , getRestaurante, getRestauranteByCategory, patchRestaurante, deleteRestaurante} from "./restaurante.controller";
import { Router } from 'express';
const router = Router();
// POST localhost:8080/restaurante/
router.post('/', postRestaurante);

// GET localhost:8080/restaurante/644e9b160b87b4cb872584dc
router.get('/:id', getRestaurante);

// GET localhost:8080/restaurante?name=bak&category=a
router.get('', getRestauranteByCategory);

// PATCH localhost:8080/restaurante/644e9b160b87b4cb872584dc
router.patch('/:id', patchRestaurante);

// DELETE localhost:8080/restaurante/644e9bf80b87b4cb872584e4
router.delete('/:id', deleteRestaurante);

export default router;