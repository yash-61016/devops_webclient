import { ImageModel } from "./ImageModel.ts";
import { PropertyModel } from "./PropertyModel.ts";

export interface ProductModel {
    id: number;
    name: string;
    price: number;
    discount: number;
    discountType: string;
    images: ImageModel;
    properties: PropertyModel[];
    productTemplateId: number;
    tags: string[];
}
