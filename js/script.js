$(document).ready(function () {

    MicroModal.init({
        openTrigger: 'data-custom-open',
        disableScroll: false,
        awaitCloseAnimation: true
    })

    $('input').on('keyup', function () {
        var $this = $(this),
            val = $this.val();

        if (val.length >= 1) {
            $this.addClass('notempty');
        } else {
            $this.removeClass('notempty');
        }
    });

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
            // prevArrow: "<button class='slide-arrow slick-prev'><span class='slide-text'>пред</span></button>",
            // nextArrow: "<button class='slide-arrow slick-next'><span class='slide-text'>след</span></button>"
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






    if ($('.linkFancyBox').length > 0) {
        Fancybox.bind("[data-fancybox]", {
        });
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