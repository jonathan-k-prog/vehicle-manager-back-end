import vehicleRepository from "./vehicle.repository";
import vehicleMapper from "./vehicle.mapper";
import {VehiclePayload} from "./vehicle.model";

async function addVehicle(payload: VehiclePayload) {
    try {
        const createDto = vehicleMapper.objectToDto(payload);
        const dto = await vehicleRepository.addVehicle(createDto);
        return vehicleMapper.dtoToObject(dto);
    }catch(err) {
        throw err;
    }
}

async function getAllVehicles() {
    try {
        const dtoArray = await vehicleRepository.getAllVehicles();
        return dtoArray.map(dto => vehicleMapper.dtoToObject(dto));
    }catch(err) {
        throw err;
    }
}

async function getVehicleByCode(code: string) {
    try {
        const dto = await vehicleRepository.getVehicleByCode(code);

        return dto ? vehicleMapper.dtoToObject(dto) : null;
    }catch(err) {
        throw err;
    }
}

async function updateVehicle(id: number, payload: VehiclePayload) {
    try {
        const updateDto = vehicleMapper.objectToDto(payload);
        const dto = await vehicleRepository.updateVehicle(id, updateDto);
        return vehicleMapper.dtoToObject(dto);
    }catch(err) {
        throw err;
    }
}

async function deleteVehicle(id: number) {
    try {
        const dto = await vehicleRepository.deleteVehicle(id);
        return vehicleMapper.dtoToObject(dto);
    }catch(err) {
        throw err;
    }
}


export default {
    addVehicle,
    getAllVehicles,
    getVehicleByCode,
    updateVehicle,
    deleteVehicle
}