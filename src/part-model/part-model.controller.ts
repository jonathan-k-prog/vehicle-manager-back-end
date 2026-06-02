import type { Request, Response } from 'express';
import partModelService from './part-model.service'

async function addPartModel(req: Request, res: Response) {
    try {
        const partModel = req.body.partModel;

        const result = await partModelService.addPartModel(partModel);

        res.status(201).json({ status: 'success',message: 'Part Model added successfully', data: result, errors : null});
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: "Part Model failed to add", data: null, errors: "An unexpected error occurred." });
    }
}

async function getAllPartModels(req: Request, res: Response) {
    try {
        const result = await partModelService.getAllPartModels();

        res.status(201).json({ status: 'success',message: 'Part Models fetched successfully', data: result, errors : null});
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: "Part Models failed to fetch", data: null, errors: "An unexpected error occurred." });
    }
}

async function updatePartModel(req: Request, res: Response) {
    try {
        const partModel = req.body.brand;
        const id = req.params.id;

        const result = await partModelService.updatePartModel(Number(id), partModel);

        res.status(201).json({ status: 'success',message: 'Part Model updated successfully', data: result, errors : null});
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: "Part Model failed to update", data: null, errors: "An unexpected error occurred." });
    }
}

async function deletePartModel(req: Request, res: Response) {
    try {
        const id = req.params.id;

        const result = await partModelService.deletePartModel(Number(id));

        res.status(201).json({ status: 'success',message: 'Part Model deleted successfully', data: result, errors : null});
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: "Part Model failed to delete", data: null, errors: "An unexpected error occurred." });
    }
}


export default {
    addPartModel,
    getAllPartModels,
    updatePartModel,
    deletePartModel,
};