import { ImageDTO } from "./ImageDTO";
import { ProductDTO } from "./ProductDTO";

export interface ProductTemplateDTO {
    id: number;
    name: string;
    brand: string;
    displayPrice: number;
    displayDiscountedPrice: number | null;
    description: string;
    defaultImages: ImageDTO[];
    productCategoryId: number;
    products: ProductDTO[];
    badges: string[];
}
