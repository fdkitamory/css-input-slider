document.addEventListener( "DOMContentLoaded", function(){
	controlElements = document.querySelectorAll('.slider__switch'); 
	
	function findActiveSlide() {
	  	for(var i=0; i<controlElements.length; i++) {
	    	if (controlElements[i].checked == true ) return i;
	  	}
  		return -1;
  		console.log(i);
	}

	console.log(findActiveSlide());

	function nextSlide () {
		var activeSlide = findActiveSlide();

		if (activeSlide >= controlElements.length - 1) {
			controlElements[0].checked = true;
		} else{
			activeSlide++;
			controlElements[activeSlide].checked = true;
		};
		
	}

	setInterval(
		function() { 
			nextSlide(); 
		}, 2000);

});