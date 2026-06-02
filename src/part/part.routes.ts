import { Router } from 'express';
import partController from "./part.controller";

const router = Router();

router.post('/', partController.addPart);

router.get('/', partController.getAllParts);

router.put('/:id', partController.updatePart);

router.delete('/:id', partController.deletePart);


export default router;