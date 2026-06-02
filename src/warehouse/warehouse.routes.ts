import { Router } from 'express';
import warehouseController from "./warehouse.controller";

const router = Router();

router.post('/', warehouseController.addWarehouse);

router.get('/', warehouseController.getAllWarehouses);

router.put('/:id', warehouseController.updateWarehouse);

router.delete('/:id', warehouseController.deleteWarehouse);

export default router;