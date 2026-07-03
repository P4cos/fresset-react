import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

    const [cart, setCart] = useState(() => {
        const data = localStorage.getItem("cart");

        return data ? JSON.parse(data) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (producto) => {

        const existe = cart.find(item => item.id === producto.id);

        if (existe) {

            setCart(
                cart.map(item =>
                    item.id === producto.id
                        ? { ...item, cantidad: item.cantidad + 1 }
                        : item
                )
            );

        } else {

            setCart([
                ...cart,
                {
                    ...producto,
                    cantidad: 1
                }
            ]);

        }

    };

    const increaseQuantity = (id) => {

        setCart(
            cart.map(item =>
                item.id === id
                    ? { ...item, cantidad: item.cantidad + 1 }
                    : item
            )
        );

    };

    const decreaseQuantity = (id) => {

        setCart(
            cart
                .map(item =>
                    item.id === id
                        ? {
                            ...item,
                            cantidad: item.cantidad - 1
                        }
                        : item
                )
                .filter(item => item.cantidad > 0)
        );
        

    };



    const removeFromCart = (id) => {

        setCart(cart.filter(item => item.id !== id));

    };

    const clearCart = () => {

        setCart([]);

    };

    const totalItems = cart.reduce(
        (total, item) => total + item.cantidad,
        0
    );

    const totalPrice = cart.reduce(
        (total, item) => total + item.precio * item.cantidad,
        0
    );

    return (

        <CartContext.Provider
            value={{
                cart,
                addToCart,
                increaseQuantity,
                decreaseQuantity,
                removeFromCart,
                clearCart,
                totalItems,
                totalPrice
            }}
        >

            {children}

        </CartContext.Provider>

    );

}

export function useCart() {

    return useContext(CartContext);

}