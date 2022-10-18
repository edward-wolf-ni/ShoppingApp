import data from './products.json'

import {IProduct} from '../../adapters/product'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProduct[]>
) {
   res.status(200).json(getProducts())
}

export function getProducts() {
  return <IProduct[]><unknown>data.products.map(item => {
    return {
      ...item, 
      price: {
        currencyCode: item.price.currencyCode,
        amount: parseFloat(item.price.amount)
      }
    }
  });
}