import { FeaturedProductTemplateModel } from "./FeaturedProductTemplateModel";
import { ProductModel } from "./ProductModel";

export interface ProductCategoryModel {
    id: number;
    name: string;
    isSelected: boolean;
    preferenceIndex: number;
    products: ProductModel[];
    featuredProduct: FeaturedProductTemplateModel;
}






