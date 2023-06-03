// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()


function verificaOpcaoRadioButton(){
  var rbtn2 = document.getElementById("")

  if (document.getElementById("plano1").checked){

    resultado = "R$5,00"
    plano = "Plano Start"
    detalhes = "1 anúncio + Suporte via e-mail"

  }
  
  else if (plano2.checked){
    resultado = "R$10,00"
    plano = "Plano Pro"
    detalhes = "5 anúncios + Suporte via e-mail"
  }

  else if (plano3.checked){
    resultado = "R$20,00"
    plano = "Plano Premium"
    detalhes = "15 anúncios + Suporte via e-mail"
  }

  

  document.getElementById("mudaValor").innerHTML = resultado
  document.getElementById("mudaPlano").innerHTML = plano
  document.getElementById("mudadetalhes").innerHTML = detalhes

}




  


// if (document.getElementById("cancelar").click().prop("checked")) {
//   console.log('checado o primeiro')
//   // Lógica caso seja gênero
//   // masculino selecionado
// } else if (document.getElementById("cancelar2").click().prop("checked")) {
//   console.log('checado o segundo')
//   // Lógica caso seja gênero
//   // feminino selecionado
// }
