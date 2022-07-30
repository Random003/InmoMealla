
let boton = document.getElementById("botCont");

boton.addEventListener("click", () => {
  swal({
    title: "Formulario Enviado",
    text: "Gracias por comunicarse con nosotros, en breve le responderemos",
    icon: "success",
    button: "Continuar",
  });
});
 


let botonn = document.getElementById("botLimp");

botonn.addEventListener("click", () => {
  swal({
    title: "Campos Borrados",
    text: "Puede llenarlos nuevamente",
    icon: "error",
    button: "Continuar",
  });
});




/* boton.addEventListener("click", () => {

  Noty({
    type: 'success',
    layout: 'topRight',
    text: 'Some notification text'
}).show();
}); */