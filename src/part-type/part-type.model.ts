export interface PartType {
    id: number;
    name: string;
}

export interface PartTypePayload extends Omit<PartType, "id"> {
}