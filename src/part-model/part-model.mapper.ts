import {PartModelDto, CreatePartModelDto} from "./part-model.dto";
import {PartModel, PartModelPayload} from "./part-model.model";
import brandMapper from "../brand/brand.mapper";
import partTypeMapper from "../part-type/part-type.mapper";

function dtoToObject(dto: PartModelDto): PartModel {
    const brand = brandMapper.dtoToObject(dto.brand)
    const partType = partTypeMapper.dtoToObject(dto.partType)

    return {
        id: dto.id,
        name: dto.name,
        code: dto.code,
        brand,
        partType,
    }
}

function objectToDto(object: PartModelPayload): CreatePartModelDto {
    return {
        name: object.name,
        code: object.code,
        brandId: object.brand.id,
        partTypeId: object.partType.id
    }
}

export default {
    dtoToObject,
    objectToDto
}