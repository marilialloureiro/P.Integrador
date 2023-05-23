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
  var rbtn2 = document.getElementById("rbtnpria2")

  if (document.getElementById("rbtnpria1").checked){

    resultado = "checado o primeiro"


  }else if (rbtn2.checked){
    resultado = "checado o segundo"
  }

  if (true){

    var2 = "primeiro if"


  }else if (false){
    var2 = "segundo if"
  }

  document.getElementById("mudaValor").innerHTML = resultado + var2

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
