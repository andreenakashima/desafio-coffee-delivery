import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";

import { CardCart } from "../components/CardCart";

import { useCart } from "../context/CartContext";

export function Checkout() {
  const { cartItems } = useCart();

  return (
    <form action="">
      <div className="m-auto mt-10 w-3/4 gap-8 xl:grid xl:grid-cols-5">
        <div className="xl:col-span-3">
          <h2 className="font-baloo2 text-lg text-base-subtitle">
            Complete o seu pedido
          </h2>

          <div className="mt-4 mb-5 rounded bg-base-card p-3 sm:p-5 xl:p-10">
            <div className="flex gap-2">
              <MapPinLine size={22} className="text-coffee-yellow" />
              <div>
                <h3>Endereço de entrega</h3>
                <p className="text-sm text-base-text">
                  Informe o endereço onde deseja receber o seu pedido
                </p>
              </div>
            </div>

            <div className="mt-8">
              <input
                type="text"
                className="w-full rounded border border-base-button bg-base-input p-3 text-base-text focus:border-coffee-yellow-dark focus:outline-none sm:w-2/6"
                placeholder="CEP"
              />
              <div className="mt-3 w-full">
                <input
                  type="text"
                  className="w-full rounded border border-base-button bg-base-input p-3 text-base-text focus:border-coffee-yellow-dark focus:outline-none"
                  placeholder="Rua"
                />
              </div>
              <div className="mt-3 gap-3 sm:flex">
                <input
                  type="text"
                  className="w-full rounded border border-base-button bg-base-input p-3 text-base-text focus:border-coffee-yellow-dark focus:outline-none sm:w-2/6"
                  placeholder="Número"
                />
                <input
                  type="text"
                  className="w-full rounded border border-base-button bg-base-input p-3 text-base-text focus:border-coffee-yellow-dark focus:outline-none sm:w-4/6"
                  placeholder="Complemento"
                />
              </div>
              <div className="mt-3 gap-3 sm:flex">
                <input
                  type="text"
                  className="w-full rounded border border-base-button bg-base-input p-3 text-base-text focus:border-coffee-yellow-dark focus:outline-none sm:w-2/6"
                  placeholder="Bairro"
                />
                <div className="mt-3 w-4/6 sm:mt-0 sm:flex sm:gap-3">
                  <input
                    type="text"
                    className="w-full rounded border border-base-button bg-base-input p-3 text-base-text focus:border-coffee-yellow-dark focus:outline-none sm:w-5/6"
                    placeholder="Cidade"
                  />
                  <input
                    type="text"
                    className="mt-3 w-full rounded border border-base-button bg-base-input p-3 text-base-text focus:border-coffee-yellow-dark focus:outline-none sm:mt-0 sm:w-1/6"
                    placeholder="UF"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3 mb-5 rounded bg-base-card p-10">
            <div className="flex gap-2">
              <CurrencyDollar size={22} className="text-coffee-purple" />
              <div>
                <h3>Pagamento</h3>
                <p className="text-sm text-base-text">
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar.
                </p>
              </div>
            </div>

            <div className="mt-8 gap-3 sm:flex">
              <div className="sm:flex">
                <input
                  type="radio"
                  name="payments"
                  id="credit-card"
                  className="peer appearance-none"
                />
                <label
                  htmlFor="credit-card"
                  className="flex cursor-pointer items-center justify-center gap-3 rounded-md border border-base-button bg-base-button p-4 uppercase text-base-text hover:bg-base-hover peer-checked:border peer-checked:border-coffee-purple peer-checked:bg-coffee-purple-light"
                >
                  <CreditCard size={16} className="text-coffee-purple" />
                  Cartão de Crédito
                </label>
              </div>

              <div className="sm:flex">
                <input
                  type="radio"
                  name="payments"
                  id="debit-card"
                  className="peer appearance-none"
                />
                <label
                  htmlFor="debit-card"
                  className="flex cursor-pointer items-center justify-center gap-3 rounded-md border border-base-button bg-base-button p-4 uppercase text-base-text hover:bg-base-hover peer-checked:border peer-checked:border-coffee-purple peer-checked:bg-coffee-purple-light"
                >
                  <Bank size={16} className="text-coffee-purple" />
                  Cartão de Débito
                </label>
              </div>

              <div className="sm:flex">
                <input
                  type="radio"
                  name="payments"
                  id="money"
                  className="peer appearance-none"
                />
                <label
                  htmlFor="money"
                  className="flex cursor-pointer items-center justify-center gap-3 rounded-md border border-base-button bg-base-button p-4 uppercase text-base-text hover:bg-base-hover peer-checked:border peer-checked:border-coffee-purple peer-checked:bg-coffee-purple-light"
                >
                  <Money size={16} className="text-coffee-purple" />
                  Dinheiro
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2">
          <h2 className="font-baloo2 text-lg text-base-subtitle">
            Cafés Selecionados
          </h2>

          <div className="mt-3 rounded-md rounded-tr-[36px] rounded-bl-[36px] bg-base-card p-10">
            <ul>
              <CardCart />
            </ul>

            <div>
              <p className="flex items-center justify-between text-base-text">
                <span>Total de itens</span> <span>R$ 29,70</span>
              </p>
              <p className="mt-3 flex items-center justify-between text-base-text">
                <span>Entrega</span> <span>R$ 3,50</span>
              </p>
              <p className="mt-3 flex items-center justify-between text-xl font-bold text-base-subtitle">
                <span>Total</span> <span>R$ 33,20</span>
              </p>
            </div>

            <button className="mt-6 w-full rounded-md bg-coffee-yellow py-3 font-bold uppercase text-white hover:bg-coffee-yellow-dark">
              Confirmar Pedido
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
