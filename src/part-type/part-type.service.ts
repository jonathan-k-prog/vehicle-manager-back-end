import {PartTypePayload} from "./part-type.model";
import partTypeRepository from "./part-type.repository";
import partTypeMapper from "./part-type.mapper";

async function addPartType(payload: PartTypePayload) {
    try {
        const createDto = partTypeMapper.objectToDto(payload);
        const dto = await partTypeRepository.addPartType(createDto);
        return partTypeMapper.dtoToObject(dto);
    }catch(err) {
        throw err;
    }
}

async function getAllPartTypes() {
    try {
        const dtoArray = await partTypeRepository.getAllPartTypes();
        return dtoArray.map(dto => partTypeMapper.dtoToObject(dto));
    }catch(err) {
        throw err;
    }
}

async function updatePartType(id: number, payload: PartTypePayload) {
    try {
        const updateDto = partTypeMapper.objectToDto(payload);
        const dto = await partTypeRepository.updatePartType(id, updateDto);
        return partTypeMapper.dtoToObject(dto);
    }catch(err) {
        throw err;
    }
}

async function deletePartType(id: number) {
    try {
        const dto = await partTypeRepository.deletePartType(id);
        return partTypeMapper.dtoToObject(dto);
    }catch(err) {
        throw err;
    }
}


export default {
    addPartType,
    getAllPartTypes,
    updatePartType,
    deletePartType
}