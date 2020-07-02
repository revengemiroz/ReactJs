import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext()

export function CartProvider(props) {

    const [cart, setCart] = useState([])
    const [temp, setTemp] = useState([])
    const [productid, setProductid] = useState()
    const [stock, setStock] = useState()
    const [count, setCount] = useState(0)
    const [subtotal, setSubtotal] = useState(0)

    useEffect(() => {
        setCount(cart.length)
    }, [cart])

    const hooks = {
        cart, setCart,
        temp, setTemp,
        productid, setProductid,
        stock, setStock,
        count, setCount,
        deletetheCartitems
    }

    function deletetheCartitems(gotid) {
        var filterdata = cart.filter(a => a.id !== gotid);
        setCart(filterdata)
        setCount(cart.length)
    }

    return (
        <CartContext.Provider value={hooks}>
            {props.children}
        </CartContext.Provider>
    );
}

