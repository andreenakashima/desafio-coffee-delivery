import { useCartContext } from "../contexts/CartContext";
import { priceFormatter } from "../utilities/formatter";

export function TotalOrder() {
  const { productsTotal, deliveryFee, orderTotal } = useCartContext();

  return (
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
        <span>Total</span> <span>R$ {priceFormatter.format(orderTotal)}</span>
      </p>
    </div>
  );
}
