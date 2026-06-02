import prisma from '../prisma'
import {VehicleDto, CreateVehicleDto} from "./vehicle.dto";

async function addVehicle(payload: CreateVehicleDto): Promise<VehicleDto> {
    try {
        return await prisma.vehicle.create({
            data: payload,
            include: {
                warehouse: true,
                vehicleModel: {
                    include: {
                        brand: true
                    }
                },
                parts: {
                    include: {
                        partType: true,
                        partModel: {
                            include: {
                                partType: true,
                                brand: true
                            }
                        },
                    }
                }
            }
        });
    }catch (error){
        throw error;
    }
}

async function getAllVehicles(): Promise<VehicleDto[]> {
    try {
        return await prisma.vehicle.findMany({
            include: {
                warehouse: true,
                vehicleModel: {
                    include: {
                        brand: true
                    }
                },
                parts: {
                    include: {
                        partType: true,
                        partModel: {
                            include: {
                                partType: true,
                                brand: true
                            }
                        },
                    }
                }
            }
        });
    }catch (error){
        throw error;
    }
}

async function getVehicleByCode(code: string): Promise<VehicleDto> {
    try {
        return await prisma.vehicle.findFirst({
            where:{
                code: code
            },
            include: {
                warehouse: true,
                vehicleModel: {
                    include: {
                        brand: true
                    }
                },
                parts: {
                    include: {
                        partType: true,
                        partModel: {
                            include: {
                                partType: true,
                                brand: true
                            }
                        },
                    }
                }
            }
        });
    }catch (error){
        throw error;
    }
}

async function updateVehicle(id: number, payload: CreateVehicleDto): Promise<VehicleDto> {
    try {
        return await prisma.vehicle.update({
            data: payload,
            where: {
                id: id,
            },
            include: {
                warehouse: true,
                vehicleModel: {
                    include: {
                        brand: true
                    }
                },
                parts: {
                    include: {
                        partType: true,
                        partModel: {
                            include: {
                                partType: true,
                                brand: true
                            }
                        },
                    }
                }
            }
        });
    }catch (error){
        throw error;
    }
}

async function deleteVehicle(id: number): Promise<VehicleDto> {
    try {
        return await prisma.vehicle.delete({
            where: {
                id: id,
            },
            include: {
                warehouse: true,
                vehicleModel: {
                    include: {
                        brand: true
                    }
                },
                parts: {
                    include: {
                        partType: true,
                        partModel: {
                            include: {
                                partType: true,
                                brand: true
                            }
                        },
                    }
                }
            }
        });
    }catch (error){
        throw error;
    }
}

export default {
    addVehicle,
    getAllVehicles,
    getVehicleByCode,
    updateVehicle,
    deleteVehicle,
};