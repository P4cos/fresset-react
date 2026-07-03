import { useEffect, useState } from "react";
import { getProductos } from "../services/productoService";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

function Ofertas() {

    const { addToCart } = useCart();

    const [productos, setProductos] = useState([]);

    useEffect(() => {

        cargarProductos();

    }, []);

    const ofertas = productos.filter(producto => producto.oferta);

    console.log(ofertas);

    async function cargarProductos() {

        const data = await getProductos();

        setProductos(data);

    }

   return (

    <div className="max-w-7xl mx-auto py-12 px-5">

            <h1 className="text-5xl font-bold text-center mb-12">
                Promociones
            </h1>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

                {ofertas.map(producto => (

                    <ProductCard
                        key={producto.id}
                        producto={producto}
                        onAgregar={addToCart}
                        oferta={true}
                    />

                ))}

            </div>

        </div>

  );

}

export default Ofertas;