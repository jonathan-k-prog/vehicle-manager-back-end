import type { Request, Response } from 'express';
import warehouseService from './warehouse.service'

async function addWarehouse(req: Request, res: Response) {
    try {
        const warehouse = req.body.warehouse;

        const result = await warehouseService.addWarehouse(warehouse);

        res.status(201).json({ status: 'success',message: 'Warehouse added successfully', data: result, errors : null});
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: "Warehouse failed to add", data: null, errors: "An unexpected error occurred." });
    }
}

async function getAllWarehouses(req: Request, res: Response) {
    try {
        const result = await warehouseService.getAllWarehouses();

        res.status(201).json({ status: 'success',message: 'Warehouses fetched successfully', data: result, errors : null});
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: "Warehouses failed to fetch", data: null, errors: "An unexpected error occurred." });
    }
}

async function updateWarehouse(req: Request, res: Response) {
    try {
        const warehouse = req.body.warehouse;
        const id = req.params.id;

        const result = await warehouseService.updateWarehouse(Number(id), warehouse);

        res.status(201).json({ status: 'success',message: 'Warehouse updated successfully', data: result, errors : null});
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: "Warehouse failed to update", data: null, errors: "An unexpected error occurred." });
    }
}

async function deleteWarehouse(req: Request, res: Response) {
    try {
        const id = req.params.id;

        const result = await warehouseService.deleteWarehouse(Number(id));

        res.status(201).json({ status: 'success',message: 'Warehouse deleted successfully', data: result, errors : null});
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: "Warehouse failed to delete", data: null, errors: "An unexpected error occurred." });
    }
}


export default {
    addWarehouse,
    getAllWarehouses,
    updateWarehouse,
    deleteWarehouse,
};