// Cart.ts
class Cart {
  cartOverview: CartOverview;
  cartProducts?: CartProduct[];

  constructor(cartOverview: CartOverview, cartProducts?: CartProduct[]) {
    this.cartOverview = cartOverview;
    this.cartProducts = cartProducts;
  }
}
