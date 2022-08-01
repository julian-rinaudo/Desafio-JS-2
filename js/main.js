
  /*Calcular valor final de un producto seleccionado en funcion de impuestos y descuentos*/
debugger;
const iva = 1.21;
function producto() {
    let prod;
    do {
        prod = parseInt(
            prompt(`Seleccione un producto
1)Monitor
2)Mouse
3)Teclado`)
        );
    } while (isNaN(prod) && prod != 1 && prod != 2 && prod != 3);

    switch (prod) {
        case 1:
            return "Monitor";
        case 2:
            return "Mouse";
        case 3:
            return "Teclado";
    }
}

function precio(prod) {
    if (prod === "Monitor") {
        return 25000;
    } else if (prod === "Mouse") {
        return 9000;
    } else {
        return 14000;
    }
}
function resultado(prod, precio) {
    alert(`Usted eligió ${prod}.
Valor total sin IVA ni descuento ARS $${precio}`);
}

function imp(precio) {
    switch (precio) {
        case 9000:
            return precio * iva;
        case 25000:
            return precio * iva;

        case 14000:
            return precio * iva;
    }
}
function descuento(precio) {
    switch (precio) {
        case 9000:
            return precio - precio * 0.3;
        case 25000:
            return precio - precio * 0.3;
        case 14000:
            return precio - precio * 0.3;
    }
}

function total(precio) {
    alert(`Monto total a pagar con IVA incluido,
menos el 30% que se le hace pagando en efectivo.
Total a pagar: ARS $${precio}`);
}

let prodSeleccionado = producto();
let validarPrecio = precio(prodSeleccionado);
let monto = resultado(prodSeleccionado, validarPrecio);
let impuesto = imp(validarPrecio);
let desc = descuento(validarPrecio);
let montoApagar = impuesto + desc;
total(montoApagar);















