


let boton = document.getElementById("botCont");

/* boton.addEventListener("click", () => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Signed in successfully'
      })
});
 */


boton.addEventListener("click", () => {

  Noty({
    type: 'success',
    layout: 'topRight',
    text: 'Some notification text'
}).show();
});