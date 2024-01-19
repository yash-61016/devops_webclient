// CartOverviewUpdateDto.ts
interface CartOverviewUpdateDto {
  cartId: number;
  userId: number;
  discount: number;
  totalPrice: number;
  isCheckedOut: boolean;
}
