$(function() {

	var deg = 0;
	var intervalId = 0;
	var action = false;

	function setPosition(deg) {
		$('.container').css('transform', 'rotateY(' + deg + 'deg)');
	}

	$('.btn.play').click(function() {
		if (!action) {
			intervalId = setInterval(function() {
				deg++;
				if (deg >= 360) {
					deg = 0;
				}
				setPosition(deg);
			}, 17);
			action = true;
		}
	});
	$('.btn.pause').click(function() {
		clearInterval(intervalId);
		action = false;
	});
	$('.btn.stop').click(function() {
		clearInterval(intervalId);
		deg = 0;
		setPosition(deg);
		action = false;
	});
	$('.container').click(function() {
		if (action) {
			clearInterval(intervalId);
			action = false;
		} else {
			intervalId = setInterval(function() {
				deg++;
				if (deg >= 360) {
					deg = 0;
				}
				setPosition(deg);
			}, 17);
			action = true;
		}
	});

});
