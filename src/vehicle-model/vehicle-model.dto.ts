import {VehicleModel} from "./vehicle-model.model";
import {BrandDto} from "../brand/brand.dto";

export interface VehicleModelDto extends Omit<VehicleModel, "brand"> {
    brand: BrandDto
}


export interface CreateVehicleModelDto extends Omit<VehicleModel, "id" | "brand"> {
    brandId: number
}