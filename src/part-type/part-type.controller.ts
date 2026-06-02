import type { Request, Response } from 'express';
import partTypeService from './part-type.service'

async function addPartType(req: Request, res: Response) {
    try {
        const partType = req.body.partType;

        const result = await partTypeService.addPartType(partType);

        res.status(201).json({ status: 'success',message: 'Part Type added successfully', data: result, errors : null});
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: "Part Type failed to add", data: null, errors: "An unexpected error occurred." });
    }
}

async function getAllPartTypes(req: Request, res: Response) {
    try {
        const result = await partTypeService.getAllPartTypes();

        res.status(201).json({ status: 'success',message: 'Part Types fetched successfully', data: result, errors : null});
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: "Part Types failed to fetch", data: null, errors: "An unexpected error occurred." });
    }
}

async function updatePartType(req: Request, res: Response) {
    try {
        const partType = req.body.partType;
        const id = req.params.id;

        const result = await partTypeService.updatePartType(Number(id), partType);

        res.status(201).json({ status: 'success',message: 'Part Type updated successfully', data: result, errors : null});
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: "Part Type failed to update", data: null, errors: "An unexpected error occurred." });
    }
}

async function deletePartType(req: Request, res: Response) {
    try {
        const id = req.params.id;

        const result = await partTypeService.deletePartType(Number(id));

        res.status(201).json({ status: 'success',message: 'Part Type deleted successfully', data: result, errors : null});
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: "Part Type failed to delete", data: null, errors: "An unexpected error occurred." });
    }
}


export default {
    addPartType,
    getAllPartTypes,
    updatePartType,
    deletePartType,
};