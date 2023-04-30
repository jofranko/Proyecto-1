import { postProducto, getProducto, getProductoByRestaurantAndOrCategory, patchProducto, deleteProducto} from "./producto.controller";
import { Router } from 'express';
const router = Router();
// POST localhost:8080/producto/
router.post('/', postProducto);

// GET localhost:8080/producto/644e4ef4e1fae68e26c73f0b
router.get('/:id', getProducto);

// GET localhost:8080/producto?restaurant_id=524415641515&category=carne
router.get('', getProductoByRestaurantAndOrCategory);

// PATCH localhost:8080/producto/644e4ef4e1fae68e26c73f0b
router.patch('/:id', patchProducto);

// DELETE localhost:8080/producto/644e4ef4e1fae68e26c73f0b
router.delete('/:id', deleteProducto);

export default router;