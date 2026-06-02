import prisma from '../prisma'
import {VehicleModelDto, CreateVehicleModelDto} from "./vehicle-model.dto";

async function addVehicleModel(payload: CreateVehicleModelDto): Promise<VehicleModelDto> {
    try {
        return await prisma.vehicleModel.create({
            data: payload,
            include: {
                brand: true
            }
        });
    }catch (error){
        throw error;
    }
}

async function getAllVehicleModels(): Promise<VehicleModelDto[]> {
    try {
        return await prisma.vehicleModel.findMany({
            include: {
                brand: true
            }
        });
    }catch (error){
        throw error;
    }
}

async function updateVehicleModel(id: number, payload: CreateVehicleModelDto): Promise<VehicleModelDto> {
    try {
        return await prisma.vehicleModel.update({
            data: payload,
            where: {
                id: id
            },
            include: {
                brand: true
            }
        });
    }catch (error){
        throw error;
    }
}

async function deleteVehicleModel(id: number): Promise<VehicleModelDto> {
    try {
        return await prisma.vehicleModel.delete({
            where: {
                id: id
            },
            include: {
                brand: true
            }
        });
    }catch (error){
        throw error;
    }
}

export default {
    addVehicleModel,
    getAllVehicleModels,
    updateVehicleModel,
    deleteVehicleModel,
};