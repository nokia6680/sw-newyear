const swiper = new Swiper('.swiper-container.projects-slider', {
    loop: true,
    speed: 1400,
    spaceBetween: 0,
    slidesPerView: 'auto',
    centeredSlides: true,
    autoplay: true,

    pagination: {
        el: '.projects__pagination',
        dynamicBullets: true,
    },

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 4,
            spaceBetween: 0,
            centeredSlides: false,
            slidesPerGroup: 2
        },
        // when window width is >= 640px
        1200: {
            slidesPerView: 5,
            spaceBetween: 0,
            centeredSlides: false,
            slidesPerGroup: 1,
            touchReleaseOnEdges: true,

            pagination: {
                el: '.projects__pagination',
                dynamicBullets: true,
            },
        },
        // when window width is >= 640px
        1680: {
            loop: true,
            slidesPerView: 8,
            spaceBetween: 0,
            centeredSlides: false,
            touchReleaseOnEdges: true,
            slidesPerGroup: 1,
            pagination: {
                el: '.projects__pagination',
                dynamicBullets: true,
            },
        }
    }
});

const swiper2 = new Swiper('.swiper-container-2.clients-slider', {
    loop: true,
    speed: 800,
    spaceBetween: 0,
    slidesPerView: 1,
    centeredSlides: true,

    // Navigation arrows
    pagination: {
        el: '.clients__pagination',
        dynamicBullets: true,
    },

    autoplay: true,

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 4,
            spaceBetween: 20,
            centeredSlides: false
        },
        // when window width is >= 640px
        1366: {
            slidesPerView: 8,
            spaceBetween: 0
        }
    }
});

const swiper3 = new Swiper('.swiper-container.article__slider-container', {
    loop: true,
    speed: 800,
    spaceBetween: 0,
    slidesPerView: 1,
    centeredSlides: true,

    autoplay: true,

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.5,
            spaceBetween: 10
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },
        // when window width is >= 640px
        1366: {
            slidesPerView: 4,
            spaceBetween: 10
        }
    }
});
