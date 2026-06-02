import {Brand} from "./brand.model";

export interface BrandDto extends Brand {
}


export interface CreateBrandDto extends Omit<Brand, "id"> {
}