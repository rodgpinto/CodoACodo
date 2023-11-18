function calcularPrecio() {
    // Obtener el valor de la cantidad desde el input
    var cantidad = document.getElementById('cantidad').value;

    // Valor constante por unidad del producto
    var valorTicket = 200;

    // Calcular el precio total sin descuento
    var precioTotal = cantidad * valorTicket;

    // Obtener el valor del descuento seleccionado
    var descuentoSeleccionado = document.getElementById('descuento').value;

    // Aplicar el descuento correspondiente
    var precioConDescuento;
    if (descuentoSeleccionado === 'estudiante') {
        precioConDescuento = precioTotal * 0.2; // 80% de descuento
    } else if (descuentoSeleccionado === 'trainee') {
        precioConDescuento = precioTotal * 0.5; // 50% de descuento
    } else if (descuentoSeleccionado === 'junior') {

        precioConDescuento = precioTotal * 0.85; // 15% de descuento
    }

    // Mostrar el resultado en la etiqueta con id "resultado"
    document.getElementById('resultado').innerHTML = 'Total a Pagar:$' + precioConDescuento.toFixed(2);
}
// Limpiar el contenido del elemento con id "resultado"
function limpiarResultado() {

    document.getElementById('resultado').innerHTML = 'Total a Pagar:$';
}
