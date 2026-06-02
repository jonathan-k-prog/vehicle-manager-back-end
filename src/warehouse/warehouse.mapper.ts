import {CreateWarehouseDto, WarehouseDto} from "./warehouse.dto";
import {Warehouse, WarehousePayload} from "./warehouse.model";

function dtoToObject(dto: WarehouseDto): Warehouse {
    return {
        id: dto.id,
        name: dto.name,
    }
}

function objectToDto(object: WarehousePayload): CreateWarehouseDto {
    return {
        name: object.name,
    }
}

export default {
    dtoToObject,
    objectToDto
}