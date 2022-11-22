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




    if ($(".menuBurger").length) {
        $(".menuBurger").on("click", function () {
            $(".menuBurger").toggleClass("open")
            $(".menu").toggleClass("open")
        })
    }

    if ($('.linkFancyBox').length > 0) {
        Fancybox.bind("[data-fancybox]", {
        });
    }

    if ($('.sliderMedia').length > 0) {

        let slider = $('.sliderMedia')

        slider.slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrow: true,
            prevArrow: "<button class='slide-arrow slick-prev'><span class='slide-text'>пред</span></button>",
            nextArrow: "<button class='slide-arrow slick-next'><span class='slide-text'>след</span></button>"
        });

    }
})