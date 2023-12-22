<?php
session_start();

// Inicializar el carrito si no existe
if (!isset($_SESSION['carrito'])) {
    $_SESSION['carrito'] = array();
}

// Agregar producto al carrito
if (isset($_POST['agregar'])) {
    $productoId = $_POST['producto_id'];
    $productoNombre = $_POST['producto_nombre'];
    $productoPrecio = $_POST['producto_precio'];
    $producto = array('id' => $productoId, 'nombre' => $productoNombre, 'precio' => $productoPrecio);
    array_push($_SESSION['carrito'], $producto);
}

// Vaciar el carrito
if (isset($_POST['vaciar'])) {
    $_SESSION['carrito'] = array();
}

// Mostrar el carrito
if (!empty($_SESSION['carrito'])) {
    echo '<h2>Mi carrito de compras</h2>';
    echo '<ul>';
    foreach ($_SESSION['carrito'] as $producto) {
        echo '<li>' . $producto['nombre'] . ' - ' . $producto['precio'] . '</li>';
    }
    echo '</ul>';
    $total = 0;
    foreach ($_SESSION['carrito'] as $producto) {
        $precio = str_replace('$', '', $producto['precio']);
        $total += (float)$precio;
    }
    echo '<p>Total: $' . number_format($total, 2) . '</p>';
} else {
    echo '<p>El carrito está vacío</p>';
}

// Botón para vaciar el carrito
echo '<form method="post" action="">';
echo '<input type="submit" name="vaciar" value="Vaciar carrito">';
echo '</form>';
?>
