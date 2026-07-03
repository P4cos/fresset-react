import {
  FaHeart,
  FaGlassWater,
  FaFaceSmile,
  FaLocationDot,
} from "react-icons/fa6";

import Container from "../UI/Container";

const benefits = [
  {
    id: 1,
    icon: FaHeart,
    title: "100% Natural",
    description: "Usamos frutas frescas cuidadosamente seleccionadas.",
    color: "bg-green-500",
  },
  {
    id: 2,
    icon: FaGlassWater,
    title: "Preparado al instante",
    description: "Cada pedido se prepara al momento para conservar su sabor.",
    color: "bg-orange-500",
  },
  {
    id: 3,
    icon: FaFaceSmile,
    title: "Sabor único",
    description: "Combinaciones irresistibles para toda la familia.",
    color: "bg-green-500",
  },
  {
    id: 4,
    icon: FaLocationDot,
    title: "Visítanos",
    description: "Calle Las Palmeras 230 - Los Olivos.",
    color: "bg-orange-500",
  },
];

function Benefits() {
  return (
    <section className="py-16 bg-white">

      <Container>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {benefits.map((benefit) => {

            const Icon = benefit.icon;

            return (

              <div
                key={benefit.id}
                className="card-hover p-8 text-center"
              >

                <div
                  className={`${benefit.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto text-white text-2xl`}
                >
                  <Icon />
                </div>

                <h3 className="font-bold text-xl mt-6">
                  {benefit.title}
                </h3>

                <p className="text-gray-500 mt-3">
                  {benefit.description}
                </p>

              </div>

            );

          })}

        </div>

      </Container>

    </section>
  );
}

export default Benefits;