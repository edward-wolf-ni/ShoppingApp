import Card, { OPTION_CARD } from '../Card'
import { useCart } from '../../hooks/useCart'
import { IProduct } from '../../adapter/product'
import React from 'react'
export default function GridCard({ products, option }: { products: IProduct[], option: OPTION_CARD }) {
    const { addToCart, removeFromCart } = useCart()
    return (
        <div className={option === OPTION_CARD.ADD_TO_CART ? 'grid-card' : 'grid-card-col'}>
            {
                products != null && products.length > 0
                && products.map((product: IProduct) => (
                    <Card
                        key={`product-${product.id}`}
                        product={product}
                        option={option}
                        onAdd={addToCart}
                        onRemove={removeFromCart}
                    />
                ))
            }
        </div>
    )
}