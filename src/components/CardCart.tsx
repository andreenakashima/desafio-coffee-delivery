import { Minus, Plus, Trash } from "phosphor-react";
import { useCart } from "../context/CartContext";

import products from "../data/products.json";
import { priceFormatter } from "../utilities/formatter";
interface CardCartProps {
  id: number;
  quantity: number;
}

export function CardCart({ id, quantity }: CardCartProps) {
  const { increaseCartQuantity, removeFromCart, decreaseCartQuantity } =
    useCart();

  const cardCartProduct = products.find((product) => product.id === id);
  if (cardCartProduct == null) return null;

  return (
    <li className="mb-6 w-full justify-between border-b border-base-button pb-6 text-center sm:flex">
      <div className="gap-5 sm:flex">
        <img className="m-auto h-16 w-16" src={cardCartProduct.imgUrl} alt="" />

        <div className="w-auto">
          <p className="text-left">{cardCartProduct.name}</p>

          <div className="mt-2 flex gap-3">
            <div className="flex items-center justify-center rounded-md bg-base-button">
              <a
                className="inline-block cursor-pointer px-2 py-3 text-coffee-purple hover:text-coffee-purple-dark"
                onClick={() => decreaseCartQuantity(cardCartProduct.id)}
              >
                <Minus size={14} weight="bold" />
              </a>

              <span className="p-2">{quantity}</span>

              <a
                className="inline-block cursor-pointer px-2 py-3 text-coffee-purple hover:text-coffee-purple-dark"
                onClick={() => increaseCartQuantity(cardCartProduct.id)}
              >
                <Plus size={14} weight="bold" />
              </a>
            </div>

            <button
              className="flex items-center justify-center gap-1 rounded-md bg-base-button px-2 uppercase text-base-text hover:bg-base-hover"
              onClick={() => removeFromCart(cardCartProduct.id)}
            >
              <Trash size={18} className="text-coffee-purple" /> Remover
            </button>
          </div>
        </div>
      </div>

      <div className="text-base font-bold text-base-text">
        R$ {priceFormatter.format(cardCartProduct.price * quantity)}
      </div>
    </li>
  );
}
