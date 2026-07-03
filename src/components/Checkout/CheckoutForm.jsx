function CheckoutForm({
  cliente,
  errors,
  handleChange,
  confirmarPedido,
}) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-8">

      <h2 className="text-2xl font-bold mb-6">
        Datos del cliente
      </h2>

      <div className="mb-5">
        <label className="block font-semibold mb-2">
          Nombre *
        </label>

        <input
          type="text"
          name="nombre"
          value={cliente.nombre}
          onChange={handleChange}
          placeholder="Ingrese su nombre"
          className={`w-full border rounded-xl p-3 outline-none transition
            ${
              errors.nombre
                ? "border-red-500"
                : "focus:border-green-600"
            }`}
        />

        {errors.nombre && (
          <p className="text-red-500 text-sm mt-1">
            {errors.nombre}
          </p>
        )}
      </div>

      <div className="mb-5">
        <label className="block font-semibold mb-2">
          Teléfono *
        </label>

        <input
          type="tel"
          name="telefono"
          value={cliente.telefono}
          onChange={handleChange}
          placeholder="987654321"
          className={`w-full border rounded-xl p-3 outline-none transition
            ${
              errors.telefono
                ? "border-red-500"
                : "focus:border-green-600"
            }`}
        />

        {errors.telefono && (
          <p className="text-red-500 text-sm mt-1">
            {errors.telefono}
          </p>
        )}
      </div>


      <div className="mb-5">
        <label className="block font-semibold mb-2">
          Dirección *
        </label>

        <input
          type="text"
          name="direccion"
          value={cliente.direccion}
          onChange={handleChange}
          placeholder="Ingrese su dirección"
          className={`w-full border rounded-xl p-3 outline-none transition
            ${
              errors.direccion
                ? "border-red-500"
                : "focus:border-green-600"
            }`}
        />

        {errors.direccion && (
          <p className="text-red-500 text-sm mt-1">
            {errors.direccion}
          </p>
        )}
      </div>


      <div className="mb-5">
        <label className="block font-semibold mb-2">
          Referencia
        </label>

        <input
          type="text"
          name="referencia"
          value={cliente.referencia}
          onChange={handleChange}
          placeholder="Frente al parque..."
          className="w-full border rounded-xl p-3 focus:border-green-600 outline-none"
        />
      </div>

      <div className="mb-6">
        <label className="block font-semibold mb-2">
          Observaciones
        </label>

        <textarea
          rows="4"
          name="observaciones"
          value={cliente.observaciones}
          onChange={handleChange}
          placeholder="Ejemplo: sin azúcar, extra hielo..."
          className="w-full border rounded-xl p-3 focus:border-green-600 outline-none"
        />
      </div>

      <button
        onClick={confirmarPedido}
        className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold transition cursor-pointer"
      >
        Confirmar pedido por WhatsApp
      </button>

    </div>
  );
}

export default CheckoutForm;