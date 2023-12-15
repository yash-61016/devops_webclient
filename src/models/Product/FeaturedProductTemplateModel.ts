import { ImageModel } from "./ImageModel";
import { ProductModel } from "./ProductModel";

export interface FeaturedProductTemplateModel {
    id: number;
    name: string;
    briefDescription: string;
    title: string;
    description: string;
    newFeatureImage: ImageModel;
    newFeatureDescription: string;
    bannerImages: ImageModel[];
    featuredImages: ImageModel[];
    productCategoryId: number;
    products: ProductModel[];
}