import { FaLeaf } from "react-icons/fa";

function HeroAbout() {
  return (
    <section className="bg-gradient-to-r from-green-600 to-green-500 text-white py-24">

      <div className="max-w-7xl mx-auto px-6 text-center">

        <div className="flex justify-center mb-6">
          <FaLeaf className="text-6xl text-yellow-300" />
        </div>

        <h1 className="text-5xl font-bold">
          Nosotros
        </h1>

        <p className="mt-6 text-xl max-w-3xl mx-auto leading-9">
          En Fresset creemos que una alimentación saludable comienza
          con ingredientes frescos, naturales y preparados al instante
          para brindarte una experiencia única en cada visita.
        </p>

      </div>

    </section>
  );
}

export default HeroAbout;