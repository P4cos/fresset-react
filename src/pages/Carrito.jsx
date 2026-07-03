import CartItem from "../components/Cart/CartItem";
import CartSummary from "../components/Cart/CartSummary";
import { useCart } from "../context/CartContext";

import { Link } from "react-router-dom";

function Carrito() {

  const { cart } = useCart();

  if (cart.length === 0) {

    return (

      <div className="max-w-5xl mx-auto py-20 text-center">

        <h1 className="text-4xl font-bold">

          Tu carrito está vacío

        </h1>

        <p className="mt-4 text-gray-500">

          Agrega algunos productos para comenzar.

        </p>

        <Link
          to="/productos"
          className="inline-block mt-8 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full"
        >
          Ver productos
        </Link>

      </div>

    );

  }

  return (

    <div className="max-w-7xl mx-auto py-16 px-6">

      <h1 className="text-4xl font-bold mb-10">

        Mi Carrito

      </h1>

      <div className="grid lg:grid-cols-3 gap-10">

        <div className="lg:col-span-2 space-y-6">

          {cart.map((producto) => (

            <CartItem

              key={producto.id}

              producto={producto}

            />

          ))}

        </div>

        <CartSummary />

      </div>

    </div>

  );

}

export default Carrito;