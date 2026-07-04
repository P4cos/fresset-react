const URL = "https://my-json-server.typicode.com/P4cos/fresset-react/productos";

export async function getProductos() {
    const response = await fetch(URL);

    if (!response.ok) {
        throw new Error("Error al obtener productos");
    }

    return await response.json();
}