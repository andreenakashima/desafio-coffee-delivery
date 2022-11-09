import { Minus, Plus, ShoppingCart } from "phosphor-react";

export function Card() {
  return (
    <li className="relative m-auto w-64 rounded-md rounded-tr-[36px] rounded-bl-[36px] bg-base-card py-5 px-6 text-center">
      <img
        className="absolute left-1/2 -top-6 -ml-14 block h-28 w-28"
        src="./products-img/expresso.png"
        alt=""
      />

      <div className="mt-24">
        <span className="rounded-full bg-coffee-yellow-light px-2 py-1 text-xs font-semibold uppercase text-coffee-yellow-dark">
          Tradicional
        </span>
      </div>

      <h3 className="mt-4 font-baloo2 text-xl font-semibold text-base-subtitle">
        Expresso Tradicional
      </h3>

      <p className="mt-2 text-sm text-base-label">
        O tradicional café feito com água quente e grãos moídos
      </p>

      <div className="mt-8 flex items-center justify-between">
        <div className="font-baloo2 text-2xl text-base-subtitle">
          <span className="font-roboto text-sm">R$</span> 9,90
        </div>

        <div className="flex items-center justify-center gap-2">
          <div className="rounded-md bg-base-button">
            <button className="px-2 py-3 text-coffee-purple">
              <Minus size={14} weight="bold" />
            </button>

            <span className="p-2">1</span>

            <button className="px-2 py-3 text-coffee-purple">
              <Plus size={14} weight="bold" />
            </button>
          </div>
          <button className="rounded-md bg-coffee-purple-dark p-2 text-white hover:bg-coffee-purple">
            <ShoppingCart size={22} weight="fill" />
          </button>
        </div>
      </div>
    </li>
  );
}
