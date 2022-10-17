import { IProduct } from '../adapter/product'
import { useProducts } from '../context/CartContext'
export const useCart = () => {
    const { cart, setCart } = useProducts()

    const addToCart = (product: IProduct) => {
        if (!cart.some(s => s.id == product.id))
            setCart((p) => p.concat(product))
    }
    const removeFromCart = (product: IProduct) => {
        setCart(s => s.reduce((acc, cur) => {
            if (cur.id !== product.id)
                acc.push(cur)
            return acc
        }, []))
    }
    const { currencyCode, totalProducts, countProducts } = cart.reduce((obj, cur) => {
        obj.currencyCode = cur.price.currencyCode
        obj.totalProducts += cur.price.amount
        obj.countProducts += 1
        return obj
    }, { currencyCode: '', totalProducts: 0, countProducts: 0 })
    
    return {
        cart,
        currencyCode,
        totalProducts,
        countProducts,
        addToCart,
        removeFromCart
    }
}
