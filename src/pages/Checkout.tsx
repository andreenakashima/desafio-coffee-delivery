import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCartContext } from "../contexts/CartContext";
import { CurrencyDollar, MapPinLine } from "phosphor-react";

import { FormInputs } from "../components/form/FormInputs";
import { FormRadios } from "../components/form/FormRadios";
import { CardCart } from "../components/CardCart";
import { TotalOrder } from "../components/TotalOrder";

const FormInputsSchema = z.object({
  cep: z
    .string()
    .min(1, { message: "O campo não pode estar vazio" })
    .regex(/[0-9]{5}-[0-9]{3}/, {
      message: "Preencha o CEP no formato. Ex: 99999-99",
    }),
  street: z.string().min(1, { message: "O campo não pode estar vazio" }),
  number: z.string().min(1, { message: "O campo não pode estar vazio" }),
  complement: z.string().optional(),
  district: z.string().min(1, { message: "O campo não pode estar vazio" }),
  city: z.string().min(1, { message: "O campo não pode estar vazio" }),
  state: z
    .string()
    .min(1, { message: "O campo não pode estar vazio" })
    .max(2, { message: "Máximo 2 caracteres" }),
  payments: z.enum(["credit-card", "debit-card", "money"]),
});

export type FormInputTypes = z.infer<typeof FormInputsSchema>;

export function Checkout() {
  const { cartItems } = useCartContext();

  const methods = useForm<FormInputTypes>({
    resolver: zodResolver(FormInputsSchema),
    defaultValues: { payments: "credit-card" },
  });

  const onSubmit: SubmitHandler<FormInputTypes> = (data) => console.log(data);

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

              <TotalOrder />

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
