import type { Request, Response } from 'express';
import brandService from './brand.service'

async function addBrand(req: Request, res: Response) {
    try {
        const brand = req.body.brand;

        console.log(brand);

        const result = await brandService.addBrand(brand);

        res.status(201).json({ status: 'success',message: 'Brand added successfully', data: result, errors : null});
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: "Brand failed to add", data: null, errors: "An unexpected error occurred." });
    }
}

async function getAllBrands(req: Request, res: Response) {
    try {
        const result = await brandService.getAllBrands();

        res.status(201).json({ status: 'success',message: 'Brands fetched successfully', data: result, errors : null});
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: "Brands failed to fetch", data: null, errors: "An unexpected error occurred." });
    }
}

async function updateBrand(req: Request, res: Response) {
    try {
        const brand = req.body.brand;
        const id = req.params.id;

        const result = await brandService.updateBrand(Number(id), brand);

        res.status(201).json({ status: 'success',message: 'Brand updated successfully', data: result, errors : null});
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: "Brand failed to update", data: null, errors: "An unexpected error occurred." });
    }
}

async function deleteBrand(req: Request, res: Response) {
    try {
        const id = req.params.id;

        const result = await brandService.deleteBrand(Number(id));

        res.status(201).json({ status: 'success',message: 'Brand deleted successfully', data: result, errors : null});
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: "Brand failed to delete", data: null, errors: "An unexpected error occurred." });
    }
}


export default {
    addBrand,
    getAllBrands,
    updateBrand,
    deleteBrand,
};