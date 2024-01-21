import { defineStore } from "pinia";
import { productService } from "../services/productService";
import { ProductCategoryDTO } from "../dto/Product/ProductCategoryDTO";
import { ProductCategoryModel } from "../models/Product/ProductCategoryModel";

export const useProductStore = defineStore({
  id: "product",
  state: () => ({
    categories: [] as ProductCategoryModel[],
    activeCategory: {} as ProductCategoryModel,
    productLoading: false,
    productError: false,
    productErrorMessage: "",
  }),
  actions: {
    async fetchCategories() {
      try {
        const categoriesDTO: ProductCategoryDTO[] =
          await productService.getCategories();
        this.categories = categoriesDTO.map((dto) => ({
          id: dto.id,
          name: dto.name,
          isSelected: false,
          preferenceIndex: dto.preferenceIndex,
          productTemplates: null,
          featuredProduct: null,
        }));
      } catch (error: unknown) {
        this.productError = true;
        this.productErrorMessage = (error as Error).message;
      }
    },
    async fetchCategoryCatalogue(categoryId: number) {
      this.productLoading = true;
      try {
        console.log("fetchCategoryProducts");
        console.log(categoryId);
        const category = this.categories.find((c) => c.id === categoryId);
        console.log(category);
        if (!category) {
          throw new Error("Category not found");
        }
        category.productTemplates = await productService.getCategoryProducts(
          categoryId
        );
        category.featuredProduct =
          await productService.getCategoryFeaturedProduct(categoryId);
        this.setActiveCategory(category);
        console.log(this.activeCategory);
      } catch (error: unknown) {
        this.productError = true;
        this.productErrorMessage = (error as Error).message;
      }
      this.productLoading = false;
    },
    async fetchCategoryFeaturedProduct(categoryId: number) {
      this.productLoading = true;
      try {
        const category = this.categories.find((c) => c.id === categoryId);
        if (!category) {
          throw new Error("Category not found");
        }
        category.featuredProduct =
          await productService.getCategoryFeaturedProduct(categoryId);
      } catch (error: unknown) {
        this.productError = true;
        this.productErrorMessage = (error as Error).message;
      }
      this.productLoading = false;
    },
    async setActiveCategory(category: ProductCategoryModel) {
      this.activeCategory = category;
    },
  },
  getters: {
    getCategories(): ProductCategoryModel[] {
      return this.categories;
    },
    getActiveCategory(): ProductCategoryModel {
      return this.activeCategory;
    },
    getProductLoading(): boolean {
      return this.productLoading;
    },
    getProductError(): boolean {
      return this.productError;
    },
    getProductErrorMessage(): string {
      return this.productErrorMessage;
    },
  },
});
