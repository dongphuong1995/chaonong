$(function(){
    $.fn.heightLine = function( options ){
		 var container = $( this );			
		 function setHeight() {
			var winWlh = $(window).width();
			var maxHeight = 0;
			column = $( container );
			if(winWlh <= 0){
				column.removeAttr( 'style' );		
			}else{
				column.css( 'height', 'auto' );
				column.each( function() {
					if( $( this ).height() > maxHeight ) {
					maxHeight = $( this ).height();
				}
				});
				column.height( maxHeight );
			}
		}
		setHeight();		
		$(window).resize( function() {
			setHeight();
		});
	};
});
    
$(window).load(function(){
    $('.thesame_height').heightLine();
})






$('#slide_camnang ul').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
});

$('#slide_tintuc ul').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
});

$('#slide_gioithieu').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
});

$('.slide_gioithieu .prev').click(function(){
    $('#slide_gioithieu').slick('slickPrev');
});

$('.slide_gioithieu .next').click(function(){
    $('#slide_gioithieu').slick('slickNext');
});


$('#slide_sanpham_1').slick({
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 8,
    arrows: false,
    adaptiveHeight :true,
});

$('.sanpham_1 .prev').click(function(){
    $('#slide_sanpham_1').slick('slickPrev');
});

$('.sanpham_1 .next').click(function(){
    $('#slide_sanpham_1').slick('slickNext');
});


$('#slide_sanpham_2').slick({
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 8,
    arrows: false,
});

$('.sanpham_2 .prev').click(function(){
    $('#slide_sanpham_2').slick('slickPrev');
});

$('.sanpham_2 .next').click(function(){
    $('#slide_sanpham_2').slick('slickNext');
});


$('#slide_detail_1').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
});

$('.slide_detail .prev').click(function(){
    $('#slide_detail_1').slick('slickPrev');
});

$('.slide_detail .next').click(function(){
    $('#slide_detail_1').slick('slickNext');
});




// selec dai ly 
$('.list_daily li').click(function(){
    var data = $(this).attr('data-value');
    $('#input_daily').val(data);
    $('.list_daily').toggleClass('active');
    $('.lienhe_select .drop_lienhe').toggleClass('active');

});

$('.lienhe_select .drop_lienhe').click(function(){
    $('.list_daily').toggleClass('active');
    $('.lienhe_select .drop_lienhe').toggleClass('active');
});

$('#input_daily').focus(function(){
    $('.list_daily').toggleClass('active');
    $('.lienhe_select .drop_lienhe').toggleClass('active');
});