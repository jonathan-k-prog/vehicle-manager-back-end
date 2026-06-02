import {PartModel} from "./part-model.model";
import {PartTypeDto} from "../part-type/part-type.dto";
import {BrandDto} from "../brand/brand.dto";

export interface PartModelDto extends Omit<PartModel, "partType" | "brand"> {
    partType: PartTypeDto;
    brand: BrandDto;
}

export interface CreatePartModelDto extends Omit<PartModel, "id" | "partType" | "brand"> {
    partTypeId: number;
    brandId: number;
}