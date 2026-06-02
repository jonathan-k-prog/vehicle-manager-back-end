import partRepository from "./part.repository";
import partMapper from "./part.mapper";
import {PartPayload} from "./part.model";

async function addPart(payload: PartPayload) {
    try {
        const createDto = partMapper.objectToDto(payload);
        const dto = await partRepository.addPart(createDto);
        return partMapper.dtoToObject(dto);
    }catch(err) {
        throw err;
    }
}

async function getAllParts() {
    try {
        const dtoArray = await partRepository.getAllParts();

        console.log(dtoArray);

        return dtoArray.map(dto => partMapper.dtoToObject(dto));
    }catch(err) {
        throw err;
    }
}

async function updatePart(id: number, payload: PartPayload) {
    try {
        const updateDto = partMapper.objectToDto(payload);
        const dto = await partRepository.updatePart(id, updateDto);
        return partMapper.dtoToObject(dto);
    }catch(err) {
        throw err;
    }
}

async function deletePart(id: number) {
    try {
        const dto = await partRepository.deletePart(id);
        return partMapper.dtoToObject(dto);
    }catch(err) {
        throw err;
    }
}


export default {
    addPart,
    getAllParts,
    updatePart,
    deletePart
}