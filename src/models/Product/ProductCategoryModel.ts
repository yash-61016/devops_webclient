import { FeaturedProductTemplateModel } from "./FeaturedProductTemplateModel";
import { ProductTemplateModel } from "./ProductTemplateModel";

export interface ProductCategoryModel {
    id: number;
    name: string;
    isSelected: boolean;
    preferenceIndex: number;
    productTemplates: ProductTemplateModel[] | null;
    featuredProduct: FeaturedProductTemplateModel | null;
}
