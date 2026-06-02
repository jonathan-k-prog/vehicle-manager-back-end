import {BrandDto, CreateBrandDto} from "./brand.dto";
import {Brand, BrandPayload} from "./brand.model";

function dtoToObject(dto: BrandDto): Brand {
    return {
        id: dto.id,
        name: dto.name,
    }
}

function objectToDto(object: BrandPayload): CreateBrandDto {
    return {
        name: object.name,
    }
}

export default {
    dtoToObject,
    objectToDto
}