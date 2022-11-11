import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";

import { CardCart } from "../components/CardCart";

import { useCart } from "../context/CartContext";

import { SubmitHandler, useForm } from "react-hook-form";

import { priceFormatter } from "../utilities/formatter";
import products from "../data/products.json";

interface FormInputs {
  cep: string;
  street: string;
  number: string;
  complement: string;
  district: string;
  city: string;
  state: string;
  payments: string;
}

export function Checkout() {
  const { cartItems } = useCart();

  const { register, handleSubmit } = useForm<FormInputs>();

  const deliveryFee = 4.5;

  const productsTotal = cartItems.reduce((total, cartItem) => {
    const product = products.find((item) => item.id === cartItem.id);
    return total + (product?.price || 0) * cartItem.quantity;
  }, 0);

  const orderTotal = productsTotal + deliveryFee;

  const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
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
                {...register("cep")}
              />
              <div className="mt-3 w-full">
                <input
                  type="text"
                  className="w-full rounded border border-base-button bg-base-input p-3 text-base-text focus:border-coffee-yellow-dark focus:outline-none"
                  placeholder="Rua"
                  {...register("street")}
                />
              </div>
              <div className="mt-3 gap-3 sm:flex">
                <input
                  type="text"
                  className="w-full rounded border border-base-button bg-base-input p-3 text-base-text focus:border-coffee-yellow-dark focus:outline-none sm:w-2/6"
                  placeholder="Número"
                  {...register("number")}
                />
                <input
                  type="text"
                  className="w-full rounded border border-base-button bg-base-input p-3 text-base-text focus:border-coffee-yellow-dark focus:outline-none sm:w-4/6"
                  placeholder="Complemento"
                  {...register("complement")}
                />
              </div>
              <div className="mt-3 gap-3 sm:flex">
                <input
                  type="text"
                  className="w-full rounded border border-base-button bg-base-input p-3 text-base-text focus:border-coffee-yellow-dark focus:outline-none sm:w-2/6"
                  placeholder="Bairro"
                  {...register("district")}
                />
                <div className="mt-3 w-4/6 sm:mt-0 sm:flex sm:gap-3">
                  <input
                    type="text"
                    className="w-full rounded border border-base-button bg-base-input p-3 text-base-text focus:border-coffee-yellow-dark focus:outline-none sm:w-5/6"
                    placeholder="Cidade"
                    {...register("city")}
                  />
                  <input
                    type="text"
                    className="mt-3 w-full rounded border border-base-button bg-base-input p-3 text-base-text focus:border-coffee-yellow-dark focus:outline-none sm:mt-0 sm:w-1/6"
                    placeholder="UF"
                    {...register("state")}
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
                  id="credit-card"
                  value="credit-card"
                  className="peer appearance-none"
                  {...register("payments")}
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
                  id="debit-card"
                  value="debit-card"
                  className="peer appearance-none"
                  {...register("payments")}
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
                  id="money"
                  value="money"
                  className="peer appearance-none"
                  {...register("payments")}
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
              {cartItems.map((item) => (
                <CardCart key={item.id} {...item} />
              ))}
            </ul>

            <div>
              <p className="flex items-center justify-between text-base-text">
                <span>Total de itens</span>{" "}
                <span>R$ {priceFormatter.format(productsTotal)}</span>
              </p>
              <p className="mt-3 flex items-center justify-between text-base-text">
                <span>Entrega</span>{" "}
                <span>R$ {priceFormatter.format(deliveryFee)}</span>
              </p>
              <p className="mt-3 flex items-center justify-between text-xl font-bold text-base-subtitle">
                <span>Total</span>{" "}
                <span>R$ {priceFormatter.format(orderTotal)}</span>
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
