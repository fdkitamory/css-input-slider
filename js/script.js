document.addEventListener( "DOMContentLoaded", function(){

	var controlElements = document.querySelectorAll('.slider__switch'),
		sliderSettingsInterval = (slider.customSettings == null) ? 3000 : slider.setTimeInterval;

		// if (slider.setTimeInterval == null){
		// 	console.log('Настройки не прописаны');
		// 	sliderSettingsInterval = 2000
		// } else {
		// 	sliderSettingsInterval = slider.setTimeInterval
		// }

	function findActiveSlide() {
	  	for(var i=0; i<controlElements.length; i++) {
	    	if (controlElements[i].checked == true ) return i;
	  	}
	}

	function slideRotation () {
		var activeSlide = findActiveSlide();
		if (activeSlide >= controlElements.length - 1) {
			controlElements[0].checked = true;
		} else{
			activeSlide++;
			controlElements[activeSlide].checked = true;
		};
	}

	if (slider.rotation == null || slider.rotation == true) {
		setInterval(function() { slideRotation(); }, sliderSettingsInterval);
	}
});