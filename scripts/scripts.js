// seleciona todos os icones
const icons = document.querySelectorAll('.icon')


// percorre todos os icones
icons.forEach(icon => {
  
    
  // adiciona evento de clique
  icon.onmouseover = function() {
    
     // pega o valor dentro do atributo data-conteudo=""
     const dataContent = this.dataset.conteudo

     // remove a classe 'visible' de todos elementos
     document.querySelectorAll('.conteudo').forEach(divConteudo => {
        divConteudo.classList.remove('visible')
     })
     
     // adiciona a classe 'visible' no conteúdo clicado
     const conteudo = document.querySelector(`#conteudo_${dataContent}`)
     conteudo.classList.add('visible')

     //Remove o titulo que aparece antes de iniciar os eventos
     const skill = document.getElementById('skill-title')
     skill.innerHTML = ''
  }

})



//comportamento do menu mobile
const menu = document.querySelector(".menu")
const btnMenuOpen = document.querySelector(".btnMenu_open");
const btnMenuClose = document.querySelector(".btnMenu_close");

btnMenuOpen.addEventListener("click", function(){
   menu.classList.add("menu_open");
});

btnMenuClose.addEventListener("click", function(){
   menu.classList.remove("menu_open");
});


 

