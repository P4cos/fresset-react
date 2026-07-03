import {
  FaTrash,
  FaPlus,
  FaMinus,
} from "react-icons/fa";

import { useCart } from "../../context/CartContext";

function CartItem({ producto }) {

  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  return (

    <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col md:flex-row items-center gap-6">


      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="w-32 h-32 object-cover rounded-xl"
      />


      <div className="flex-1">

        <h3 className="text-xl font-bold">
          {producto.nombre}
        </h3>

        <p className="text-gray-500 mt-2">
          {producto.descripcion}
        </p>

        <h4 className="text-green-600 font-bold mt-3 text-xl">
          S/. {producto.precio.toFixed(2)}
        </h4>

      </div>


      <div className="flex items-center gap-3">

        <button
          onClick={() => decreaseQuantity(producto.id)}
          className="bg-red-500 hover:bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
        >
          <FaMinus />
        </button>

        <span className="font-bold text-xl w-8 text-center">
          {producto.cantidad}
        </span>

        <button
          onClick={() => increaseQuantity(producto.id)}
          className="bg-green-600 hover:bg-green-700 text-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
        >
          <FaPlus />
        </button>

      </div>


      <div className="text-center">

        <p className="text-gray-500">
          Subtotal
        </p>

        <h3 className="font-bold text-2xl text-orange-500">

          S/. {(producto.precio * producto.cantidad).toFixed(2)}

        </h3>

      </div>


      <button
        onClick={() => removeFromCart(producto.id)}
        className="bg-red-600 hover:bg-red-700 text-white rounded-full w-12 h-12 flex items-center justify-center cursor-pointer"
      >
        <FaTrash />
      </button>

    </div>

  );

}

export default CartItem;