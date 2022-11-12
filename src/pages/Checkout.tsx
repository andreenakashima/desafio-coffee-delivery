import { CurrencyDollar, MapPinLine } from "phosphor-react";

import { CardCart } from "../components/CardCart";

import { useCart } from "../context/CartContext";

import { SubmitHandler, useForm, FormProvider } from "react-hook-form";

import { priceFormatter } from "../utilities/formatter";
import products from "../data/products.json";
import { FormInputs } from "../components/form/FormInputs";
import { FormRadios } from "../components/form/FormRadios";

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

  const methods = useForm<FormInputs>();

  const deliveryFee = 4.5;

  const productsTotal = cartItems.reduce((total, cartItem) => {
    const product = products.find((item) => item.id === cartItem.id);
    return total + (product?.price || 0) * cartItem.quantity;
  }, 0);

  const orderTotal = productsTotal + deliveryFee;

  const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} autoComplete="off">
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
                <FormInputs />
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
                <FormRadios />
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
    </FormProvider>
  );
}
