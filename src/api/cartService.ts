import axios from "axios";
const META_ENV = import.meta.env;
const { VITE_MS_BFF_URL } = META_ENV;
export const cartService = {
  async getCart(userId: number): Promise<CartDto> {
    try {
      const response = await axios.get(
        `${VITE_MS_BFF_URL}/api/cart/user-${userId}`
      );
      const data = response.data as APIResponse;
      if (response.status !== 200 || !data.isSuccess) {
        throw new Error(data.errorMessages.join(", "));
      }
      return data.result as CartDto;
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
  async createCart(cartDto: CartCreateDto): Promise<CartDto> {
    try {
      const response = await axios.post(`${VITE_MS_BFF_URL}/api/cart/create`, {
        cartDto,
      });
      const data = response.data as APIResponse;
      if (response.status !== 201 || !data.isSuccess) {
        throw new Error(data.errorMessages.join(", "));
      }
      return data.result as CartDto;
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
  async addToCart(productId: number): Promise<void> {
    await axios.post(`${process.env.VITE_MS_BFF_URL}/cart`, {
      productId,
    });
  },
  async removeFromCart(productId: number): Promise<void> {
    await axios.delete(`${process.env.VITE_MS_BFF_URL}/cart`, {
      data: {
        productId,
      },
    });
  },
  async clearCart(): Promise<void> {
    await axios.delete(`${process.env.VITE_MS_BFF_URL}/cart`);
  },
};
