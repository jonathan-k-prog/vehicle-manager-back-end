import warehouseRepository from "./warehouse.repository";
import warehouseMapper from "./warehouse.mapper";
import {WarehousePayload} from "./warehouse.model";

async function addWarehouse(payload: WarehousePayload) {
    try {
        const createDto = warehouseMapper.objectToDto(payload);
        const dto = await warehouseRepository.addWarehouse(createDto);
        return warehouseMapper.dtoToObject(dto);
    }catch(err) {
        throw err;
    }
}

async function getAllWarehouses() {
    try {
        const dtoArray = await warehouseRepository.getAllWarehouses();

        console.log(dtoArray);

        return dtoArray.map(dto => warehouseMapper.dtoToObject(dto));
    }catch(err) {
        throw err;
    }
}

async function updateWarehouse(id: number, payload: WarehousePayload) {
    try {
        const updateDto = warehouseMapper.objectToDto(payload);
        const dto = await warehouseRepository.updateWarehouse(id, updateDto);
        return warehouseMapper.dtoToObject(dto);
    }catch(err) {
        throw err;
    }
}

async function deleteWarehouse(id: number) {
    try {
        const dto = await warehouseRepository.deleteWarehouse(id);
        return warehouseMapper.dtoToObject(dto);
    }catch(err) {
        throw err;
    }
}


export default {
    addWarehouse,
    getAllWarehouses,
    updateWarehouse,
    deleteWarehouse
}