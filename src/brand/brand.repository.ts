import prisma from '../prisma'
import type {BrandDto, CreateBrandDto} from "./brand.dto";

async function addBrand(payload: CreateBrandDto): Promise<BrandDto> {
    try {
        return await prisma.brand.create({
            data: payload
        });
    }catch (error){
        throw error;
    }
}

async function getAllBrands(): Promise<BrandDto[]> {
    try {
        return await prisma.brand.findMany();
    }catch (error){
        throw error;
    }
}

async function updateBrand(id: number, payload: CreateBrandDto): Promise<BrandDto> {
    try {
        return await prisma.brand.update({
            data: payload,
            where: {
                id: id
            }
        });
    }catch (error){
        throw error;
    }
}

async function deleteBrand(id: number): Promise<BrandDto> {
    try {
        return await prisma.brand.delete({
            where: {
                id: id
            }
        });
    }catch (error){
        throw error;
    }
}

export default {
    addBrand,
    getAllBrands,
    updateBrand,
    deleteBrand,
};