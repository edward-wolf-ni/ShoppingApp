export interface IProduct {
  id: number,
  title: string,
  price: {
    currencyCode: string,
    amount: number
  },
  imageUrl: string
}