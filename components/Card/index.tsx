import { HeardIcon, TrashIcon } from '../Icons'
import { IProduct } from '../../adapter/product'
import { useCart } from '../../hooks/useCart'

export enum OPTION_CARD {
    DEFAULT,
    ADD_TO_CART,
    EDIT_CART
}
interface Props {
    product: IProduct,
    option: OPTION_CARD
    onAdd: (p: IProduct) => void,
    onRemove: (p: IProduct) => void
}
export default function Card({ product, option, onAdd, onRemove }: Props) {
    const { cart } = useCart()
    const cart_item = cart.find(f => f.id === product.id)
    return (
        <div className='border'>
            <div className='box'>
                <img src={product.imageUrl} alt={product.title} />
            </div>
            <div className='flex justify-between p-2'>
                <span className='self-start'>{product.title}</span>
                <p>{product.price.currencyCode + " " + product.price.amount}</p>
            </div>
            <div>
                {
                    option === OPTION_CARD.ADD_TO_CART && cart_item == null &&
                    <button className='btn-primary' onClick={() => onAdd(product)} title="Add">
                        <HeardIcon height={25} width={25} color="none" />
                        Add to cart
                    </button>
                }
                {
                    option === OPTION_CARD.ADD_TO_CART && cart_item != null &&
                    <p className='text-center py-1 outline outline-[1px] outline-slate-200'>
                        <HeardIcon height={25} width={25} color="red" />
                        Added
                    </p>
                }
                {
                    option === OPTION_CARD.EDIT_CART && cart_item != null &&
                    <button className={'btn-default'} onClick={() => onRemove(product)} title="Remove">
                        <TrashIcon height={25} width={25} color="none" />
                        Remove
                    </button>
                }
            </div>
        </div>
    )
}