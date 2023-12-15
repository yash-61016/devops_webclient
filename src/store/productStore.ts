import { defineStore } from 'pinia';
import { productService } from '../api/productService';
import { ProductCategoryDTO } from '../dto/ProductCategoryDTO';
import { ProductCategoryModel } from '../models/Product/ProductCategoryModel';

export const useProductStore = defineStore({
    id: 'product',
    state: () => ({
        categories: [] as ProductCategoryModel[],
        activeCategory: {} as ProductCategoryModel,
        productLoading: false,
        productError: false,
        productErrorMessage: '',
    }),
    actions: {
        async fetchCategories() {
            try {
                const categoriesDTO: ProductCategoryDTO[] = await productService.getCategories();
                this.categories = categoriesDTO.map((dto) => ({
                    id: dto.id,
                    name: dto.name,
                    description: dto.description,
                    isSelected: false,
                    preferenceIndex: dto.preferenceIndex,
                }));
            } catch (error: unknown) {
                this.productError = true;
                this.productErrorMessage = (error as Error).message;
            }
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