

   // slick
// $(".center-logo").slick({
// 	loop:true,
// 	spaceBetween: 40,
// 	dots: false,
// 	slidesToShow: 5,
// 	arrows: false,
// 	// autoplay: true,
// 	autoplaySpeed: 1000,
// 	// centerMode: true,
// 	// centerPadding: '20px',
// 	// variableWidth: true,
// 	responsive: [
// 		{
// 			breakpoint: 769,
// 			settings: {
// 				slidesToShow: 4,
// 				infinite: true,
// 				dots: false,
// 				centerPadding:'0px',
// 				centerMode:true
// 			}
// 		},
// 		{
// 			breakpoint: 541,
// 			settings: {
// 				slidesToShow: 3,
// 				infinite: true,
// 				dots: false,
// 				centerPadding:'0px',
// 				centerMode:true
// 			}
// 		},
// 	]

// })

$(".red-car").slick({
	dots: false,
	slidesToShow: 1,
	// arrows: true,
	// autoplay: true,
	autoplaySpeed: 1500,
	prevArrow: "<button type='button' class='pull-left my-prev'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
	nextArrow: "<button type='button' class='pull-right my-next'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
});

$(document).ready(function(){
	$(".fa-bars").click(function(){
		$(".navbar-collapse").fadeToggle();
	})
});

$(".swiper-wrapper").slick({
	loop:true,
	// spaceBetween: 20,
	slidesToScroll: 1,
	dots: false,
	slidesToShow: 5,
	arrows: false,
	autoplay: true,
	// autoplaySpeed: 1500,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 5,
				// slidesToScroll: 3,
				infinite: true,
				dots: false,
				centerPadding:'0px',
				centerMode:true
			}
		},
		{
			breakpoint: 540,
			settings: {
				slidesToShow: 3,
				// slidesToScroll: 3,
				infinite: true,
				dots: false,
				centerPadding:'0px',
				centerMode:true
			}
		},
	]
});

