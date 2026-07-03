import {
  FaTimes,
  FaShoppingCart,
  FaHeart,
  FaPlus,
  FaMinus,
} from "react-icons/fa";

import { useState } from "react";

import { useCart } from "../../context/CartContext";
import { useFavorite } from "../../context/FavoriteContext";

import toast from "react-hot-toast";

function ProductModal({ producto, onClose }) {

  const { addToCart } = useCart();

  const {
    toggleFavorite,
    isFavorite,
  } = useFavorite();

  const [cantidad, setCantidad] = useState(1);

  if (!producto) return null;

  const agregar = () => {

    for (let i = 0; i < cantidad; i++) {

      addToCart(producto);

    }

    toast.success("Producto agregado al carrito");

    onClose();

  };

  return (

    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-5">

      <div className="bg-white rounded-3xl max-w-5xl w-full overflow-hidden relative">


        <button
          onClick={onClose}
          className="absolute right-5 top-5 w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition cursor-pointer"
        >
          <FaTimes className="text-2xl text-gray-700" />
        </button>

        <div className="grid md:grid-cols-2">


          <img
            src={producto.imagen}
            alt={producto.nombre}
            //className="w-full h-full object-cover"
            className="w-full h-full object-cover md:rounded-l-3xl"
          />

   

          <div className="p-8">

            <span className="text-orange-500">

              {producto.categoria}

            </span>

            <h2 className="text-4xl font-bold mt-2">

              {producto.nombre}

            </h2>

            <h3 className="text-green-600 text-3xl font-bold mt-4">

              S/. {producto.precio.toFixed(2)}

            </h3>

            <p className="text-gray-500 mt-6 leading-8">

              {producto.descripcion}

            </p>

            <div className="mt-8">

              <h4 className="font-bold mb-2">

                Beneficios

              </h4>

              <ul className="list-disc ml-6 space-y-2">

                <li>100% Natural</li>

                <li>Preparado al instante</li>

                <li>Frutas frescas seleccionadas</li>

              </ul>

            </div>

  

            <div className="mt-8">
              <h4 className="font-semibold text-gray-700 mb-3">
                Cantidad
              </h4>

              <div className="inline-flex items-center border border-gray-300 rounded-full overflow-hidden">

                <button
                  onClick={() => cantidad > 1 && setCantidad(cantidad - 1)}
                  className="w-12 h-12 flex items-center justify-center bg-red-500 hover:bg-red-600 text-white transition cursor-pointer"
                >
                  <FaMinus />
                </button>

                <span className="w-16 text-center text-xl font-bold">
                  {cantidad}
                </span>

                <button
                  onClick={() => setCantidad(cantidad + 1)}
                  className="w-12 h-12 flex items-center justify-center bg-green-600 hover:bg-green-700 text-white transition cursor-pointer"
                >
                  <FaPlus />
                </button>

              </div>
            </div>

  
            <div className="flex items-center gap-4 mt-10">

              <button
                onClick={() => toggleFavorite(producto)}
                className={`w-14 h-14 rounded-full flex items-center justify-center text-xl text-white transition-all duration-300 cursor-pointer
      ${isFavorite(producto.id)
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-pink-500 hover:bg-pink-600"
                  }`}
              >
                <FaHeart />
              </button>

              <button
                onClick={agregar}
                className="flex-1 h-14 bg-green-600 hover:bg-green-700 rounded-xl text-white font-semibold flex items-center justify-center gap-3 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
              >
                <FaShoppingCart className="text-lg" />

                <span>
                  Agregar al carrito
                </span>

              </button>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default ProductModal;