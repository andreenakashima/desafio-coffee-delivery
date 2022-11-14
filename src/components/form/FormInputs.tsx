import { useFormContext } from "react-hook-form";

import { FormInputTypes } from "../../pages/Checkout";

export function FormInputs() {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormInputTypes>();

  return (
    <>
      <input
        type="text"
        className="w-full rounded border border-base-button bg-base-input p-3 text-base-text focus:border-coffee-yellow-dark focus:outline-none sm:w-2/6"
        placeholder="CEP"
        {...register("cep")}
      />
      {errors.cep?.message && (
        <p className="text-sm text-coffee-yellow-dark">{errors.cep?.message}</p>
      )}
      <div className="mt-3 w-full">
        <input
          type="text"
          className="w-full rounded border border-base-button bg-base-input p-3 text-base-text focus:border-coffee-yellow-dark focus:outline-none"
          placeholder="Rua"
          {...register("street")}
        />
        {errors.street?.message && (
          <p className="text-sm text-coffee-yellow-dark">
            {errors.street?.message}
          </p>
        )}
      </div>
      <div className="mt-3 gap-3 sm:flex">
        <div className="w-full  sm:w-2/6">
          <input
            type="text"
            className="w-full rounded border border-base-button bg-base-input p-3 text-base-text focus:border-coffee-yellow-dark focus:outline-none"
            placeholder="Número"
            {...register("number")}
          />
          {errors.number?.message && (
            <p className="text-sm text-coffee-yellow-dark">
              {errors.number?.message}
            </p>
          )}
        </div>

        <div className="w-full  sm:w-4/6">
          <input
            type="text"
            className="w-full rounded border border-base-button bg-base-input p-3 text-base-text focus:border-coffee-yellow-dark focus:outline-none"
            placeholder="Complemento"
            {...register("complement")}
          />
          {errors.complement?.message && (
            <p className="text-sm text-coffee-yellow-dark">
              {errors.complement?.message}
            </p>
          )}
        </div>
      </div>
      <div className="mt-3 gap-3 sm:flex">
        <div className="w-full sm:w-2/6">
          <input
            type="text"
            className="w-full rounded border border-base-button bg-base-input p-3 text-base-text focus:border-coffee-yellow-dark focus:outline-none"
            placeholder="Bairro"
            {...register("district")}
          />
          {errors.district?.message && (
            <p className="text-sm text-coffee-yellow-dark">
              {errors.district?.message}
            </p>
          )}
        </div>
        <div className="mt-3 w-4/6 sm:mt-0 sm:flex sm:gap-3">
          <div className="w-full  sm:w-5/6">
            <input
              type="text"
              className="w-full rounded border border-base-button bg-base-input p-3 text-base-text focus:border-coffee-yellow-dark focus:outline-none"
              placeholder="Cidade"
              {...register("city")}
            />
            {errors.city?.message && (
              <p className="text-sm text-coffee-yellow-dark">
                {errors.city?.message}
              </p>
            )}
          </div>

          <div className="w-full sm:w-1/6">
            <input
              type="text"
              className="mt-3 w-full rounded border border-base-button bg-base-input p-3 text-base-text focus:border-coffee-yellow-dark focus:outline-none sm:mt-0 "
              placeholder="UF"
              {...register("state")}
            />
            {errors.state?.message && (
              <p className="text-sm text-coffee-yellow-dark">
                {errors.state?.message}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
