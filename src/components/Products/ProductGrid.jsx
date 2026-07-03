import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Container from "../UI/Container";
import SectionTitle from "../UI/SectionTitle";
import { getProductos } from "../../services/productoService";

function ProductGrid() {

  const [productos, setProductos] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function cargarProductos() {

      try {

        const data = await getProductos();

        const destacados = data.filter(producto => producto.destacado);

        setProductos(destacados);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }

    }

    cargarProductos();

  }, []);

  return (

    <section>

      <Container>

        <SectionTitle>

          Lo Más Pedido

        </SectionTitle>

        {loading ? (

          <h2 className="text-center">

            Cargando productos...

          </h2>

        ) : (

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {productos.map((producto) => (

              <ProductCard

                key={producto.id}

                producto={producto}

              />

            ))}

          </div>

        )}

      </Container>

    </section>

  );

}

export default ProductGrid;