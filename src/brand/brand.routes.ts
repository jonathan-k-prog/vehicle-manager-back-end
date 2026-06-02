import { Router } from 'express';
import brandController from "./brand.controller";

const router = Router();

router.post('/', brandController.addBrand);

router.get('/', brandController.getAllBrands);

router.put('/:id', brandController.updateBrand);

router.delete('/:id', brandController.deleteBrand);


export default router;