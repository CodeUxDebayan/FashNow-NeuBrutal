const menu = document.getElementById("menu");
const sidebar = document.querySelector(".header-right");

menu.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    console.log("clicked");
});

document.addEventListener("DOMContentLoaded", function() {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: '3',
        spaceBetween: 0, 
        loop: true,      
        autoplay: {
            delay: 0,
            stopOnLastSlide: false,
            waitForTransition: true,
        },
        speed: 10000,  
        grabCursor: true,
        freemode: true,
        breakpoints: {
            0: {
                speed: 5000,
            },
            1200: {
                speed: 5000,
            }
        }
        
        
    });

    // Pause on hover
    const swiperSlide = document.querySelector('.swiper-slide');
    swiperSlide.addEventListener('mouseenter', function() {
        swiper.autoplay.stop();
    });
    swiperSlide.addEventListener('mouseleave', function() {
        
            swiper.autoplay.start();
        
    });
});