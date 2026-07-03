import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { useCart } from "../context/CartContext";

import CartSummary from "../components/Cart/CartSummary";
import CheckoutForm from "../components/Checkout/CheckoutForm";

import { generarMensajeWhatsApp } from "../services/whatsappService";

function Checkout() {

  const navigate = useNavigate();

  const { cart, totalPrice, clearCart } = useCart();

  const [cliente, setCliente] = useState({
    nombre: "",
    telefono: "",
    direccion: "",
    referencia: "",
    observaciones: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setCliente({
      ...cliente,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validar = () => {

    const nuevosErrores = {};

    if (!cliente.nombre.trim())
      nuevosErrores.nombre = "Ingrese su nombre.";

    if (!cliente.telefono.trim())
      nuevosErrores.telefono = "Ingrese su teléfono.";

    if (!cliente.direccion.trim())
      nuevosErrores.direccion = "Ingrese su dirección.";

    setErrors(nuevosErrores);

    return Object.keys(nuevosErrores).length === 0;
  };


  const confirmarPedido = () => {

    if (!validar()) {
      toast.error("Complete los campos obligatorios.");
      return;
    }

    const url = generarMensajeWhatsApp(
      cliente,
      cart,
      totalPrice
    );

    const pedido = {
      cliente,
      productos: cart,
      total: totalPrice,
      fecha: new Date().toLocaleString("es-PE"),
    };

    localStorage.setItem(
      "ultimoPedido",
      JSON.stringify(pedido)
    );

    window.open(url, "_blank");

    clearCart();

    navigate("/pedido-exitoso");
  };


  return (

    <div className="max-w-7xl mx-auto py-16 px-6">

      <h1 className="text-4xl font-bold mb-10">

        Finalizar Pedido

      </h1>

      <div className="grid lg:grid-cols-3 gap-10">

        <div className="lg:col-span-2">

          <CheckoutForm
            cliente={cliente}
            errors={errors}
            handleChange={handleChange}
            confirmarPedido={confirmarPedido}
          />

        </div>

        <CartSummary />

      </div>

    </div>

  );
}

export default Checkout;