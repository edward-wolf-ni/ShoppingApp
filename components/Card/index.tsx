import Image from 'next/image'

import { IProduct } from '../../adapters/product'

interface Props {
    product: IProduct,
    children: JSX.Element
}
export default function Card({ product, children }: Props) {
    return (
        <div className='border rounded'>
            <div>
                <Image
                    src={product.imageUrl}
                    alt={product.title}
                    width={"100"}
                    height={'100'}
                    layout="responsive"
                    objectFit='cover'
                    priority
                    placeholder='blur'
                    blurDataURL='./vercel.svg'
                />
            </div>
            <div>
                <div className='flex justify-between p-2'>
                    <span className='self-start'>{product.title}</span>
                    <p>{product.price.currencyCode + " " + product.price.amount}</p>
                </div>
                {children && <div className='bg-zinc-100'>{children}</div>}
            </div>
        </div>
    )
}