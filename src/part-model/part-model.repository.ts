import prisma from '../prisma'
import type {CreatePartModelDto, PartModelDto} from "./part-model.dto";

async function addPartModel(payload: CreatePartModelDto): Promise<PartModelDto> {
    try {
        return await prisma.partModel.create({
            data: payload,
            include: {
                brand: true,
                partType: true,
            }
        });
    }catch (error){
        throw error;
    }
}

async function getAllPartModels(): Promise<PartModelDto[]> {
    try {
        return await prisma.partModel.findMany({
            include: {
                brand: true,
                partType: true,
            }
        });
    }catch (error){
        throw error;
    }
}

async function updatePartModel(id: number, payload: CreatePartModelDto): Promise<PartModelDto> {
    try {
        return await prisma.partModel.update({
            data: payload,
            where: {
                id: id
            },
            include: {
                brand: true,
                partType: true,
            }
        });
    }catch (error){
        throw error;
    }
}

async function deletePartModel(id: number): Promise<PartModelDto> {
    try {
        return await prisma.partModel.delete({
            where: {
                id: id
            },
            include: {
                brand: true,
                partType: true,
            }
        });
    }catch (error){
        throw error;
    }
}

export default {
    addPartModel,
    getAllPartModels,
    updatePartModel,
    deletePartModel,
};