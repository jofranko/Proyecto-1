import { postRestaurante , getRestaurante, getRestauranteByCategory, patchRestaurante, deleteRestaurante} from "./producto.controller";
import { Router } from 'express';
const router = Router();
// POST localhost:8080/producto/
router.post('/', postRestaurante);

// GET localhost:8080/producto/644e4ef4e1fae68e26c73f0b
router.get('/:id', getRestaurante);

// GET localhost:8080/producto?restaurant_id=524415641515&category=carne
router.get('', getRestauranteByCategory);

// PATCH localhost:8080/producto/644e4ef4e1fae68e26c73f0b
router.patch('/:id', patchRestaurante);

// DELETE localhost:8080/producto/644e4ef4e1fae68e26c73f0b
router.delete('/:id', deleteRestaurante);

export default router;