
  const btnAbrirModal =
  document.querySelector("#btn-abrir-modal");
  const btnCerrarModal =
  document.querySelector("#btn-cerrar-modal");
  const modal = 
  document.querySelector("#modal");
 
  btnAbrirModal.addEventListener("click",()=>{modal.showModal();} )
 
  btnCerrarModal.addEventListener("click",()=>{modal.close();} )
 



 
(() => {
  'use strict'
 
 
  const forms = document.querySelectorAll('.needs-validation')
 
 
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
 
