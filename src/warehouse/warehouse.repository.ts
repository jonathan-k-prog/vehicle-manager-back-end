import prisma from '../prisma'
import type {WarehouseDto, CreateWarehouseDto} from "./warehouse.dto";

async function addWarehouse(payload: CreateWarehouseDto): Promise<WarehouseDto> {
    try {
        return await prisma.warehouse.create({
            data: payload,
        });
    }catch (error){
        throw error;
    }
}

async function getAllWarehouses(): Promise<WarehouseDto[]> {
    try {
        return await prisma.warehouse.findMany({
        });
    }catch (error){
        throw error;
    }
}

async function updateWarehouse(id: number, payload: CreateWarehouseDto): Promise<WarehouseDto> {
    try {
        return await prisma.warehouse.update({
            data: payload,
            where: {
                id: id
            },
        });
    }catch (error){
        throw error;
    }
}

async function deleteWarehouse(id: number): Promise<WarehouseDto> {
    try {
        return await prisma.warehouse.delete({
            where: {
                id: id
            },
        });
    }catch (error){
        throw error;
    }
}

export default {
    addWarehouse,
    getAllWarehouses,
    updateWarehouse,
    deleteWarehouse,
};