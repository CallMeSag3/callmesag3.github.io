$(function () {
    $('.header__slider').slick({
        dots: true,
        speed: 500,
        prevArrow: '<button type="button" class="slick-prev"><img src="./img/upWhite.svg" alt="Previous"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./img/downWhite.svg" alt="Previous"></button>',
        vertical: true,
        responsive: [
            {
                breakpoint: 361,
                settings: {
                    dots: false,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            }
        ]
    });

    $('.product__name').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        focusOnSelect: true,
        vertical: true,
        asNavFor: '.product__content',
        prevArrow: '<button type="button" class="product__prev"><img src="./img/upBlack.svg" alt="Previous"></button>',
        nextArrow: '<button type="button" class="product__next"><img src="./img/downBlack.svg" alt="Previous"></button>',
    });
    $('.product__content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product__name',
        fade: true,
        dots: false,
        arrows: false,
    });
    $('.header__burger').on('click', function () {
        $('.header__list').toggleClass('header__list--active');
        $('.header__burger').toggleClass('header__burger--active');
    })
});