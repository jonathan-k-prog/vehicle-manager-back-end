import { Router } from 'express';
import vehicleModelController from "./vehicle-model.controller";

const router = Router();

router.post('/', vehicleModelController.addVehicleModel);

router.get('/', vehicleModelController.getAllVehicleModels);

router.put('/:id', vehicleModelController.updateVehicleModel);

router.delete('/:id', vehicleModelController.deleteVehicleModel);


export default router;