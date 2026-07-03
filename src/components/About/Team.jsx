import {
  FaUserTie,
} from "react-icons/fa";

function Team() {

  const equipo = [

    {
      nombre: "Kenji Osores",
      cargo: "Administrador",
    },

    {
      nombre: "Carla Osores",
      cargo: "Nutricionista",
    },

    {
      nombre: "Lucía Sánchez",
      cargo: "Atención al Cliente",
    },

  ];

  return (

    <section className="max-w-7xl mx-auto py-20 px-6">

      <h2 className="text-4xl font-bold text-center mb-14">

        Nuestro Equipo

      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {equipo.map((persona) => (

          <div
            key={persona.nombre}
            className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition"
          >

            <div className="w-28 h-28 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">

              <FaUserTie className="text-5xl text-green-600" />

            </div>

            <h3 className="text-2xl font-bold">

              {persona.nombre}

            </h3>

            <p className="text-orange-500 mt-2">

              {persona.cargo}

            </p>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Team;