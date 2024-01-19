import { defineStore } from "pinia";
import { useAuth0 } from "@auth0/auth0-vue";
import { cartService } from "../api/cartService";
import { cp } from "fs";

export const useCartStore = defineStore({
  id: "cart",
  state: () => ({
    cart: null as Cart | null,
    cartLoading: false,
    cartError: false,
    cartErrorMessage: "",
    useAuth0: useAuth0(),
    user_id: null as number | null,
  }),
  actions: {
    async fetchCart() {
      try {
        console.log(this.useAuth0);
        if (!this.useAuth0.isAuthenticated) {
          return false;
        }
        this.user_id = this.extractId(this.useAuth0.user?.sub ?? "");
        if (this.user_id === 0) {
          return false;
        }
        console.log(this.user_id);
        this.cartLoading = true;
        await cartService
          .getCart(this.user_id)
          .then((cartDto: CartDto) => {
            const cartOverview: CartOverview = {
              cartId: cartDto.cartOverview.cartId,
              userId: cartDto.cartOverview.userId,
              totalPrice: cartDto.cartOverview.totalPrice,
              discount: cartDto.cartOverview.discount,
            };
            const cartProducts: CartProduct[] =
              cartDto.cartProducts?.map((cartProductDto: CartProductDto) => {
                const cartProduct: CartProduct = {
                  cartProductId: cartProductDto.cartProductId,
                  cartId: cartProductDto.cartId,
                  productId: cartProductDto.productId,
                  quantity: cartProductDto.quantity,
                };
                return cartProduct;
              }) ?? [];
            const cart: Cart = {
              cartOverview: cartOverview,
              cartProducts: cartProducts,
            };
            this.cart = cart;
            console.log(cart);
          })
          .catch((error) => {
            const cartOverviewDto: CartOverviewCreateDto = {
              userId: this.user_id ?? 0,
              totalPrice: 0,
              discount: 0,
            };
            const cartProductsDto: CartProductCreateDto[] = [];
            const cartDto: CartCreateDto = {
              cartOverview: cartOverviewDto,
              cartProducts: cartProductsDto,
            };
            return cartService
              .createCart(cartDto)
              .then((cartDto: CartDto) => {
                const cartOverview: CartOverview = {
                  cartId: cartDto.cartOverview.cartId,
                  userId: cartDto.cartOverview.userId,
                  totalPrice: cartDto.cartOverview.totalPrice,
                  discount: cartDto.cartOverview.discount,
                };
                const cartProducts: CartProduct[] =
                  cartDto.cartProducts?.map(
                    (cartProductDto: CartProductDto) => {
                      const cartProduct: CartProduct = {
                        cartProductId: cartProductDto.cartProductId,
                        cartId: cartProductDto.cartId,
                        productId: cartProductDto.productId,
                        quantity: cartProductDto.quantity,
                      };
                      return cartProduct;
                    }
                  ) ?? [];
                const cart: Cart = {
                  cartOverview: cartOverview,
                  cartProducts: cartProducts,
                };
                this.cart = cart;
              })
              .catch((error) => {
                console.log(error);
              });
          });
      } catch (error: unknown) {
        this.cartError = true;
        this.cartErrorMessage = (error as Error).message;
      } finally {
        this.cartLoading = false;
      }
    },
    async addToCart(productId: number) {
      try {
        this.cartLoading = true;
        await cartService.addToCart(productId);
        await this.fetchCart();
      } catch (error: unknown) {
        this.cartError = true;
        this.cartErrorMessage = (error as Error).message;
      } finally {
        this.cartLoading = false;
      }
    },
    async removeFromCart(productId: number) {
      try {
        this.cartLoading = true;
        await cartService.removeFromCart(productId);
        await this.fetchCart();
      } catch (error: unknown) {
        this.cartError = true;
        this.cartErrorMessage = (error as Error).message;
      } finally {
        this.cartLoading = false;
      }
    },
    extractId(str: string) {
      const parts = str.split("|");
      const _ = parts.length > 1 ? parseInt(parts[1]) : 0;
      const id = _ % 1000;
      return id;
    },
  },
});
