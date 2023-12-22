document.addEventListener('DOMContentLoaded', () => {
    const carrito = [];

    // Obtener los botones de "Agregar al carrito"
    const botonesAgregar = document.querySelectorAll('.btn-comprar');

    // Agregar evento de clic a cada botón
    botonesAgregar.forEach((boton) => {
        boton.addEventListener('click', () => {
            const productoId = boton.getAttribute('data-id');
            const productoNombre = boton.previousElementSibling.textContent;
            const productoPrecio = boton.previousElementSibling.nextElementSibling.textContent;

            // Agregar el producto al carrito
            carrito.push({ id: productoId, nombre: productoNombre, precio: productoPrecio });

            // Actualizar el carrito en la interfaz
            mostrarCarrito();
        });
    });

    // Función para mostrar el carrito en la interfaz
    function mostrarCarrito() {
        const carritoLista = document.getElementById('carrito-lista');
        carritoLista.innerHTML = '';

        carrito.forEach((producto) => {
            const elemento = document.createElement('li');
            elemento.textContent = `${producto.nombre} - ${producto.precio}`;
            carritoLista.appendChild(elemento);
        });

        // Calcular y mostrar el total
        const total = carrito.reduce((total, producto) => total + parseFloat(producto.precio.replace('$', '')), 0);
        document.getElementById('total').textContent = total.toFixed(2);
    }

    // Botón para vaciar el carrito
    const botonVaciar = document.getElementById('boton-vaciar');
    botonVaciar.addEventListener('click', () => {
        carrito.length = 0; // Vaciar el array del carrito
        mostrarCarrito(); // Actualizar la interfaz
    });
});
