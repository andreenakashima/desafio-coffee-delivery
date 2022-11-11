import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { priceFormatter } from "../utilities/formatter";

interface CardProps {
  id: number;
  name: string;
  tags: string[];
  description: string;
  price: number;
  imgUrl: string;
}

export function Card({
  id,
  name,
  tags,
  description,
  price,
  imgUrl,
}: CardProps) {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity } =
    useCart();

  const quantity = getItemQuantity(id);

  return (
    <li className="relative m-auto w-64 rounded-md rounded-tr-[36px] rounded-bl-[36px] bg-base-card p-5 text-center">
      <img
        className="absolute left-1/2 -top-6 -ml-14 block h-28 w-28"
        src={imgUrl}
        alt=""
      />

      <div className="mt-24">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="mx-1 rounded-full bg-coffee-yellow-light px-2 py-1 text-[10px] font-semibold uppercase text-coffee-yellow-dark"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="mt-4 font-baloo2 text-xl font-semibold text-base-subtitle">
        {name}
      </h3>

      <p className="mt-2 text-sm text-base-label">{description}</p>

      <div className="mt-8 flex items-center justify-between">
        <div className="font-baloo2 text-2xl text-base-subtitle">
          <span className="font-roboto text-sm">R$</span>{" "}
          {priceFormatter.format(price)}
        </div>

        <div className="flex items-center justify-center gap-2">
          <div className="rounded-md bg-base-button">
            <button
              className="px-2 py-3 text-coffee-purple"
              onClick={() => decreaseCartQuantity(id)}
            >
              <Minus size={14} weight="bold" />
            </button>

            <span className="p-2 text-sm">{quantity}</span>

            <button
              className="px-2 py-3 text-coffee-purple"
              onClick={() => increaseCartQuantity(id)}
            >
              <Plus size={14} weight="bold" />
            </button>
          </div>

          <Link
            to="/checkout"
            className="rounded-md bg-coffee-purple-dark p-2 text-white hover:bg-coffee-purple"
            onClick={() => increaseCartQuantity(id)}
          >
            <ShoppingCart size={22} weight="fill" />
          </Link>
        </div>
      </div>
    </li>
  );
}
