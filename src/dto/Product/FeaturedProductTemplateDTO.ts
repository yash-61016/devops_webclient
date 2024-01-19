import { ImageModel } from "../../models/Product/ImageModel";
import { ProductDTO } from "./ProductDTO";
import { PropertyDTO } from "./PropertyDTO";

export interface FeaturedProductTemplateDTO {
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
    products: ProductDTO[];
    properties: PropertyDTO[];
}