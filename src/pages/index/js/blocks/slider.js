import Swiper from 'swiper'
import {Navigation} from 'swiper/modules'

export function slider() {
	const swiperLicense = new Swiper('#license-slider', {
		modules: [Navigation],
		speed: 500,
		effect: 'coverflow',
		slidesPerView: '1',
		spaceBetween: 30,
		grabCursor: true,
		centeredSlides: true,
		rewind: true,

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		breakpoints: {
			1200: {
				slidesPerView: '1',
			},
			768: {
				slidesPerView: '1',
			},
		},
	})

	// Функция для установки значения num в зависимости от размера экрана
	function setNum() {
		if (window.innerWidth > 767) {
			swiperLicense.slideTo(1)
		} else {
			swiperLicense.slideTo(0)
		}
	}

	setNum()

	// Вызываем функцию при загрузке страницы
	window.addEventListener('load', setNum)
	// Вызываем функцию при изменении размера окна
	window.addEventListener('resize', setNum)
}
