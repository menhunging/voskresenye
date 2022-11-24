$(document).ready(function () {

    if ($('.modal').length > 0) {
        MicroModal.init({
            openTrigger: 'data-custom-open',
            disableScroll: false,
            awaitCloseAnimation: true
        })

        $('a[data-custom-open]').map(function () {
            $(this).click(e => e.preventDefault())
        })
    }

    if ($('.inputList').length > 0) {
        $('input').on('keyup', function () {
            var $this = $(this),
                val = $this.val();

            if (val.length >= 1) {
                $this.addClass('notempty');
            } else {
                $this.removeClass('notempty');
            }
        });
    }

    if ($('#phoneInput').length > 0) {
        $("#phoneInput").inputmask({
            mask: "+7(999) 999-99-99",
            placeholder: "*",
            clearIncomplete: true
        });
    }

    if ($('#emailInput').length > 0) {
        $("#emailInput").inputmask({
            mask: "*{3,20}@*{3,20}.*{3,20}",
            clearIncomplete: true
        });
    }

    if ($('.btnTop').length > 0) {
        $(".btnTop").click(function (event) {
            event.preventDefault();
            $("html, body").animate({ scrollTop: 0 });
            return false;
        });
    }

    if ($('.production').length > 0) {

        let slider = $('.production .list')

        slider.slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 5000,
                    settings: "unslick"
                },
                {
                    breakpoint: 992,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            ]
        })

    }

    if ($('.catalogList').length > 0) {

        let slider = $('.catalogList')

        slider.slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 5000,
                    settings: "unslick"
                },
                {
                    breakpoint: 768,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            ]
        })

    }

    if ($(".btnBurger").length) {
        $(".btnBurger").on("click", function () {
            $(".btnBurger").toggleClass("open")
            $(".header .headerContent").toggleClass("open")
        })
    }

    if ($(".header").length) {
        let header = $('.header');

        if ($(window).scrollTop() > 1) {
            header.addClass('scroll');
        } else {
            header.removeClass('scroll');
        }

        $(window).scroll(function () {
            if ($(window).scrollTop() > 1) {
                header.addClass('scroll');
            } else {
                header.removeClass('scroll');
            }
        });
    }

    if ($('.menu').length > 0) {
        $('.menu ul li a').click(function () {
            if ($('.headerContent').hasClass('open')) {
                $('.headerContent').removeClass('open')
                $('.btnBurger').removeClass('open')
            }
        })
    }

    if ($('.btnDialog').length > 0) {
        $('.btnDialog').click(function () {
            $(this).toggleClass('open')
            $('.dialogsSection').toggleClass('open')
            $('body').toggleClass('hidden')
        })
    }

    if ($('.wow').length > 0) {
        var wow = new WOW();
        wow.init();
    }

})

$(window).resize(function () {
    if ($(window).width() < 992) {
        if ($('.production').length > 0) {
            $('.production .list').slick('refresh');
        }
    }

    if ($(window).width() < 768) {
        if ($('.catalogList').length > 0) {
            $('.catalogList').slick('refresh');
        }
    }
});