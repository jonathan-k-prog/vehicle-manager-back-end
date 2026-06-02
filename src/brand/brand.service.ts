import type {BrandPayload} from "./brand.model";
import brandRepository from "./brand.repository";
import brandMapper from "./brand.mapper";

async function addBrand(payload: BrandPayload) {
    try {
        const createDto = brandMapper.objectToDto(payload);
        const dto = await brandRepository.addBrand(createDto);
        return brandMapper.dtoToObject(dto);
    }catch(err) {
        throw err;
    }
}

async function getAllBrands() {
    try {
        const dtoArray = await brandRepository.getAllBrands();
        return dtoArray.map(dto => brandMapper.dtoToObject(dto));
    }catch(err) {
        throw err;
    }
}

async function updateBrand(id: number, payload: BrandPayload) {
    try {
        const updateDto = brandMapper.objectToDto(payload);
        const dto = await brandRepository.updateBrand(id, updateDto);
        return brandMapper.dtoToObject(dto);
    }catch(err) {
        throw err;
    }
}

async function deleteBrand(id: number) {
    try {
        const dto = await brandRepository.deleteBrand(id);
        return brandMapper.dtoToObject(dto);
    }catch(err) {
        throw err;
    }
}


export default {
    addBrand,
    getAllBrands,
    updateBrand,
    deleteBrand
}