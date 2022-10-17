import { useCart } from '../../hooks/useCart'

import { OPTION_CARD } from '../../components/Card'
import GridCard from '../../components/GridCard'

export default function DetailsPage() {
    const { cart, currencyCode, countProducts, totalProducts } = useCart()

    return (
        <div className='grid grid-cols-2 gap-4'>
            <div className=''>
                <div className='grid grid-cols-2 gap-x-10 border border-8 p-5'>
                    <strong>Products: &nbsp;</strong>
                    <strong className='text-right'>{countProducts}</strong>
                    <strong>Total: &nbsp;</strong>
                    <strong className='text-right'>{currencyCode} {totalProducts.toFixed(2)}</strong>
                </div>
            </div>
            <div>
                <GridCard products={cart} option={OPTION_CARD.EDIT_CART} />
            </div>
        </div>

    )
}