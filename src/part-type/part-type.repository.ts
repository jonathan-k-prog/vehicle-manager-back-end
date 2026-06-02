import prisma from '../prisma'
import type {PartTypeDto, CreatePartTypeDto} from "./part-type.dto";

async function addPartType(payload: CreatePartTypeDto): Promise<PartTypeDto> {
    try {
        return await prisma.partType.create({
            data: payload
        });
    }catch (error){
        throw error;
    }
}

async function getAllPartTypes(): Promise<PartTypeDto[]> {
    try {
        return await prisma.partType.findMany();
    }catch (error){
        throw error;
    }
}

async function updatePartType(id: number, payload: CreatePartTypeDto): Promise<PartTypeDto> {
    try {
        return await prisma.partType.update({
            data: payload,
            where: {
                id: id
            }
        });
    }catch (error){
        throw error;
    }
}

async function deletePartType(id: number): Promise<PartTypeDto> {
    try {
        return await prisma.partType.delete({
            where: {
                id: id
            }
        });
    }catch (error){
        throw error;
    }
}

export default {
    addPartType,
    getAllPartTypes,
    updatePartType,
    deletePartType,
};