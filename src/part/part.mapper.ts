import {CreatePartDto, PartDto} from "./part.dto";
import {Part, PartPayload} from "./part.model";
import partTypeMapper from "../part-type/part-type.mapper";
import partModelMapper from "../part-model/part-model.mapper";

function dtoToObject(dto: PartDto): Part {
    const partType = partTypeMapper.dtoToObject(dto.partType)
    const partModel = dto.partModel ? partModelMapper.dtoToObject(dto.partModel) : null;

    return {
        id: dto.id,
        state: dto.state,
        partType,
        partModel,
    }
}

function objectToDto(object: PartPayload): CreatePartDto {
    return {
        state: object.state,
        vehicleId: object.vehicle ? object.vehicle.id : null,
        partTypeId: object.partType.id,
        partModelId: object.partModel ? object.partModel.id : null
    }
}

export default {
    dtoToObject,
    objectToDto
}