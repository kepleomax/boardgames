const MODERN_SLIDER = new Swiper('.modern-slider', {
	loop: true,
	slidesPerView: 3,
	spaceBetween: 15,
	breakpoints: {
		0: {
			slidesPerView: 2,
		},
		481: {
			slidesPerView: 3,
		},
	},
})
const USSR_SLIDER = new Swiper('.ussr-slider', {
	loop: true,
	slidesPerView: 3,
	spaceBetween: 15,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		481: {
			slidesPerView: 2,
		},
		769: {
			slidesPerView: 3,
		},
	},
})
