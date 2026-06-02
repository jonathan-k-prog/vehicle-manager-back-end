import {PartType} from "./part-type.model";

export interface PartTypeDto extends PartType {
}


export interface CreatePartTypeDto extends Omit<PartType, "id"> {
}