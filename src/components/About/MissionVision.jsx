import {
  FaBullseye,
  FaEye,
} from "react-icons/fa";

function MissionVision() {

  return (

    <section className="bg-gray-50 py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white rounded-3xl shadow-lg p-10 hover:-translate-y-2 transition">

            <FaBullseye className="text-green-600 text-5xl mb-5" />

            <h2 className="text-3xl font-bold mb-4">

              Nuestra Misión

            </h2>

            <p className="text-gray-600 leading-8">

              Brindar productos saludables preparados con ingredientes
              frescos, ofreciendo una atención de calidad que promueva
              un estilo de vida saludable para nuestros clientes.

            </p>

          </div>


          <div className="bg-white rounded-3xl shadow-lg p-10 hover:-translate-y-2 transition">

            <FaEye className="text-orange-500 text-5xl mb-5" />

            <h2 className="text-3xl font-bold mb-4">

              Nuestra Visión

            </h2>

            <p className="text-gray-600 leading-8">

              Ser la juguería referente en Lima Norte,
              reconocida por la calidad de nuestros productos,
              la innovación y la satisfacción de nuestros clientes.

            </p>

          </div>

        </div>

      </div>

    </section>

  );

}

export default MissionVision;