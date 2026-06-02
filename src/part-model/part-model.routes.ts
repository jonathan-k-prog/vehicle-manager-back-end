import { Router } from 'express';
import partModelController from "./part-model.controller";

const router = Router();

router.post('/', partModelController.addPartModel);

router.get('/', partModelController.getAllPartModels);

router.put('/:id', partModelController.updatePartModel);

router.delete('/:id', partModelController.deletePartModel);


export default router;