$(function () {
    $.fn.heightLine = function (options) {
        var container = $(this);

        function setHeight() {
            var winWlh = $(window).width();
            var maxHeight = 0;
            column = $(container);
            if (winWlh <= 0) {
                column.removeAttr('style');
            } else {
                column.css('height', 'auto');
                column.each(function () {
                    if ($(this).height() > maxHeight) {
                        maxHeight = $(this).height();
                    }
                });
                column.height(maxHeight);
            }
        }
        setHeight();
        $(window).resize(function () {
            setHeight();
        });
    };
});

$(window).load(function () {
    $('.thesame_height').heightLine();
})


$(window).load(function () {
    $('.thesame_height_2').heightLine();
})

$(document).ready(function(){

    // menu
    $('#gnav_sp').click(function(){
        $('#gnav').slideToggle();
        $('#gnav_sp').toggleClass('active');
    });


    // slide trang chu 
    $('.slide_trangchu').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots : true,
        fade : true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnHover : false
    });


    // slide phan hoi
    
    $('#slide_phanhoi ul').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots : true,
        fade : true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnHover : false
    });
    // slide trang chu san pham 


    $('#slide_sanpham_3').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            }
        ]

    });

    $('.trangchu_sanpham1 .prev').click(function () {
        $('#slide_sanpham_3').slick('slickPrev');
    });

    $('.trangchu_sanpham1 .next').click(function () {
        $('#slide_sanpham_3').slick('slickNext');
    });




    // slide trang chu tin tuc 

    $('#slide_trangchu_tintuc').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            }
        ]

    });

    $('.trangchu_news .prev').click(function () {
        $('#slide_trangchu_tintuc').slick('slickPrev');
    });

    $('.trangchu_news .next').click(function () {
        $('#slide_trangchu_tintuc').slick('slickNext');
    });

    // slide tuyen dung 

    $('#slide_camnang ul').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
        ]
    });

    $('.slide_tuyendung .prev').click(function () {
        $('#slide_camnang ul').slick('slickPrev');
    });

    $('.slide_tuyendung .next').click(function () {
        $('#slide_camnang ul').slick('slickNext');
    });

    // slide tuyen dung 



    $('#slide_tintuc ul').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
        ]
        
    });

    $('#slide_tintuc .prev').click(function () {
        $('#slide_tintuc ul').slick('slickPrev');
    });

    $('#slide_tintuc .next').click(function () {
        $('#slide_tintuc ul').slick('slickNext');
    });


    // slide gioi thieu

    $('#slide_gioithieu').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            }
        ]
    });

    $('.slide_gioithieu .prev').click(function () {
        $('#slide_gioithieu').slick('slickPrev');
    });

    $('.slide_gioithieu .next').click(function () {
        $('#slide_gioithieu').slick('slickNext');
    });


    // slide gioi thieu


    // slide san pham 1

    $('#slide_sanpham_1').slick({
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 8,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 8,
                    infinite: true,
                }
            }
        ]

    });

    $('.sanpham_1 .prev').click(function () {
        $('#slide_sanpham_1').slick('slickPrev');
    });

    $('.sanpham_1 .next').click(function () {
        $('#slide_sanpham_1').slick('slickNext');
    });

    //  slide san pham 1


    //  slide san pham 2

    $('#slide_sanpham_2').slick({
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 8,
        arrows: false,
    });

    $('.sanpham_2 .prev').click(function () {
        $('#slide_sanpham_2').slick('slickPrev');
    });

    $('.sanpham_2 .next').click(function () {
        $('#slide_sanpham_2').slick('slickNext');
    });

    //  slide san pham 2


    // slide chi tiet 

    $('#slide_detail_1').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            }
        ]
    });

    $('.slide_detail .prev').click(function () {
        $('#slide_detail_1').slick('slickPrev');
    });

    $('.slide_detail .next').click(function () {
        $('#slide_detail_1').slick('slickNext');
    });

    // slide chi tiet 




    // selec lien he
    $('.list_daily li').click(function () {
        var data = $(this).attr('data-value');
        $('#input_daily').val(data);
        $('.list_daily').toggleClass('active');
        $('.lienhe_select .drop_lienhe').toggleClass('active');

    });

    $('.lienhe_select .drop_lienhe').click(function () {
        $('.list_daily').toggleClass('active');
        $('.lienhe_select .drop_lienhe').toggleClass('active');
    });

    $('#input_daily').focus(function () {
        $('.list_daily').toggleClass('active');
        $('.lienhe_select .drop_lienhe').toggleClass('active');
    });


    // select dai ly 
    $('.daily_select .drop_daily').click(function () {
        $('.list_daily2').toggleClass('active');
        $('.daily_select .drop_daily').toggleClass('active');
    });

    $('#input_daily2').focus(function () {
        $('.list_daily2').toggleClass('active');
        $('.daily_select .drop_daily').toggleClass('active');
    });

    $('.list_daily2 li').click(function () {
        var data = $(this).attr('data-value');
        $('#input_daily2').val(data);
        $('.list_daily2').toggleClass('active');
        $('.daily_select .drop_daily').toggleClass('active');

        var filter = $(this).attr('data-filter')
        $('.daily_content .item').fadeOut();
        $('.daily_content .item.'+filter).fadeIn();
    });


});