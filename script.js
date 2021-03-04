$('.menu-btn').click(function () {
	$('.menu-btn').toggleClass('active');
	$('.overlay').toggleClass('active');
	$('.menu-container').toggleClass('active');
});

$('.client-carousel').slick({
	slidesToShow: 4,
	autoplay: true,
	autoplaySpeed: 1000,
	arrows: false,
	infinite: true,
	pauseOnHover: false,
	pauseOnFocus: false,
	focusOnSelect: false,
	variableWidth: true,
});

console.log('hulle hulle');
