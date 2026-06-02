import {Part} from "../part/part.model";
import {VehicleModel} from "../vehicle-model/vehicle-model.model";
import {Warehouse} from "../warehouse/warehouse.model";

export interface Vehicle {
    id: number;
    serialNumber: string;
    code: string;
    parts: Part[];
    vehicleModel: VehicleModel;
    warehouse: Warehouse;
}

export interface VehiclePayload extends Omit<Vehicle, "id"> {
}