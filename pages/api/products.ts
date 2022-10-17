import data from './products.json'

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {IProduct} from '../../adapter/product'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse//<Data>
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