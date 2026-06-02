import partModelRepository from "./part-model.repository";
import partModelMapper from "./part-model.mapper";
import {PartModelPayload} from "./part-model.model";

async function addPartModel(payload: PartModelPayload) {
    try {
        const createDto = partModelMapper.objectToDto(payload);
        const dto = await partModelRepository.addPartModel(createDto);
        return partModelMapper.dtoToObject(dto);
    }catch(err) {
        throw err;
    }
}

async function getAllPartModels() {
    try {
        const dtoArray = await partModelRepository.getAllPartModels();
        return dtoArray.map(dto => partModelMapper.dtoToObject(dto));
    }catch(err) {
        throw err;
    }
}

async function updatePartModel(id: number, payload: PartModelPayload) {
    try {
        const updateDto = partModelMapper.objectToDto(payload);
        const dto = await partModelRepository.updatePartModel(id, updateDto);
        return partModelMapper.dtoToObject(dto);
    }catch(err) {
        throw err;
    }
}

async function deletePartModel(id: number) {
    try {
        const dto = await partModelRepository.deletePartModel(id);
        return partModelMapper.dtoToObject(dto);
    }catch(err) {
        throw err;
    }
}


export default {
    addPartModel,
    getAllPartModels,
    updatePartModel,
    deletePartModel
}