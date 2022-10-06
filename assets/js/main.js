let btnPerfil = document.querySelector('.perfil__btn');
let btnShare = document.querySelector('.compartilhar__btn');
let elemento = document.querySelector('.share');

btnPerfil.addEventListener('click', function () {
    if(elemento.classList.contains('escondido')) {
        elemento.classList.remove('escondido');
        elemento.classList.add('mostrar')
        console.log('clicj')
    } else {
        elemento.classList.remove('mostrar')
        elemento.classList.add('escondido');
    }
})

