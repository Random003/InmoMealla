/* Para la entrega de este desafío decidí dale un poco de forma al buscador sumado al de calculo en la pagina calculo. El buscador funciona Cliqueando en ejercicio y desde esa pagina también cliqueado al buscador */

 const propiedades = [

  {id: 1, nombre: "suipacha"},
  {id: 2, nombre: "haiti"},
  {id: 3, nombre: "aristides"},
  {id: 4, nombre: "martinez"},
  {id: 5, nombre: "Rosas"},

];

function captura() {
  let propiedad = document.getElementById("busca").value;

  let resultado = propiedades.some(elemento => elemento.nombre === propiedad);

  if(resultado){

    (window.confirm("Propiedad disponible, presione OK para visitar nuestra pagina de propiedades")) 
    {window.location.href= "https://random003.github.io/InmoMealla/html/propiedades.html#venta"};
  
  } else {
  
    (window.confirm("Propiedad no disponible actualmente, presione OK para visitar nuestro formulario de contacto")) 
    {window.location.href= "https://random003.github.io/InmoMealla/html/contacto.html"};
  
  }

} 

 

/* let propiedad = prompt("Ingrese la calle de la propiedad que desea verificar disponibilidad").toLowerCase(); */


/* let resultado = propiedades.some(elemento => elemento.nombre === propiedad); */

if(resultado){

  (window.confirm("Propiedad disponible, presione OK para visitar nuestra pagina de propiedades")) 
  /* {window.location.href= "https://random003.github.io/InmoMealla/html/propiedades.html#venta"}; */

} else {

  (window.confirm("Propiedad no disponible actualmente, presione OK para visitar nuestro formulario de contacto")) 
  /* {window.location.href= "https://random003.github.io/InmoMealla/html/contacto.html"}; */ 

}

