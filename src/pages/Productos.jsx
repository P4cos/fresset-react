import { useEffect, useState } from "react";
import { getProductos } from "../services/productoService";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";

function Productos() {

    const { addToCart } = useCart();

    const [productos, setProductos] = useState([]);
    const [buscar, setBuscar] = useState("");
    const [categoria, setCategoria] = useState("Todas");

    useEffect(() => {

        cargarProductos();

    }, []);

    async function cargarProductos() {

        const data = await getProductos();

        setProductos(data);

    }

    const categorias = [
        "Todas",
        ...new Set(productos.map(p => p.categoria))
    ];

    const productosFiltrados = productos.filter(producto => {

        const coincideNombre = producto.nombre
            .toLowerCase()
            .includes(buscar.toLowerCase());

        const coincideCategoria =
            categoria === "Todas" ||
            producto.categoria === categoria;

        return coincideNombre && coincideCategoria;

    });

    return (

        <div className="max-w-7xl mx-auto py-12 px-5">

            <h1 className="text-5xl text-center font-bold mb-12">
                Nuestros Productos
            </h1>

            <div className="grid md:grid-cols-2 gap-6 mb-10">

                <div>

                    <label className="font-medium">
                        Buscar producto
                    </label>

                    <input
                        type="text"
                        placeholder="Buscar por nombre..."
                        value={buscar}
                        onChange={(e)=>setBuscar(e.target.value)}
                        className="w-full border rounded-lg p-3 mt-2"
                    />

                </div>

                <div>

                    <label className="font-medium">
                        Categoría
                    </label>

                    <select
                        value={categoria}
                        onChange={(e)=>setCategoria(e.target.value)}
                        className="w-full border rounded-lg p-3 mt-2"
                    >

                        {categorias.map(cat=>(
                            <option
                                key={cat}
                                value={cat}
                            >
                                {cat}
                            </option>
                        ))}

                    </select>

                </div>

            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

                {productosFiltrados.map(producto=>(

                    <ProductCard
                        key={producto.id}
                        producto={producto}
                        onAgregar={addToCart}
                    />

                ))}

            </div>

        </div>

    );

}

export default Productos;