import { HeardIcon, TrashIcon } from '../Icons'
import { IProduct } from '../../adapters/product'
import { useCart } from '../../hooks/useCart'
import Card from '../Card'

export enum OPTION_CARD {
    DEFAULT,
    ADD_TO_CART,
    EDIT_CART
}
const getClassName = (option: OPTION_CARD)=>{
    return option === OPTION_CARD.ADD_TO_CART ? 'grid-card'
        : (option === OPTION_CARD.EDIT_CART ? 'list-card' : '')
}

interface Props {
    products: IProduct[],
    option: OPTION_CARD
}
export default function GridCard({ products, option }: Props) {
    const { getItemFromCart, addToCart, removeFromCart } = useCart()
    return (
        <div className={getClassName(option)}>
            {
                products.length > 0 &&
                products.map((product: IProduct) => (
                    <Card key={`product-${product.id}`} product={product} >
                        <div>
                            {
                                    option === OPTION_CARD.ADD_TO_CART 
                                &&  <ButtonAddCart product={product} addToCart={addToCart} getItemFromCart={getItemFromCart} />
                                || 
                                    option === OPTION_CARD.EDIT_CART 
                                && <ButtonRemoveCart product={product} removeFromCart={removeFromCart} />
                            }
                        </div>
                    </Card>
                ))
            }
        </div>
    )
}

interface PropsAddButton{
    product: IProduct, 
    addToCart: (p: IProduct) => void, 
    getItemFromCart: (id: number) => (IProduct | undefined) 
}
const ButtonAddCart = ({ product, addToCart, getItemFromCart }: PropsAddButton) => {
    const item_cart = getItemFromCart(product.id)
    return (
        <>
            {
                item_cart == undefined
                &&
                <button className='btn-primary' onClick={() => addToCart(product)} title="Add">
                    <HeardIcon height={25} width={25} color="none" />
                    Add to cart
                </button>
                ||
                item_cart != undefined
                &&
                <p className='text-center py-1 outline outline-[1px] outline-slate-200'>
                    <HeardIcon height={25} width={25} color="red" />
                    Added
                </p>
            }
        </>
    )
}

interface PropsRemoveButton {
    product: IProduct, 
    removeFromCart: (p: IProduct) => void
}
const ButtonRemoveCart = ({ product, removeFromCart }: PropsRemoveButton) => {
    return (
        <button className="btn-danger" onClick={() => removeFromCart(product)} title="Remove">
            <TrashIcon height={25} width={25} color="none" />
            Remove
        </button>
    )
}