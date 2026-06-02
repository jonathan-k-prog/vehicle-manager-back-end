import {VehicleDto, CreateVehicleDto} from "./vehicle.dto";
import {Vehicle, VehiclePayload} from "./vehicle.model";
import partMapper from "../part/part.mapper";
import vehicleModelMapper from "../vehicle-model/vehicle-model.mapper";
import warehouseMapper from "../warehouse/warehouse.mapper";

function dtoToObject(dto: VehicleDto): Vehicle {
    const parts = dto.parts.map(tmp => partMapper.dtoToObject(tmp));
    const vehicleModel = vehicleModelMapper.dtoToObject(dto.vehicleModel);
    const warehouse = warehouseMapper.dtoToObject(dto.warehouse)

    return {
        id: dto.id,
        serialNumber: dto.serialNumber,
        code: dto.code,
        parts,
        vehicleModel,
        warehouse,
    }
}

function objectToDto(object: VehiclePayload): CreateVehicleDto {
    return {
        serialNumber: object.serialNumber,
        code: object.code,
        vehicleModelId: object.vehicleModel.id,
        warehouseId: object.warehouse.id,
    }
}

export default {
    dtoToObject,
    objectToDto
}