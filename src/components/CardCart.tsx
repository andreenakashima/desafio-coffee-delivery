import { Minus, Plus, Trash } from "phosphor-react";

export function CardCart() {
  return (
    <li className="mb-6 w-full justify-between border-b border-base-button pb-6 text-center sm:flex">
      <div className="gap-5 sm:flex">
        <img
          className="m-auto h-16 w-16"
          src="./products-img/expresso.png"
          alt=""
        />

        <div className="w-auto">
          <p>Expresso Tradicional</p>

          <div className="mt-2 flex gap-3">
            <div className="rounded-md bg-base-button">
              <button className="px-2 py-3 text-coffee-purple">
                <Minus size={14} weight="bold" />
              </button>

              <span className="p-2">1</span>

              <button className="px-2 py-3 text-coffee-purple">
                <Plus size={14} weight="bold" />
              </button>
            </div>

            <button className="flex items-center justify-center gap-1 rounded-md bg-base-button px-2 uppercase text-base-text hover:bg-base-hover">
              <Trash size={18} className="text-coffee-purple" /> Remover
            </button>
          </div>
        </div>
      </div>

      <div className="text-base font-bold text-base-text">R$ 9,90</div>
    </li>
  );
}
