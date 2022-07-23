let calcRes = document.getElementById("calcRes");

function captura2() {
    let formInputs = document.getElementById("formcalculo").elements;
    localStorage.setItem('locador', formInputs['locador'].value);
    localStorage.setItem('cantProp', formInputs['cantProp'].value);
    let props = []

    for (let i = 1; i <= formInputs['cantProp'].value; i++)  {
        props.push({
            calle: formInputs['calle' + i].value, 
            valor: formInputs['valMes' + i].value,
        });
    }
    localStorage.setItem('props', JSON.stringify(props));
    calculo();
    return null;
  }

//let nombreCliente = prompt("Ingrese el nombre del Locador");

//let cantidadProp = parseInt(prompt("Ingrese la cantidad de propiedades a nombre del Locador"));

const resultado= [] 
const calculo = () => {
    event.preventDefault();
    let totalPago = 0;
    const props = JSON.parse(localStorage.getItem('props'));
    // props es un arreglo que tiene nombre de calle de laprop y el
    console.log(props)
    //if (cantidadProp !== 0) {

        for (let i = 0; i < props.length; i++) {
            totalPago += +props[i].valor;
            let mensaje = "Ingresó un pago sobre la propiedad en calle " + props[i].calle + " por un valor de $" + props[i].valeMes + ".-";            
        }
        
        calcRes.innerHTML = ("Al Locador " + localStorage.getItem('locador') + " se le debe depositar un total de $" + totalPago + ".- por el cobro de alquileres. Los detalles de los inmuebles son los siguientes: " + JSON.stringify(props, null, 2));
        
        
   //} else {
       // alert ("Revise sus resultados por favor e intente nuevamente presionando ok");
   // }
}


/* ------ */

/* let locador = document.getElementById("locador"); */




/* let totalPago = 0;

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

alert ("Al Locador " + nombreCliente + " se le debe depositar un total de $" + totalPago + ".- por el cobro de alquileres. Los detalles de los inmuebles son los siguientes: " + JSON.stringify(resultado, null, 2)/* .replace("{", " ").replace("}", " ").replace("{", " ").replace("}", " ") *//* ); */



/* -------
 */

/* let locador = document.getElementById("locador"); */
