const btn = document.querySelector('#menu');
const showAside = document.querySelector('#show');
const body = document.querySelector('body');

btn.addEventListener('click', function(){
    if (showAside.style.display == 'block'){
        showAside.style.display = 'none';
    } else {
        showAside.style.display = 'block'
    }
});

btn.addEventListener('click', function(){
    if (showAside.style.display == 'block'){
        document.querySelector('body').style.display = 'block'
    } else {
        document.querySelector('body').style.display = 'flex'
    }
});