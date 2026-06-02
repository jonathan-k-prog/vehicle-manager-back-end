import type { Request, Response } from 'express';
import vehicleService from './vehicle.service'

async function addVehicle(req: Request, res: Response) {
    try {
        const vehicle = req.body.vehicle;

        const result = await vehicleService.addVehicle(vehicle);

        res.status(201).json({ status: 'success',message: 'Vehicle added successfully', data: result, errors : null});
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: "Vehicle failed to add", data: null, errors: "An unexpected error occurred." });
    }
}

async function getAllVehicles(req: Request, res: Response) {
    try {
        const result = await vehicleService.getAllVehicles();

        res.status(200).json({ status: 'success', message: 'Vehicles fetched successfully', data: result, errors : null});
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: "Vehicles failed to fetch", data: null, errors: "An unexpected error occurred." });
    }
}

async function getVehicleByCode(req: Request, res: Response) {
    try {
        const code = req.params.code;

        if(!code){
            res.status(400).json({ status: 'error', message: 'Code is required', data: null, errors : "An unexpected error occurred."});
        }

        const result = await vehicleService.getVehicleByCode(code as string);

        if (!result) {
            res.status(400).json({ status: 'error',message: 'Vehicle not found', data: null, errors : "An unexpected error occurred."});
        }

        res.status(200).json({ status: 'success', message: 'Vehicles fetched successfully', data: result, errors : null});
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: "Vehicles failed to fetch", data: null, errors: "An unexpected error occurred." });
    }
}

async function updateVehicle(req: Request, res: Response) {
    try {
        const vehicle = req.body.vehicle;
        const id = req.params.id;

        const result = await vehicleService.updateVehicle(Number(id), vehicle);

        res.status(201).json({ status: 'success', message: 'Vehicle updated successfully', data: result, errors : null});
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: "Vehicle failed to update", data: null, errors: "An unexpected error occurred." });
    }
}

async function deleteVehicle(req: Request, res: Response) {
    try {
        const id = req.params.id;

        const result = await vehicleService.deleteVehicle(Number(id));

        res.status(201).json({ status: 'success', message: 'Vehicle deleted successfully', data: result, errors : null});
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: "Vehicle failed to delete", data: null, errors: "An unexpected error occurred." });
    }
}


export default {
    addVehicle,
    getAllVehicles,
    getVehicleByCode,
    updateVehicle,
    deleteVehicle,
};