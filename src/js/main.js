const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.header__menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

window.onscroll = () =>{
    menu.classList.remove('is-active');
    menuLinks.classList.remove('active');

    if(window.scrollY > 40){
        document.querySelector('.header .navbar').classList.add('active');
    }else{
        document.querySelector('.header .navbar').classList.remove('active');
    }
}


// slider
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
    delay: 3500,
    disableOnInteraction: false,
},
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
},

});
