import { useFormContext } from "react-hook-form";

export function FormInputs() {
  const { register } = useFormContext();

  return (
    <>
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
    </>
  );
}
