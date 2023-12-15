import { ImageModel } from "./ImageModel";
import { ProductModel } from "./ProductModel";

export interface ProductTemplateModel {
    id: number;
    name: string;
    description: string;
    defaultImages: ImageModel[];
    productCategoryId: number;
    products : ProductModel[];
}
