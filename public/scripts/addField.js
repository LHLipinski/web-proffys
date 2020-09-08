document.querySelector("#add-time") //localizar o botão
.addEventListener('click', cloneField) //ouvidor de evento com click e chama a função cloneField
function cloneField() {
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //cloneNode copia um item html
    const fields = newFieldContainer.querySelectorAll('input') //localiza todos os itens e coloca na constante fields
    fields.forEach(function(field) {
        field.value = ""
    }) //limpa os valores dos campos ja preenchido
   
    document.querySelector('#schedule-items').appendChild(newFieldContainer) //acha o local aonde sera colocado o que foi copiado

}