import { Bank, CreditCard, Money } from "phosphor-react";
import { useFormContext } from "react-hook-form";

export function FormRadios() {
  const { register } = useFormContext();

  return (
    <>
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
    </>
  );
}
