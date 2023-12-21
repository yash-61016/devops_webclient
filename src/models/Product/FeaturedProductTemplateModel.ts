import { ImageModel } from "./ImageModel";
import { ProductModel } from "./ProductModel";
import { PropertyModel } from "./PropertyModel";

export interface FeaturedProductTemplateModel {
    id: number;
    name: string;
    briefDescription: string;
    title: string;
    description: string;
    startingPrice: number;
    newFeatureImage: ImageModel;
    newFeatureDescription: string;
    newFeatureImage2: ImageModel;
    newFeatureDescription2: string;
    bannerTitle: string;
    bannerImages: ImageModel[];
    featuredImages: ImageModel[];
    productCategoryId: number;
    products: ProductModel[];
    properties: PropertyModel[];
}