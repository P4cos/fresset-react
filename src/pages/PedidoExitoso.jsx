import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

function PedidoExitoso() {

  const pedido = JSON.parse(
    localStorage.getItem("ultimoPedido")
  );

  if (!pedido) {

    return (

      <div className="max-w-5xl mx-auto py-20 text-center">

        <h1 className="text-4xl font-bold">

          No existe un pedido reciente

        </h1>

        <Link
          to="/"
          className="mt-8 inline-block bg-green-600 text-white px-8 py-3 rounded-xl"
        >
          Volver al inicio
        </Link>

      </div>

    );

  }

  return (

    <div className="max-w-3xl mx-auto py-20">

      <div className="bg-white rounded-3xl shadow-xl p-10 text-center">

        <FaCheckCircle
          className="text-green-600 mx-auto"
          size={90}
        />

        <h1 className="text-4xl font-bold mt-6">

          ¡Pedido enviado!

        </h1>

        <p className="mt-4 text-gray-500">

          Gracias por comprar en Fresset.

        </p>

        <div className="mt-10 text-left bg-gray-50 rounded-2xl p-6">

          <h2 className="font-bold text-xl mb-4">

            Resumen del pedido

          </h2>

          <p>

            <strong>Cliente:</strong>{" "}
            {pedido.cliente.nombre}

          </p>

          <p>

            <strong>Teléfono:</strong>{" "}
            {pedido.cliente.telefono}

          </p>

          <p>

            <strong>Fecha:</strong>{" "}
            {pedido.fecha}

          </p>

          <p>

            <strong>Total:</strong>

            <span className="text-green-600 font-bold">

              {" "}S/. {pedido.total.toFixed(2)}

            </span>

          </p>

          <hr className="my-5"/>

          <h3 className="font-bold mb-3">

            Productos

          </h3>

          {

            pedido.productos.map(producto => (

              <div
                key={producto.id}
                className="flex justify-between py-2"
              >

                <span>

                  {producto.nombre}

                  x {producto.cantidad}

                </span>

                <span>

                  S/. {(producto.precio * producto.cantidad).toFixed(2)}

                </span>

              </div>

            ))

          }

        </div>

        <Link
          to="/"
          className="inline-block mt-10 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl transition"
        >
          Volver al inicio
        </Link>

      </div>

    </div>

  );

}

export default PedidoExitoso;