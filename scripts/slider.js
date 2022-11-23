// инициализация jquery
$(document).ready(function () {
  // инициализация слайдера
	$('.slider__content').slick({
		// если слайды заканчиваются то все начинается заново
		infinity: true,
		// сколкьо показать
		slidesToShow: 3,
		// по сколько перелистывается
		slidesToScroll: 3,
		// скорость перелистывания при нажатии на точку
		speed: 2500,
		// автоплей
		autoplay: true,
		autoplaySpeed: 1000,
		// автоплей
		// точки
		dots: true,
		arrows: false,
		// точки
		// адаптивность по брейкпоинтам из офф документации. брейкпоитны из containers.scss
		responsive: [
			{
				// 
				breakpoint:  1306,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				// планшеты
				breakpoint: 991.98,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				// мобилки
				breakpoint:  767.98,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				// мобилки поменьше
				breakpoint:  565.98,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});
	$('.slider__content-next').slick({
		//  стартовый слайд
		initialSlide: 4,
		// если слайды заканчиваются то все начинается заново
		infinity: true,
		// сколкьо показать
		slidesToShow: 2,
		// по сколько перелистывается
		slidesToScroll: 2,
		// скорость перелистывания при нажатии на точку
		speed: 2500,
		// автоплей
		autoplay: true,
		autoplaySpeed: 2000,
		// автоплей
		// точки
		dots: true,
		arrows: false,
		// точки
		// адаптивность по брейкпоинтам из офф документации. брейкпоитны из containers.scss
		responsive: [
			// {
			// 	// 
			// 	breakpoint:  1306,
			// 	settings: {
			// 		slidesToShow: 2,
			// 		slidesToScroll: 2,
			// 	}
			// },
			// {
			// 	// планшеты
			// 	breakpoint: 991.98,
			// 	settings: {
			// 		slidesToShow: 2,
			// 		slidesToScroll: 2,
			// 	}
			// },
			{
				// мобилки
				breakpoint:  767.98,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				// мобилки поменьше
				breakpoint:  565.98,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});
});