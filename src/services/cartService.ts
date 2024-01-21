import axios from "axios";
import { authHeader } from "../helpers/auth-headers";
const META_ENV = import.meta.env;
const { VITE_MS_BFF_URL } = META_ENV;
export const cartService = {
  async getCart(userId: number): Promise<CartDto> {
    try {
      const headers = authHeader();
      const response = await axios.get(
        `${VITE_MS_BFF_URL}/api/cart/user-${userId}`,
        { headers }
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
      const headers = authHeader();
      const response = await axios.post(
        `${VITE_MS_BFF_URL}/api/cart/create`,
        {
          cartDto,
        },
        { headers }
      );
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
    const headers = authHeader();
    await axios.post(
      `${process.env.VITE_MS_BFF_URL}/cart`,
      {
        productId,
      },
      { headers }
    );
  },
  async removeFromCart(productId: number): Promise<void> {
    const headers = authHeader();
    await axios.delete(`${process.env.VITE_MS_BFF_URL}/cart`, {
      data: {
        productId,
      },
      headers,
    });
  },
};
