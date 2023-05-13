const btns = document.querySelectorAll('.btn');
const btns2 = document.querySelectorAll('.apply');
const overlay = document.querySelector(".overlay");
const form = document.querySelector('.callback-form');
const body = document.querySelector('body');

btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        overlay.style.display = 'flex';
        body.style.overflow = 'hidden';
    })
})

btns2.forEach(function (btn) {
    btn.addEventListener('click', function () {
        overlay.style.display = 'flex';
    })
})

form.addEventListener('click', function (e) {
    e.stopPropagation();
})

overlay.addEventListener('click', function () {
    overlay.style.display = 'none';
    body.style.overflow = 'auto';
})