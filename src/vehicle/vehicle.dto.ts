import {Vehicle} from "./vehicle.model";
import {PartDto} from "../part/part.dto";
import {VehicleModelDto} from "../vehicle-model/vehicle-model.dto";
import {WarehouseDto} from "../warehouse/warehouse.dto";

export interface VehicleDto extends Omit<Vehicle, "parts" | "vehicleModel" | "warehouse"> {
    parts: PartDto[];
    vehicleModel: VehicleModelDto;
    warehouse: WarehouseDto;
}


export interface CreateVehicleDto extends Omit<Vehicle, "id" | "parts" | "vehicleModel" | "warehouse"> {
    vehicleModelId: number;
    warehouseId: number;
}