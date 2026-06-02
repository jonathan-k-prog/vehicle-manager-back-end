import type { Request, Response } from 'express';
import partService from './part.service'

async function addPart(req: Request, res: Response) {
    try {
        const part = req.body.part;

        const result = await partService.addPart(part);

        res.status(201).json({ status: 'success',message: 'Part added successfully', data: result, errors : null});
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: "Part failed to add", data: null, errors: "An unexpected error occurred." });
    }
}

async function getAllParts(req: Request, res: Response) {
    try {
        const result = await partService.getAllParts();

        res.status(201).json({ status: 'success',message: 'Parts fetched successfully', data: result, errors : null});
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: "Parts failed to fetch", data: null, errors: "An unexpected error occurred." });
    }
}

async function updatePart(req: Request, res: Response) {
    try {
        const part = req.body.part;
        const id = req.params.id;

        const result = await partService.updatePart(Number(id), part);

        res.status(201).json({ status: 'success',message: 'Part updated successfully', data: result, errors : null});
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: "Part failed to update", data: null, errors: "An unexpected error occurred." });
    }
}

async function deletePart(req: Request, res: Response) {
    try {
        const id = req.params.id;

        const result = await partService.deletePart(Number(id));

        res.status(201).json({ status: 'success',message: 'Part deleted successfully', data: result, errors : null});
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: "Part failed to delete", data: null, errors: "An unexpected error occurred." });
    }
}


export default {
    addPart,
    getAllParts,
    updatePart,
    deletePart,
};