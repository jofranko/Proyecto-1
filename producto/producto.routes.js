import { postProducto, getProducto, getAllProducto } from "./producto.controller";
import { Router } from 'express';
const router = Router();
// POST localhost:8080/producto/
router.post('/', postProducto);
// GET localhost:8080/producto/644e4ef4e1fae68e26c73f0b
router.get('/:id', getProducto);
// GET localhost:8080/usuario?email=jofrankorozcoll@gmail.com&password=12345
router.get('', getAllProducto);
// // PATCH localhost:8080/usuario/644e3d2b86f014ea7cb929c0
// router.patch('/:id', patchProducto);
// // DELETE localhost:8080/usuario/644e3d2b86f014ea7cb929c0
// router.delete('/:id', deleteProducto);

export default router;