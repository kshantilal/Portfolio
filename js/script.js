$(document).ready(function(){
	
	var mySwiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		slidesPerView: 1,
		paginationClickable: true, //If you click on the dots they will go to that slde
		spaceBetween: 30,
		loop: true, //Loops over the slider
		speed: 1000,
		autoplay: 3000,
		easein: 1,
		autoplayDisableOnInteraction: false, //When user interacts with the slider it continues
		// Cube Effect on Slideshow
		// effect: "cube", 
		// 	  cube:	{
		// 	  slideShadows: true,
		// 	  shadow: true,
		// 	  shadowOffset: 20,
		// 	  shadowScale: 0.94
		// 	}

		

	});
	
	var trigger = new ScrollTrigger();



	var	lightBox = $("#Lightbox");
	function openLightBox(){
		lightBox = $("#Lightbox");
		$(".single-image").click(function(){
			lightBox.css('display', 'block');

		})

	};

	function closeLightBox(){
		$(".close-button").click(function(){
			lightBox.css('display', 'none');	


		});


	};

	openLightBox();
	closeLightBox();



	// var Images = $(".single-image");
	// for (var i = 0; i < Images.length; i++) {
	// 	Images[i].onclick = function(){
	// 	var image = this.getElementsByTagName('img')[0];
	// 	$("#Lightbox-Image").src = image.src;


	// 	}


	// }



});

