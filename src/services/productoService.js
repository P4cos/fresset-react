const URL = "http://localhost:3000/productos";

export async function getProductos() {
    const response = await fetch(URL);

    if (!response.ok) {
        throw new Error("Error al obtener productos");
    }

    return await response.json();
}