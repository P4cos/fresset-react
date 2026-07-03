import historia from "../../assets/images/products/local.jpg";

function HistorySection() {

  return (

    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="grid lg:grid-cols-2 gap-14 items-center">

        <img
          src={historia}
          alt="Fresset"
          className="rounded-3xl shadow-xl w-full h-[450px] object-cover"
        />

        <div>

          <span className="text-orange-500 font-semibold">
            Nuestra Historia
          </span>

          <h2 className="text-4xl font-bold mt-4">

            Pasión por los sabores naturales

          </h2>

          <p className="mt-6 text-gray-600 leading-8">

            Fresset nació con el objetivo de ofrecer una alternativa
            saludable para quienes disfrutan de jugos naturales,
            batidos, sándwiches y postres preparados con frutas
            frescas y de la mejor calidad.

          </p>

          <p className="mt-6 text-gray-600 leading-8">

            Desde nuestros inicios buscamos brindar una atención
            cercana y productos preparados al instante, conservando
            el sabor auténtico de cada ingrediente.

          </p>

        </div>

      </div>

    </section>

  );

}

export default HistorySection;