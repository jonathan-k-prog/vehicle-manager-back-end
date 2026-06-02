import {Brand} from "../brand/brand.model";

export interface VehicleModel {
    id: number;
    name: string;
    brand: Brand
}

export interface VehicleModelPayload extends Omit<VehicleModel, "id"> {
}