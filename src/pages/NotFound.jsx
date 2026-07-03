import { Link, useNavigate } from "react-router-dom";
import Error404 from "../assets/icons/404.svg";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-lime-500 via-green-500 to-yellow-400 px-4">
      <div className="w-full max-w-xl rounded-3xl bg-white/20 backdrop-blur-md shadow-2xl border border-white/30 p-10 text-center">

        <h1 className="text-8xl font-extrabold text-white drop-shadow-lg">
          404
        </h1>

        <h2 className="text-3xl font-semibold text-white mt-4">
          Oops... Página no encontrada
        </h2>

        <p className="text-white/90 mt-4 leading-relaxed">
          Parece que este sabor todavia no existe en Fresset. 
          Regresa al inicio y descubre nuestros jugos naturales.
        </p>

    
        <div className="flex justify-center my-8">
          <img src={Error404} alt="404" className="w-52 animate-pulse" />
        </div>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/"
            className="px-6 py-3 bg-white text-green-600 rounded-full font-semibold shadow hover:scale-105 transition"
          >
            Ir al inicio
          </Link>

          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 border border-white text-white rounded-full hover:bg-white hover:text-green-600 transition"
          >
            Volver
          </button>
        </div>

      </div>
    </div>
  );
}

export default NotFound;