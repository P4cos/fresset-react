import { Link } from "react-router-dom";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";

function CTA() {
  return (
    <section className="bg-gradient-to-r from-green-600 to-green-500 py-20">

      <div className="max-w-6xl mx-auto px-6 text-center text-white">

        <h2 className="text-5xl font-bold">

          ¡Ven y disfruta de la frescura natural!

        </h2>

        <p className="mt-6 text-xl max-w-3xl mx-auto leading-9">

          Descubre nuestra variedad de jugos, batidos, sándwiches y postres
          preparados con ingredientes frescos y seleccionados especialmente
          para ti.

        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">

          <Link
            to="/productos"
            className="bg-white text-green-600 font-bold px-8 py-4 rounded-full hover:scale-105 transition flex items-center justify-center gap-3"
          >
            Ver Carta
            <FaArrowRight />
          </Link>

          <Link
            to="/contacto"
            className="border-2 border-white px-8 py-4 rounded-full hover:bg-white hover:text-green-600 transition flex items-center justify-center gap-3"
          >
            Contactarnos
            <FaPhoneAlt />
          </Link>

        </div>

      </div>

    </section>
  );
}

export default CTA;