$('.menu-btn').click(function () {
	$('.menu-btn').toggleClass('active');
	$('.overlay').toggleClass('active');
	$('.menu-container').toggleClass('active');
});

const cursor = curDot();

cursor.over('.line-1', {
	borderColor: 'rgba(255,255,255,.38)',
	broderWidth: 2,
});

//
//
//
// Client carousel

$(document).ready(function () {
	$('.customer-logos').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1000,
		arrows: false,
		dots: false,
		pauseOnHover: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 520,
				settings: {
					slidesToShow: 2,
				},
			},
		],
	});
});
