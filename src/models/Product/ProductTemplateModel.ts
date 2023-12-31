import { ImageModel } from "./ImageModel";
import { ProductModel } from "./ProductModel";

export interface ProductTemplateModel {
    id: number;
    name: string;
    brand: string;
    displayPrice: number;
    displayDiscountedPrice: number | null;
    description: string;
    defaultImages: ImageModel[];
    productCategoryId: number;
    products: ProductModel[];
    badges: string[];
}
