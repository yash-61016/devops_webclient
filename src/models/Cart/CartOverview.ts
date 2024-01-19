// CartOverview.ts
class CartOverview {
  cartId: number;
  userId: number;
  discount: number;
  totalPrice: number;

  constructor(
    cartId: number,
    userId: number,
    discount: number,
    totalPrice: number
  ) {
    this.cartId = cartId;
    this.userId = userId;
    this.discount = discount;
    this.totalPrice = totalPrice;
  }
}
