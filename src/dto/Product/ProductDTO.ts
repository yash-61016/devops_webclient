import { ImageDTO } from "./ImageDTO";
import { PropertyDTO } from "./PropertyDTO";

export interface ProductDTO {
    id: number;
    name: string;
    price: number;
    discounted_price: number | null;
    color: string | null;
    images: ImageDTO;
    properties: PropertyDTO[];
    productTemplateId: number;
    tags: string[];
}