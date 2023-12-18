import { ProductDTO } from "./ProductDTO";
import { PropertyDTO } from "./PropertyDTO";

export interface FeaturedProductTemplateDTO {
    id: number;
    name: string;
    briefDescription: string;
    title: string;
    description: string;
    startingPrice: number;
    newFeatureImage: string;
    newFeatureDescription: string;
    newFeatureImage2: string;
    newFeatureDescription2: string;
    bannerTitle: string;
    bannerImages: string[];
    featuredImages: string[];
    productCategoryId: number;
    products: ProductDTO[];
    properties: PropertyDTO[];
}