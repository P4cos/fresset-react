import {
  FaCheckCircle,
} from "react-icons/fa";

function WhyChooseUs() {

  const razones = [

    "Frutas frescas seleccionadas diariamente",

    "Jugos preparados al instante",

    "Ingredientes 100% naturales",

    "Excelente atención al cliente",

    "Amplia variedad de productos",

    "Ambiente cómodo y familiar",

  ];

  return (

    <section className="bg-green-50 py-20">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-14">

          ¿Por qué elegir Fresset?

        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {razones.map((item) => (

            <div
              key={item}
              className="flex items-center bg-white rounded-2xl shadow-md p-5"
            >

              <FaCheckCircle className="text-green-600 text-2xl mr-4" />

              <span className="text-lg">

                {item}

              </span>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}

export default WhyChooseUs;