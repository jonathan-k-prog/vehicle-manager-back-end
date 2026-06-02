import {Brand} from "../brand/brand.model";
import {PartType} from "../part-type/part-type.model";

export interface PartModel {
    id: number;
    name: string;
    code: string;
    brand: Brand;
    partType: PartType;
}

export interface PartModelPayload extends Omit<PartModel, "id"> {
}