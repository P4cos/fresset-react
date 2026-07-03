function ProductCard({ producto, onAgregar, oferta = false }) {
    return (
        <div className={`relative rounded-2xl shadow hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden ${
            oferta
                ? "bg-gradient-to-br from-pink-50 to-orange-50"
                : "bg-white"
        }`}>

            {
                oferta && (

                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full font-bold shadow-lg">

                        OFERTA - S/. {producto.descuento}

                    </div>

                )
            }

            <img
                src={producto.imagen}
                alt={producto.nombre}
                className="w-full h-56 object-cover"
            />

            <div className="p-5">

                <div className="flex justify-between items-start">

                    <h3 className="text-2xl font-semibold">
                        {producto.nombre}
                    </h3>

                    <span className="bg-gray-100 text-sm px-3 py-1 rounded-full">
                        {producto.categoria}
                    </span>

                </div>

                <p className="text-gray-500 mt-2">
                    {producto.descripcion}
                </p>

                {
                    oferta ? (

                        <div className="mt-4">

                            <p className="text-gray-400 line-through">
                                S/. {producto.precio.toFixed(2)}
                            </p>

                            <p className="text-green-600 text-2xl font-bold">
                                S/. {(producto.precio - producto.descuento).toFixed(2)}
                            </p>

                        </div>

                    ) : (

                        <p className="text-pink-600 font-bold text-xl mt-4">
                            S/. {producto.precio.toFixed(2)}
                        </p>

                    )
                }

                <button
                    onClick={() => onAgregar(producto)}
                    className="w-full mt-5 bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl transition"
                >
                    Agregar al carrito
                </button>

            </div>

        </div>
    );
}

export default ProductCard;