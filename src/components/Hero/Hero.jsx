import Button from "../UI/Button";
import Container from "../UI/Container";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-orange-100 via-white to-green-100 overflow-hidden">

      <Container>

        <div className="grid lg:grid-cols-2 gap-10 items-center">


          <div>

            <p className="text-orange-500 font-semibold uppercase tracking-widest">
              Jugos • Smoothies • Sándwiches
            </p>

            <h1 className="text-6xl font-extrabold mt-5 leading-tight">

              Sabor que

              <span className="block text-green-600">

                te nutre

              </span>

            </h1>

            <p className="mt-8 text-lg text-gray-600 leading-8">

              Disfruta nuestros jugos preparados con frutas frescas,
              ingredientes naturales y el mejor sabor para cuidar tu bienestar.

            </p>

            <div className="mt-10 flex gap-5">
             
              <Button>
                <Link to="/productos">Ver Carta</Link>

              </Button>


              

              <Button variant="secondary">

                <Link to="/ofertas">Promociones</Link>

              </Button>

            </div>

          </div>


          <div className="flex justify-center">

            <img
              src="https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=700"
              alt="Jugo Natural"
              className="w-[500px] drop-shadow-2xl rounded-full"
            />

          </div>

        </div>

      </Container>

    </section>
  );
}

export default Hero;