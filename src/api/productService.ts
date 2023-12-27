import { ProductCategoryDTO } from '../dto/Product/ProductCategoryDTO';

const simulateNetworkDelay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const mockCategories: ProductCategoryDTO[] = [
  { id: 1, name: 'Vision', preferenceIndex: 1 },
  { id: 2, name: 'Mac', preferenceIndex: 2 },
  { id: 3, name: 'iPhone', preferenceIndex: 3 },
  { id: 4, name: 'iPad', preferenceIndex: 4 },
  { id: 5, name: 'AirPods', preferenceIndex: 5 },
  { id: 6, name: 'Watch', preferenceIndex: 6 },
];


export const productService = {
  async getCategories(): Promise<ProductCategoryDTO[]> {
    await simulateNetworkDelay(500);
    return [...mockCategories];
  },
};
