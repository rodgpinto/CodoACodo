function calcularPrecio() {
    var cantidad = document.getElementById('cantidad').value;

    var valorTicket = 200;

    var precioTotal = cantidad * valorTicket;

    var descuentoSeleccionado = document.getElementById('descuento').value;

    var precioConDescuento;
    if (descuentoSeleccionado === 'estudiante') {
        precioConDescuento = precioTotal * 0.2; // 80% de descuento
    } else if (descuentoSeleccionado === 'trainee') {
        precioConDescuento = precioTotal * 0.5; // 50% de descuento
    } else if (descuentoSeleccionado === 'junior') {

        precioConDescuento = precioTotal * 0.85; // 15% de descuento
    }

    document.getElementById('resultado').innerHTML = 'Total a Pagar:$' + precioConDescuento.toFixed(2);
}
function limpiarResultado() {

    document.getElementById('resultado').innerHTML = 'Total a Pagar:$';
}
