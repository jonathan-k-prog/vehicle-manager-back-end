import {Part} from "./part.model";
import {PartTypeDto} from "../part-type/part-type.dto";
import {PartModelDto} from "../part-model/part-model.dto";

export interface PartDto extends Omit<Part, | "partType" | "partModel"> {
    partType: PartTypeDto;
    partModel: PartModelDto;
}

export interface CreatePartDto extends Omit<Part, "id" | "partType" | "partModel"> {
    vehicleId: number | null;
    partModelId: number | null;
    partTypeId: number;
}