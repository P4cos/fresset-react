import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { FavoriteProvider } from "./context/FavoriteContext";
import App from "./App";
import "./styles.css";

import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <AuthProvider>
    <CartProvider>
      <FavoriteProvider>
      <App />
      <Toaster
    position="top-right"
    reverseOrder={false}
/>
</FavoriteProvider>
    </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);
