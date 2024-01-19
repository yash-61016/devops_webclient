// CartProduct.ts
class CartProduct {
  cartProductId: number;
  cartId: number;
  productId: number;
  quantity: number;

  constructor(
    cartProductId: number,
    cartId: number,
    productId: number,
    quantity: number
  ) {
    this.cartProductId = cartProductId;
    this.cartId = cartId;
    this.productId = productId;
    this.quantity = quantity;
  }
}
