const btn = document.querySelector('#menu-icon');
const showAside = document.querySelector('aside');
const body = document.querySelector('body');
const show = document.querySelector('.show');

btn.addEventListener('click', function(){
    if (showAside.style.display == 'block'){
        showAside.style.display = 'none';
    } else {
        showAside.style.display = 'block'
    }    
});

btn.addEventListener('click', function(){
    if (showAside.style.display == 'block'){
        show.style.display = 'none';
    } else {
        show.style.display = 'block'
    }
});