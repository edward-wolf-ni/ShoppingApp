import { useAppSelector, useAppDispatch } from '../provider/hooks'
import { addNew, removeItem, selectCart, selectCartById } from '../provider/cartSlice'
import { IProduct } from '../adapters/product'

/**
 * Devuelve los métodos para administrar el estado del carrito de compras
 * @returns 
 */

export const useCart=()=>{
    const dispatch = useAppDispatch()
    
    const addToCart=(product:IProduct)=>{
        dispatch(addNew(product))
    }

    const removeFromCart=(product:IProduct)=>{
        dispatch(removeItem(product))
    }

    const getCart = ()=>{
        return useAppSelector(selectCart)
    }

    const getItemFromCart = (id: number) =>{ 
        return useAppSelector(s => selectCartById(s, id))
    }

    return {
        getItemFromCart,
        addToCart,
        removeFromCart,
        getCart
    }
}