import { Router } from 'express';
import vehicleController from "./vehicle.controller";

const router = Router();

router.post('/', vehicleController.addVehicle);

router.get('/', vehicleController.getAllVehicles);

router.get('/code/:code', vehicleController.getVehicleByCode);

router.put('/:id', vehicleController.updateVehicle);

router.delete('/:id', vehicleController.deleteVehicle);


export default router;