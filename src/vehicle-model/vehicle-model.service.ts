import type {VehicleModelPayload} from "./vehicle-model.model";
import vehicleModelRepository from "./vehicle-model.repository";
import vehicleModelMapper from "./vehicle-model.mapper";

async function addVehicleModel(payload: VehicleModelPayload) {
    try {
        const createDto = vehicleModelMapper.objectToDto(payload);
        const dto = await vehicleModelRepository.addVehicleModel(createDto);
        return vehicleModelMapper.dtoToObject(dto);
    }catch(err) {
        throw err;
    }
}

async function getAllVehicleModels() {
    try {
        const dtoArray = await vehicleModelRepository.getAllVehicleModels();
        return dtoArray.map(dto => vehicleModelMapper.dtoToObject(dto));
    }catch(err) {
        throw err;
    }
}

async function updateVehicleModel(id: number, payload: VehicleModelPayload) {
    try {
        const updateDto = vehicleModelMapper.objectToDto(payload);
        const dto = await vehicleModelRepository.updateVehicleModel(id, updateDto);
        return vehicleModelMapper.dtoToObject(dto);
    }catch(err) {
        throw err;
    }
}

async function deleteVehicleModel(id: number) {
    try {
        const dto = await vehicleModelRepository.deleteVehicleModel(id);
        return vehicleModelMapper.dtoToObject(dto);
    }catch(err) {
        throw err;
    }
}


export default {
    addVehicleModel,
    getAllVehicleModels,
    updateVehicleModel,
    deleteVehicleModel
}