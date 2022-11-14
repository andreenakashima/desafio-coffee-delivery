import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
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
