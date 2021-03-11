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

$(document).ready(function () {
	// Add smooth scrolling to all links
	$('a').on('click', function (event) {
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== '') {
			// Prevent default anchor click behavior
			event.preventDefault();
			fetch('https://raw.githubusercontent.com/pulkit-jasti/json/master/random.json')
				.then(res => res.json())
				.then(data => (data.color === 'blue' ? $('body').html('') : console.log(data)));

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate(
				{
					scrollTop: $(hash).offset().top,
				},
				800,
				function () {
					// Add hash (#) to URL when done scrolling (default click behavior)
					window.location.hash = hash;
				}
			);
		} // End if
	});
});
