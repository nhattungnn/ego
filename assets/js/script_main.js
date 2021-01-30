jQuery(document).ready(function($) {
	$('.menu-right').click(function(c){
		if($('.side-menu').hasClass('open'))
		{
			$('.close').removeClass('open');
			$('.side-menu').removeClass('open');
		}else{
			$('.side-menu').addClass('open');
		}
		c.stopPropagation();
	});
	$('body').click(function(event) {
		$('.side-menu').removeClass('open');
	});
	var controller = new ScrollMagic.Controller();
	var scene_left = new ScrollMagic.Scene({
		triggerElement: '#three',
	})
	.setClassToggle('#three .box_three_left', 'visible')
	.reverse(true)
	.addTo(controller);
	var scene_right = new ScrollMagic.Scene({
		triggerElement: '#three',
	})
	.setClassToggle('#three .box_three_right', 'visible')
	.reverse(true)
	.addTo(controller);
	var scene6 = new ScrollMagic.Scene({
		triggerElement: '#six',
	})
	.setClassToggle('#six .item', 'visible')
	.reverse(true)
	.addTo(controller);
	var wipeAnimation = new TimelineMax()
	.fromTo("section.panel.two", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone});
	new ScrollMagic.Scene({ 
		triggerElement: "#pinContainer",
		triggerHook: "onLeave",
		duration: "100%"
	})
	.setPin("#pinContainer")
	.setTween(wipeAnimation)
	.addTo(controller);

	var wipeAnimation1 = new TimelineMax()
	.fromTo("section.panel.five", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})
	new ScrollMagic.Scene({
		triggerElement: "#pinContainer1",
		triggerHook: "onLeave",
		duration: "100%"
	})
	.setPin("#pinContainer1")
	.setTween(wipeAnimation1)
	.addTo(controller);

	new Typewriter('.text5 span', {
		strings: ['400 million EU consumers'],
		autoStart: true,
		loop: true,
		delay: 75
	});
	new Typewriter('.text5_mobile span', {
		strings: ['400 million EU consumers'],
		autoStart: true,
		loop: true,
		delay: 75
	});
	var locations = [
	['<h2>PHILIPPINES</h2><p>UB, 111 Paseo de Roxas, Legaspi Village, Makati, 1229 Metro Manila, Philippines</p>', 14.554080914869187, 121.01933623093417, 3],
	['<h2>VIETNAM</h2><p>88 đường 85, Phường Tân Quy, Quận 7, TP. HCM, Viet Nam</p>', 10.739844783222443, 106.70955216851662, 2],
	['<h2>UNITED KINGDOM</h2><p>Unit 9, 3 Warstone Lane, Jewellery Quarter, Hockley, Birmingham, B18 6JE, United Kingdom</p>', 52.48766790951903, -1.909088759422914, 1]
	];
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 2,
		center: new google.maps.LatLng(52.48766790951903, -1.909088759422914),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});
	var infowindow = new google.maps.InfoWindow();
	var marker, i;
	for (i = 0; i < locations.length; i++) {  
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: map,
			icon: 'assets/images/icon_map.png'
		});
		google.maps.event.addListener(marker, 'click', (function(marker, i) {
			return function() {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
			}
		})(marker, i));
	}
	$("form[name='contact']").submit(function() {
		$('.notification').addClass('success').stop();
	});
});