import { Router } from 'express';
import partTypeController from "./part-type.controller";

const router = Router();

router.post('/', partTypeController.addPartType);

router.get('/', partTypeController.getAllPartTypes);

router.put('/:id', partTypeController.updatePartType);

router.delete('/:id', partTypeController.deletePartType);


export default router;