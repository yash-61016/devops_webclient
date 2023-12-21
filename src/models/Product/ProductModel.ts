import { ImageModel } from "./ImageModel";
import { PropertyModel } from "./PropertyModel";

export interface ProductModel {
    id: number;
    name: string;
    price: number;
    discounted_price: number | null;
    color: string | null;
    images: ImageModel;
    properties: PropertyModel[];
    productTemplateId: number;
    tags: string[];
}
