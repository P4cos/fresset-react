import {
  FaLeaf,
  FaHeart,
  FaSmile,
  FaBolt,
} from "react-icons/fa";

function Values() {

  const valores = [
    {
      icon: <FaLeaf />,
      titulo: "Natural",
      descripcion: "Seleccionamos frutas frescas para conservar todo su sabor y nutrientes.",
      color: "text-green-600",
    },
    {
      icon: <FaHeart />,
      titulo: "Calidad",
      descripcion: "Cada producto se prepara con dedicación para brindar la mejor experiencia.",
      color: "text-red-500",
    },
    {
      icon: <FaSmile />,
      titulo: "Atención",
      descripcion: "Nuestro equipo siempre te atenderá con una sonrisa y amabilidad.",
      color: "text-yellow-500",
    },
    {
      icon: <FaBolt />,
      titulo: "Rapidez",
      descripcion: "Preparamos cada pedido al instante para que disfrutes sin esperar.",
      color: "text-orange-500",
    },
  ];

  return (

    <section className="max-w-7xl mx-auto py-20 px-6">

      <h2 className="text-4xl font-bold text-center mb-14">

        Nuestros Valores

      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {valores.map((valor) => (

          <div
            key={valor.titulo}
            className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition"
          >

            <div className={`text-5xl mb-5 ${valor.color}`}>

              {valor.icon}

            </div>

            <h3 className="text-2xl font-bold mb-4">

              {valor.titulo}

            </h3>

            <p className="text-gray-600 leading-7">

              {valor.descripcion}

            </p>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Values;