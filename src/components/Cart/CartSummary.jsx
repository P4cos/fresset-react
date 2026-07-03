import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function CartSummary() {

  const {
    totalItems,
    totalPrice,
    clearCart,
  } = useCart();

  return (

    <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">

      <h2 className="text-2xl font-bold mb-6">

        Resumen del pedido

      </h2>

      <div className="space-y-3">

        <div className="flex justify-between">

          <span>Productos</span>

          <span>{totalItems}</span>

        </div>

        <div className="flex justify-between">

          <span>Delivery</span>

          <span className="text-green-600">
            Gratis
          </span>

        </div>

        <hr />

        <div className="flex justify-between text-2xl font-bold">

          <span>Total</span>

          <span className="text-green-600">

            S/. {totalPrice.toFixed(2)}

          </span>

        </div>

      </div>

      <button
        onClick={clearCart}
        className="w-full mt-8 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl transition cursor-pointer"
      >
        Vaciar carrito
      </button>

      <Link
        to="/checkout"
        className="block text-center mt-4 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl transition"
      >
        Continuar pedido
      </Link>

    </div>

  );

}

export default CartSummary;