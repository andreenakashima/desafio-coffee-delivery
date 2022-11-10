import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { Router } from "./Router";

export function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Router />
      </CartProvider>
    </BrowserRouter>
  );
}
