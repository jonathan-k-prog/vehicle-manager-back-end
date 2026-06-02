import {PartTypeDto, CreatePartTypeDto} from "./part-type.dto";
import {PartType, PartTypePayload} from "./part-type.model";

function dtoToObject(dto: PartTypeDto): PartType {
    return {
        id: dto.id,
        name: dto.name,
    }
}

function objectToDto(object: PartTypePayload): CreatePartTypeDto {
    return {
        name: object.name,
    }
}

export default {
    dtoToObject,
    objectToDto
}