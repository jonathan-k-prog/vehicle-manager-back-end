import {VehicleModelDto, CreateVehicleModelDto} from "./vehicle-model.dto";
import {VehicleModel, VehicleModelPayload} from "./vehicle-model.model";
import brandMapper from "../brand/brand.mapper";

function dtoToObject(dto: VehicleModelDto): VehicleModel {
    const brand = brandMapper.dtoToObject(dto.brand)

    return {
        id: dto.id,
        name: dto.name,
        brand: dto.brand,
    }
}

function objectToDto(object: VehicleModelPayload): CreateVehicleModelDto {
    return {
        name: object.name,
        brandId: object.brand.id,
    }
}

export default {
    dtoToObject,
    objectToDto
}