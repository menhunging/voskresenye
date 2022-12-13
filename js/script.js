$(document).ready(function () {

    if ($('.modal').length > 0) {
        MicroModal.init({
            openTrigger: 'data-custom-open',
            disableScroll: true,
            awaitCloseAnimation: true,

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

    if ($('.phoneInput').length > 0) {
        $(".phoneInput").map(function () {
            $(this).inputmask({
                mask: "+7(999) 999-99-99",
                placeholder: "*",
                clearIncomplete: true
            });
        })

    }

    if ($('.emailInput').length > 0) {
        $(".emailInput").map(function () {
            $(this).inputmask({
                mask: "*{3,20}@*{3,20}.*{3,20}",
                clearIncomplete: true
            });
        })
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

    if ($(".btnBurger").length > 0) {
        $(".btnBurger").on("click", function () {
            $(".btnBurger").toggleClass("open")
            $(".header").toggleClass("open")
            $(".header .headerContent").toggleClass("open")
            $('.overlayBurger').toggleClass("open")
        })
    }

    if ($(".header").length > 0) {
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

        $(".menu ul li a").on("click", function () {

            if ($('.headerContent').hasClass('open')) {
                deleteClassBurger()
            }

            if ($(this).attr("data-link")) {
                let href = $(this).attr("data-link");
                let settingsScroll

                if ($(window).width() < 768) {
                    settingsScroll = $(href).offset().top - 59
                } else {
                    settingsScroll = $(href).offset().top
                }

                $("html, body").animate({
                    scrollTop: settingsScroll
                }, {
                    duration: 370,
                    easing: "linear"
                });

                return false;
            }

        });
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

    if ($('.listAddPictures').length > 0) {
        $('.listAddPictures .delete').click(function () {
            $(this).parents('.item').remove()
        })
    }

    if ($(window).width() < 768) {
        windowClick()
    }

})

let deleteClassBurger = () => {
    $('.header').removeClass('open')
    $('.headerContent').removeClass('open')
    $('.btnBurger').removeClass('open')
    $('.overlayBurger').removeClass("open")
}

let windowClick = () => {
    window.addEventListener('click', e => {
        const target = e.target
        if (!target.closest('.btnBurger') && !target.closest('.headerContent')) {
            deleteClassBurger()
        }
    })
}

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
        windowClick()
    } else {
        if ($('.overlayBurger').hasClass('open')) {
            deleteClassBurger()
        }
    }
});