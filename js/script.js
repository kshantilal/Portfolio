$(document).ready(function(){
	

	// Scroll on click
	$("#down-arrow").click(function(){
		$("html, body").animate({
			scrollTop: $(".cover-container").offset().top + $(".cover-container")[0].scrollHeight
		},
		1500);		

	});


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

	function lightBoxModal() {
		//----Lightbox----//
		var	lightBox = $("#Lightbox");
		var Images = $(".single-image");

		Images.click(function(){
			lightBox.fadeIn("fast");

			for (var i = 0; i < Images.length; i++) {
				var image = this.getElementsByTagName('img')[0];
				document.getElementById('Lightbox-Image').src = image.src;
				// console.log(Images[i]);

			}
			$('body').addClass('preventscroll');

		});


		$(".close-button").click(function(){
			$('body').removeClass('preventscroll');
			lightBox.fadeOut("fast");

		});

		$("#Lightbox").click(function(){
			lightBox.fadeOut("fast");

		});

	}

	lightBoxModal();
	




});

