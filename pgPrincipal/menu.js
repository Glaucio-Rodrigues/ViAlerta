// Seleciona todos os itens do menu
const menuItems = document.querySelectorAll('ul li.item-menu');

// Adiciona um evento de clique a cada item do menu
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        // Remove a classe 'ativo' de todos os itens do menu
        menuItems.forEach(i => i.classList.remove('ativo'));
        
        // Para adiciona a classe 'ativo' ao item que foi clicado no html e deixar o item selecionado
        this.classList.add('ativo');
    });
});
// expandir menu no css
var btnexp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')

/*adcionar e remover a classe dinamicamente*/
btnexp.addEventListener('click', function(){ //trabalhar com evento de click
 
 menuSide.classList.toggle('expandir')   // classe expandir estar no css
})

