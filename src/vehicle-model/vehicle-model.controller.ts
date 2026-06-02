import type { Request, Response } from 'express';
import vehicleModelService from './vehicle-model.service'

async function addVehicleModel(req: Request, res: Response) {
    try {
        const vehicleModel = req.body.vehicleModel;

        const result = await vehicleModelService.addVehicleModel(vehicleModel);

        res.status(201).json({ status: 'success',message: 'Vehicle Model added successfully', data: result, errors : null});
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: "Vehicle Model failed to add", data: null, errors: "An unexpected error occurred." });
    }
}

async function getAllVehicleModels(req: Request, res: Response) {
    try {
        const result = await vehicleModelService.getAllVehicleModels();

        res.status(201).json({ status: 'success',message: 'Vehicle Models fetched successfully', data: result, errors : null});
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: "Vehicle Models failed to fetch", data: null, errors: "An unexpected error occurred." });
    }
}

async function updateVehicleModel(req: Request, res: Response) {
    try {
        const vehicleModel = req.body.vehiculeModel;
        const id = req.params.id;

        const result = await vehicleModelService.updateVehicleModel(Number(id), vehicleModel);

        res.status(201).json({ status: 'success',message: 'Vehicle Model updated successfully', data: result, errors : null});
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: "Vehicle Model failed to update", data: null, errors: "An unexpected error occurred." });
    }
}

async function deleteVehicleModel(req: Request, res: Response) {
    try {
        const id = req.params.id;

        const result = await vehicleModelService.deleteVehicleModel(Number(id));

        res.status(201).json({ status: 'success',message: 'Vehicle Model deleted successfully', data: result, errors : null});
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: "Vehicle Model failed to delete", data: null, errors: "An unexpected error occurred." });
    }
}


export default {
    addVehicleModel,
    getAllVehicleModels,
    updateVehicleModel,
    deleteVehicleModel,
};