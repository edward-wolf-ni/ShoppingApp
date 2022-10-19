import { useCart } from '../../hooks/useCart'
import { OPTION_CARD } from '../../components/GridCard'

import GridCard from '../../components/GridCard'

export default function DetailsPage() {
    const cart = useCart().getCart()

    if (cart.length === 0)
        return <h2 className='title-empty-cart'>your cart is empty</h2>

    const { currencyCode, totalProducts, countProducts } = cart.reduce((obj, cur) => {
        obj.currencyCode = cur.price.currencyCode
        obj.totalProducts += cur.price.amount
        obj.countProducts += 1
        return obj
    }, { currencyCode: '', totalProducts: 0, countProducts: 0 })

    return (
        <div className='sm:flex justify-between gap-5'>
            <div className='basis-2/4'>
                <div className='section'>
                    <strong>Products: &nbsp;</strong>
                    <strong className='text-right'>{countProducts}</strong>
                    <strong>Total: &nbsp;</strong>
                    <strong className='text-right'>{currencyCode} {totalProducts.toFixed(2)}</strong>
                </div>
            </div>
            <div className='basis-2/4'>
                <GridCard products={cart} option={OPTION_CARD.EDIT_CART} />
            </div>
        </div>
    )
}