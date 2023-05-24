// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
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
  type=("text/javascript");
  var primeiro_ano = prompt('Digite seu ano de nascimento:');
  var segundo_ano = prompt('Digite seu ano de nascimento:');
  var terceiro_ano = prompt('Digite seu ano de nascimento:');
  
  
  if((primeiro_ano > segundo_ano) && (primeiro_ano > terceiro_ano)) mensagem = "O primeiro usuário é mais velho!"
  else
  if((segundo_ano > primeiro_ano) && (segundo_ano> terceiro_ano)) mensagem=  "O segundo usuário é mais velho!"
  else
  if((terceiro_ano>primeiro_ano) && (terceiro_ano > segundo_ano)) mensagem= "O terceiro usuário é mais velho!"
  else;
  
  alert(mensagem);

})()
