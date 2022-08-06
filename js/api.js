/* Para este desafío utilice una api de conversor de divisas, es provechosa para la compra-venta por que los valores del mercado están en dólares en su mayoría o dolarizados.  */

let inputs = document.querySelectorAll(".valor");

let url = "https://api.exchangeratesapi.io/latest?symbols=USD,ARG";
fetch(url)
  .then(r => r.json())
  .then(data => {
    document.querySelector("#USD")
      .dataset.cambio = data.rates.USD;
    document.querySelector("#ARG")
      .dataset.cambio = data.rates.ARG;  

    inputs.forEach(input => {
      input.value = input.dataset.cambio;
    });
  })
  .catch(error => console.error(error))

function valorCambiado(input) {
  let factor = input.value / input.dataset.cambio;
  inputs.forEach(campo => {
    campo.value = (campo.dataset.cambio * factor).toFixed(2);
  })
};