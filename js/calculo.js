let totalPago = 0;

let nombreCliente = prompt("Ingrese el nombre del Locador");

let cantidadProp = parseInt(prompt("Ingrese la cantidad de propiedades a nombre del Locador"));

const resultado= [] 

for (let i = 0; i < cantidadProp; i++) {

    let propiedad = prompt("Ingrese la calle de la propiedad a realizar el pago");
    let precioPago = parseFloat(prompt("Ingrese el valor del alquiler mensual"));
    totalPago += precioPago;
    let mensaje = "Ingresó un pago sobre la propiedad en calle " + propiedad + " por un valor de $" + precioPago + ".-";
    resultado.push ({calle: propiedad, precio: "$" + precioPago})
    alert(mensaje);
    
}

alert ("Al Locador " + nombreCliente + " se le debe depositar un total de $" + totalPago + ".- por el cobro de alquileres. Los detalles de los inmuebles son los siguientes: " + JSON.stringify(resultado, null, 2)/* .replace("{", " ").replace("}", " ").replace("{", " ").replace("}", " ") */);

