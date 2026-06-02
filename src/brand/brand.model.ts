export interface Brand {
    id: number;
    name: string;
}

export interface BrandPayload extends Omit<Brand, "id"> {
}