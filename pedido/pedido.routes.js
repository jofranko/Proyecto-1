import { postPedido , getPedido, getPedido2, getPedido3, patchPedido, deletePedido} from "./pedido.controller";
import { Router } from 'express';
const router = Router();
// POST localhost:8080/pedido/
router.post('/', postPedido);

// GET localhost:8080/pedido/noaceptado/
router.get('/noaceptado/', getPedido3);

// GET localhost:8080/pedido?user_id=13434&restaurant_id=2234324&delivery_id=11878
router.get('/', getPedido2);

// GET localhost:8080/pedido/644ead008c2578a099a9a309
router.get('/:id', getPedido);

// PATCH localhost:8080/pedido/644ebbf867a5dde135719893
router.patch('/:id', patchPedido);

// DELETE localhost:8080/pedido/644eb222e667e8dd98807127
router.delete('/:id', deletePedido);

export default router;