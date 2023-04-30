import { postPedido , getPedido, getPedidoByCategory, patchPedido, deletePedido} from "./pedido.controller";
import { Router } from 'express';
const router = Router();
// POST localhost:8080/producto/
router.post('/', postPedido);

// GET localhost:8080/producto/644e4ef4e1fae68e26c73f0b
router.get('/:id', getPedido);

// GET localhost:8080/producto?restaurant_id=524415641515&category=carne
router.get('', getPedidoByCategory);

// PATCH localhost:8080/producto/644e4ef4e1fae68e26c73f0b
router.patch('/:id', patchPedido);

// DELETE localhost:8080/producto/644e4ef4e1fae68e26c73f0b
router.delete('/:id', deletePedido);

export default router;