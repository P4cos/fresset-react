import {
  FaShoppingCart,
  FaHeart,
  FaEye,
} from "react-icons/fa";

import { useCart } from "../../context/CartContext";

import toast from "react-hot-toast";
import { useFavorite } from "../../context/FavoriteContext";
import { useState } from "react";

import ProductModal from "../ProductModal/ProductModal";

function ProductCard({ producto }) {
  const { addToCart } = useCart();
  const [mostrarModal, setMostrarModal] = useState(false);


  const {
    toggleFavorite,
    isFavorite,
  } = useFavorite();


  const agregarProducto = () => {
    addToCart(producto);

    toast.success(` ${producto.nombre} agregado al carrito`, {
      duration: 1800,
      style: {
        borderRadius: "12px",
        background: "#16a34a",
        color: "#fff",
      },
    });
  };


  return (

    <div className="relative bg-white rounded-3xl shadow-md">

 

      {producto.top && (

        <div className="absolute bg-yellow-400 text-black px-4 py-1 rounded-br-xl font-bold">
          {producto.top}
        </div>

      )}

    

      <div className="overflow-hidden">

        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="w-full h-56 object-cover hover:scale-110 transition duration-500"
        />

      </div>

   

      <div className="p-5">

        <span className="text-sm text-orange-500">

          {producto.categoria}

        </span>

        <h3 className="text-xl font-bold mt-2">

          {producto.nombre}

        </h3>

        <p className="text-gray-500 mt-2">

          {producto.descripcion}

        </p>

        <h4 className="text-green-600 font-bold text-2xl mt-4">

          S/. {producto.precio.toFixed(2)}

        </h4>



        <div className="flex justify-between mt-6">

          <button
            className="bg-green-600 hover:bg-green-700 text-white rounded-full p-3 transition cursor-pointer"
            onClick={agregarProducto}
          >

            <FaShoppingCart />
          </button>

          <button
            onClick={() => toggleFavorite(producto)}
            className={`rounded-full p-3 transition cursor-pointer text-white
  ${isFavorite(producto.id)
                ? "bg-red-600"
                : "bg-pink-500 hover:bg-pink-600"
              }`}
          >
            <FaHeart />
          </button>

          <button
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-full p-3 transition cursor-pointer"
            onClick={() => setMostrarModal(true)}
          >
            <FaEye />
          </button>

        </div>

      </div>
      {mostrarModal && (
        <ProductModal
          producto={producto}
          onClose={() => setMostrarModal(false)}
        />
      )}

    </div>


  );

}

export default ProductCard;