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
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id: number) {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.quantity === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
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
