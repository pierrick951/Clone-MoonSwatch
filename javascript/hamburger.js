const burgerButton = document.querySelector('.openbtn');
const burgerMenu = document.querySelector('.burger-menu');
const closeBtn = document.getElementById("closeBtn");

burgerButton.addEventListener('click', function() {
    burgerMenu.classList.toggle('active');
});

//close
closeBtn.addEventListener('click', function() {
    burgerMenu.classList.remove('active');
});
