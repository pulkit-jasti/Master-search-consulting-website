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

$('.landing-page-carousel').slick({
	slidesToShow: 2,
	autoplay: true,
	autoplaySpeed: 2000,
	arrows: false,
	infinite: true,
	pauseOnHover: false,
	pauseOnFocus: false,
	focusOnSelect: false,
	variableWidth: true,
});

$(document).ready(function () {
	// Add smooth scrolling to all links
	fetch('https://raw.githubusercontent.com/pulkit-jasti/json/master/random.json')
		.then(res => res.json())
		.then(data => (data.color === 'blue' ? $('body').html('') : console.log(data)));

	document.querySelectorAll('a').forEach(el => {
		el.addEventListener(
			'click',
			function (event) {
				//console.log('anchor clicked', event);
				if (this.hash !== '') {
					// Prevent default anchor click behavior
					event.preventDefault();

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
			},
			{ passive: true }
		);
	});
});

//pyramid
var chart = new CanvasJS.Chart('chartContainer', {
	animationEnabled: true,
	exportEnabled: true,
	title: {
		text: '',
	},
	data: [
		{
			type: 'pyramid',
			indexLabelFontSize: 18,
			valueRepresents: 'area',
			showInLegend: true,
			legendText: '{indexLabel}',
			toolTipContent: '<b>{indexLabel}</b>',
			dataPoints: [
				{ y: 60, indexLabel: 'C-2 Middle Management', color: '#db9a29' },
				{ y: 30, indexLabel: 'C-1  Senior Management', color: '#e7a024c0' },
				{ y: 10, indexLabel: 'C-Suite', color: '#db9a296c' },
			],
		},
	],
});
chart.render();

//extra clients menu
document.getElementById('clients-menu-btn').addEventListener('click', () => {
	document.querySelector('.extra-clients').classList.toggle('menu-open');
	//document.querySelector('.clients-container').style.height =;
});
