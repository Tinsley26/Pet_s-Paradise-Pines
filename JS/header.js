const hamburger = document.querySelector('.hamburger');
const navlist = document.querySelector('.header-list');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active'); 
    navlist.classList.toggle('active');
    });