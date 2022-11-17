import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useLocation } from "react-router-dom";
import DeliveryImg from "../assets/delivery-image.svg";

export function Success() {
  const location = useLocation();

  const orderDetails = location.state.orderDetails;

  console.log(orderDetails);

  return (
    <div className="container mx-auto mt-20 w-3/4">
      <h2 className="font-baloo2 text-4xl text-coffee-yellow-dark">
        Uhu! Pedido confirmado
      </h2>
      <p className="text-xl text-base-text">
        Agora é só aguardar que logo o café chegará a você
      </p>

      <div className="sm:flex">
        <div className="sm:w-1/2">
          <div className="relative mt-16 rounded-md rounded-tr-[36px] rounded-bl-[36px] bg-gradient-to-br from-coffee-yellow via-coffee-purple-dark to-coffee-purple p-px">
            <ul className="rounded-md rounded-tr-[36px] rounded-bl-[36px] bg-background p-10">
              <li className="mb-8 flex items-center gap-3 text-base-text">
                <div className="rounded-full bg-coffee-purple p-2 text-white">
                  <MapPin size={16} weight="fill" />
                </div>{" "}
                <p>
                  Entrega em <strong>{orderDetails.address.street}</strong>
                  {", "}
                  <strong>{orderDetails.address.number}</strong>
                  <br />
                  {orderDetails.address.district} - {orderDetails.address.city}
                  {", "}
                  {orderDetails.address.state}
                </p>
              </li>

              <li className="mb-8 flex items-center gap-3 text-base-text">
                <div className="rounded-full bg-coffee-yellow p-2 text-white">
                  <Timer size={16} weight="fill" />
                </div>{" "}
                <p>
                  Previsão de entrega
                  <br />
                  <strong>20 min - 30 min</strong>
                </p>
              </li>

              <li className="flex items-center gap-3 text-base-text">
                <div className="rounded-full bg-coffee-yellow-dark p-2 text-white">
                  <CurrencyDollar size={16} weight="fill" />
                </div>{" "}
                <p>
                  Pagamento na entrega
                  <br />
                  {orderDetails.address.payments === "credit-card" && (
                    <strong>Cartão de Crédito</strong>
                  )}
                  {orderDetails.address.payments === "debit-card" && (
                    <strong>Cartão de Débito</strong>
                  )}
                  {orderDetails.address.payments === "money" && (
                    <strong>Dinheiro</strong>
                  )}
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-center sm:w-1/2">
          <img src={DeliveryImg} alt="" />
        </div>
      </div>
    </div>
  );
}
