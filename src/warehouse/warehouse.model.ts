import {PartType} from "../part-type/part-type.model";
import {PartModel} from "../part-model/part-model.model";
import {Vehicle} from "../vehicle/vehicle.model";

export interface Warehouse {
    id: number;
    name: string;
}

export interface WarehousePayload extends Omit<Warehouse, "id"> {

}