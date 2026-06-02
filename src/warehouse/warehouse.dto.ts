import {Warehouse} from "./warehouse.model";

export interface WarehouseDto extends Warehouse {

}

export interface CreateWarehouseDto extends Omit<Warehouse, "id"> {
}