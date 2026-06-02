import {PartType} from "../part-type/part-type.model";
import {PartModel} from "../part-model/part-model.model";
import {Vehicle} from "../vehicle/vehicle.model";

export interface Part {
    id: number;
    state: string;
    partType: PartType;
    partModel: PartModel | null;
}

export interface PartPayload extends Omit<Part, "id"> {
    vehicle: Vehicle | null;
}