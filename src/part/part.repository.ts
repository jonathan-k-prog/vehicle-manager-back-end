import prisma from '../prisma'
import type {PartDto, CreatePartDto} from "./part.dto";

async function addPart(payload: CreatePartDto): Promise<PartDto> {
    try {
        return await prisma.part.create({
            data: payload,
            include: {
                partType: true,
                partModel: {
                    include: {
                        partType: true,
                        brand: true
                    }
                },
            }
        });
    }catch (error){
        throw error;
    }
}

async function getAllParts(): Promise<PartDto[]> {
    try {
        return await prisma.part.findMany({
            include: {
                partType: true,
                partModel: {
                    include: {
                        partType: true,
                        brand: true
                    }
                },
            }
        });
    }catch (error){
        throw error;
    }
}

async function updatePart(id: number, payload: CreatePartDto): Promise<PartDto> {
    try {
        return await prisma.part.update({
            data: payload,
            where: {
                id: id
            },
            include: {
                partType: true,
                partModel: {
                    include: {
                        partType: true,
                        brand: true
                    }
                },
            }
        });
    }catch (error){
        throw error;
    }
}

async function deletePart(id: number): Promise<PartDto> {
    try {
        return await prisma.part.delete({
            where: {
                id: id
            },
            include: {
                partType: true,
                partModel: {
                    include: {
                        partType: true,
                        brand: true
                    }
                },
            }
        });
    }catch (error){
        throw error;
    }
}

export default {
    addPart,
    getAllParts,
    updatePart,
    deletePart,
};