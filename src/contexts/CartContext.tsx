import { createContext, ReactNode, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

import products from "../data/products.json";

interface CartProviderProps {
  children: ReactNode;
}

interface CartItem {
  id: number;
  quantity: number;
}

interface CartContextProps {
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  getItemQuantity: (id: number) => number;
  clearCart: () => void;
  cartQuantity: number;
  cartItems: CartItem[];
  deliveryFee: number;
  productsTotal: number;
  orderTotal: number;
}

const CartContext = createContext({} as CartContextProps);

export function useCartContext() {
  return useContext(CartContext);
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "@Coffee-cart",
    []
  );

  function increaseCartQuantity(id: number) {
    const newCartItems = [...cartItems];

    const item = newCartItems.find((product) => product.id === id);

    if (!item) {
      newCartItems.push({ id: id, quantity: 1 });
    } else {
      item.quantity = item.quantity + 1;
    }

    setCartItems(newCartItems);
  }

  function decreaseCartQuantity(id: number) {
    const newCartItems = [...cartItems];

    const item = newCartItems.find((product) => product.id === id);

    if (item && item.quantity > 1) {
      item.quantity = item.quantity - 1;

      setCartItems(newCartItems);
    } else {
      const updatedCartItems = newCartItems.filter(
        (product) => product.id !== id
      );

      setCartItems(updatedCartItems);
    }
  }

  function removeFromCart(id: number) {
    const updatedCartItems = cartItems.filter((product) => product.id !== id);
    setCartItems(updatedCartItems);
  }

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  function clearCart() {
    setCartItems([]);
  }

  function addDeliveryFee(tax: number): any {
    let deliveryTax;

    if (Object.keys(cartItems).length !== 0) {
      return (deliveryTax = tax);
    } else {
      return (deliveryTax = 0);
    }
  }

  const productsTotal = cartItems.reduce((total, cartItem) => {
    const product = products.find((item) => item.id === cartItem.id);
    return total + (product?.price || 0) * cartItem.quantity;
  }, 0);

  const deliveryFee = addDeliveryFee(4.5);

  const orderTotal = productsTotal + deliveryFee;

  return (
    <CartContext.Provider
      value={{
        cartQuantity,
        cartItems,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        getItemQuantity,
        clearCart,
        deliveryFee,
        productsTotal,
        orderTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
