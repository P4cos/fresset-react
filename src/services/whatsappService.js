const telefonoEmpresa = "51982105663";

export function generarMensajeWhatsApp(cliente, carrito, total) {

    let mensaje = ` *NUEVO PEDIDO - FRESSET*%0A%0A`;

    mensaje += ` *Cliente:* ${cliente.nombre}%0A`;
    mensaje += ` *Teléfono:* ${cliente.telefono}%0A`;
    mensaje += ` *Dirección:* ${cliente.direccion}%0A`;

    if (cliente.referencia) {

        mensaje += ` *Referencia:* ${cliente.referencia}%0A`;

    }

    if (cliente.observaciones) {

        mensaje += ` *Observaciones:* ${cliente.observaciones}%0A`;

    }

    mensaje += `%0A----------------------------%0A`;

    mensaje += ` *PEDIDO*%0A%0A`;

    carrito.forEach(producto => {

        mensaje += ` ${producto.nombre}%0A`;

        mensaje += `Cantidad: ${producto.cantidad}%0A`;

        mensaje += `Subtotal: S/. ${(producto.precio * producto.cantidad).toFixed(2)}%0A%0A`;

    });

    mensaje += `----------------------------%0A`;

    mensaje += ` *TOTAL:* S/. ${total.toFixed(2)}%0A`;

    return `https://wa.me/${telefonoEmpresa}?text=${mensaje}`;

}