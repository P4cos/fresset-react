import ProductCard from "../components/Products/ProductCard";
import { useFavorite } from "../context/FavoriteContext";
import { Link } from "react-router-dom";

function Favoritos() {

  const { favorites } = useFavorite();

  return (

    <div className="max-w-7xl mx-auto py-16 px-6">

      <h1 className="text-4xl font-bold mb-10">

        Mis Favoritos

      </h1>

      {favorites.length === 0 ? (

        <div className="text-center">

          <p className="text-gray-500">

            No tienes productos favoritos.

          </p>

          <Link
            to="/productos"
            className="inline-block mt-6 bg-green-600 text-white px-8 py-3 rounded-full"
          >
            Ver Productos
          </Link>

        </div>

      ) : (

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {favorites.map(producto => (

            <ProductCard
              key={producto.id}
              producto={producto}
            />

          ))}

        </div>

      )}

    </div>

  );

}

export default Favoritos;