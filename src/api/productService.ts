import { FeaturedProductTemplateDTO } from "../dto/Product/FeaturedProductTemplateDTO";
import { ProductCategoryDTO } from "../dto/Product/ProductCategoryDTO";
import { ProductTemplateDTO } from "../dto/Product/ProductTemplateDTO";
import axios from "axios";
const META_ENV = import.meta.env;
const { VITE_MS_BFF_URL } = META_ENV;

export const productService = {
  async getCategories(): Promise<ProductCategoryDTO[]> {
    const response = await fetch(VITE_MS_BFF_URL + "/api/product/categories");
    const data = (await response.json()) as APIResponse;
    if (!response.ok || !data.isSuccess) {
      throw new Error(data.errorMessages.join(", "));
    }
    return data.result as ProductCategoryDTO[];
  },

  async getCategoryProducts(categoryId: number): Promise<ProductTemplateDTO[]> {
    try {
      const response = await axios.get(
        `${VITE_MS_BFF_URL}/api/products/${categoryId}`
      );
      const data = response.data as APIResponse;
      if (response.status !== 200 || !data.isSuccess) {
        throw new Error(data.errorMessages.join(", "));
      }
      return data.result as ProductTemplateDTO[];
    } catch (error: any) {
      throw new Error(error.message);
    }
  },

  async getCategoryFeaturedProduct(
    categoryId: number
  ): Promise<FeaturedProductTemplateDTO> {
    try {
      const response = await axios.get(
        `${VITE_MS_BFF_URL}/api/featured-product/${categoryId}`
      );
      const data = response.data as APIResponse;
      if (response.status !== 200 || !data.isSuccess) {
        throw new Error(data.errorMessages.join(", "));
      }
      return data.result as FeaturedProductTemplateDTO;
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
};
