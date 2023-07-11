const alternar1 = document.getElementsByClassName ('cuadrado1')[0];
alternar1.addEventListener('click', function(e) {
    e.currentTarget.classList.toggle ('cuadrado3-active');
});

const alternar2 = document.getElementsByClassName ('cuadrado2')[0];
alternar2.addEventListener('click', function(e) {
e.currentTarget.classList.toggle ('cuadrado3-active');
});


const alternar = document.getElementsByClassName ('cuadrado3')[0];
alternar.addEventListener('click', function(e) {
    e.currentTarget.classList.toggle ('cuadrado3-active');
});
