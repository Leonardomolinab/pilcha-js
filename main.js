let carrito = [];

function sumarProducto(nombre, precio) {
  carrito.push({ nombre: nombre, precio: precio });
  alert(nombre + " agregado al carrito por $" + precio + ".");
}


function eliminarProducto(nombre) {
  carrito = carrito.filter(function (producto) {
    return producto.nombre !== nombre;
  });
  alert(nombre + " eliminado del carrito.");
}

function finalizarCompra() {
  alert("Compra finalizada. Total a pagar: $" + calcularTotal());
  carrito = [];
}

function menu() {
  let opciones;
  do {
    opciones = prompt(
      "Seleccione una opción:\n1. Agregar producto\n2. Eliminar producto\n3. Finalizar compra \n4. Salir."
    );
    switch (opcion) {
      case "1":
        let nombre = prompt("Ingrese el nombre del producto:");
        let precio = (prompt("Ingrese el precio del producto:"));
        if (isNaN(precio) || precio == '' || nombre=='') {
          alert("Datos inválidos.");
        } else {
          sumarProducto(nombre, precio);
        }
        break;
      case "2":
        let eliminar = prompt("Ingrese el nombre del producto a eliminar:");
        eliminarProducto(eliminar);
        break;
      case "3":
        finalizarCompra();
        break;
      case "4":
        alert("Gracias por tu compra.");
        break;
      default:
        alert("Debes seleccionar alguna de las opciones, para salir selecciona la opcion 4.");
    }
  } while (opcion !== "4");
}

// Iniciar simulador
menu();
