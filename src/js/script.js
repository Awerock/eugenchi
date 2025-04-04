document.addEventListener('DOMContentLoaded', () => {
	const main = document.querySelector('.main')

	function handleMouseMove(event) {
		const { clientX, clientY } = event
		const { innerWidth, innerHeight } = window

		const xOffset = (clientX / innerWidth - 0.5) * 20
		const yOffset = (clientY / innerHeight - 0.5) * 20

		main.style.backgroundPosition = `calc(50% + ${xOffset}px) calc(50% + ${yOffset}px)`
	}

	function checkScreenSize() {
		if (window.innerWidth > 1024) {
			document.addEventListener('mousemove', handleMouseMove)
		} else {
			document.removeEventListener('mousemove', handleMouseMove)
		}
	}

	checkScreenSize()
	window.addEventListener('resize', checkScreenSize)
})

document.querySelector('#case-link').addEventListener('mouseenter', () => {
	document.querySelector('.header__nav').classList.add('hovered-case')
	document.querySelector('#case-link').classList.add('hovered-case')
})
document.querySelector('#case-link').addEventListener('mouseleave', () => {
	document.querySelector('.header__nav').classList.remove('hovered-case')
	document.querySelector('#case-link').classList.remove('hovered-case')
})

document.querySelector('#contact-link').addEventListener('mouseenter', () => {
	document.querySelector('.header__nav').classList.add('hovered-contact')
	document.querySelector('#contact-link').classList.add('hovered-contact')
})
document.querySelector('#contact-link').addEventListener('mouseleave', () => {
	document.querySelector('.header__nav').classList.remove('hovered-contact')
	document.querySelector('#contact-link').classList.remove('hovered-contact')
})

document.querySelector('#youtube-link').addEventListener('mouseenter', () => {
	document.querySelector('.footer__nav').classList.add('hovered-youtube')
	document.querySelector('#youtube-link').classList.add('hovered-youtube')
})
document.querySelector('#youtube-link').addEventListener('mouseleave', () => {
	document.querySelector('.footer__nav').classList.remove('hovered-youtube')
	document.querySelector('#youtube-link').classList.remove('hovered-youtube')
})

document.querySelector('#instagram-link').addEventListener('mouseenter', () => {
	document.querySelector('.footer__nav').classList.add('hovered-instagram')
	document.querySelector('#instagram-link').classList.add('hovered-instagram')
})
document.querySelector('#instagram-link').addEventListener('mouseleave', () => {
	document.querySelector('.footer__nav').classList.remove('hovered-instagram')
	document
		.querySelector('#instagram-link')
		.classList.remove('hovered-instagram')
})

document.querySelector('#facebook-link').addEventListener('mouseenter', () => {
	document.querySelector('.footer__nav').classList.add('hovered-facebook')
	document.querySelector('#facebook-link').classList.add('hovered-facebook')
})
document.querySelector('#facebook-link').addEventListener('mouseleave', () => {
	document.querySelector('.footer__nav').classList.remove('hovered-facebook')
	document.querySelector('#facebook-link').classList.remove('hovered-facebook')
})

document.querySelector('#github-link').addEventListener('mouseenter', () => {
	document.querySelector('.footer__nav').classList.add('hovered-github')
	document.querySelector('#github-link').classList.add('hovered-github')
})
document.querySelector('#github-link').addEventListener('mouseleave', () => {
	document.querySelector('.footer__nav').classList.remove('hovered-github')
	document.querySelector('#github-link').classList.remove('hovered-github')
})

document.querySelector('#vk-link').addEventListener('mouseenter', () => {
	document.querySelector('.footer__nav').classList.add('hovered-vk')
	document.querySelector('#vk-link').classList.add('hovered-vk')
})
document.querySelector('#vk-link').addEventListener('mouseleave', () => {
	document.querySelector('.footer__nav').classList.remove('hovered-vk')
	document.querySelector('#vk-link').classList.remove('hovered-vk')
})

const aboutLink = document.querySelector('#about-link')
const aboutSection = document.querySelector('.about')
const headerNav = document.querySelector('.header__nav')
const mainName = document.querySelector('.name') // Элемент, который должен получать класс .open

aboutLink.addEventListener('mouseenter', () => {
	headerNav.classList.add('hovered-about')
	aboutLink.classList.add('hovered-about')
})

aboutLink.addEventListener('mouseleave', () => {
	if (!aboutSection.classList.contains('open')) {
		headerNav.classList.remove('hovered-about')
		aboutLink.classList.remove('hovered-about')
	}
})

aboutLink.addEventListener('click', event => {
	// Предотвращаем распространение события, чтобы не сработал клик по document
	event.stopPropagation()
	const isOpen = aboutSection.classList.toggle('open')

	if (isOpen) {
		headerNav.classList.add('hovered-about')
		aboutLink.classList.add('hovered-about')
		mainName.classList.add('open') // Добавляем класс .open к .name
	} else {
		headerNav.classList.remove('hovered-about')
		aboutLink.classList.remove('hovered-about')
		mainName.classList.remove('open') // Убираем класс .open с .name
	}
})

// Обработчик для клика вне окна .about
document.addEventListener('click', event => {
	// Проверяем, что клик был не внутри .about и не по #about-link
	if (
		!aboutSection.contains(event.target) &&
		!aboutLink.contains(event.target)
	) {
		// Закрываем .about, если оно открыто
		if (aboutSection.classList.contains('open')) {
			aboutSection.classList.remove('open')
			headerNav.classList.remove('hovered-about')
			aboutLink.classList.remove('hovered-about')
			mainName.classList.remove('open') // Убираем класс .open с .name
		}
	}
})

/* 
const images = [
	'/img/main.jpg',
	'/img/main1.jpg',
	'/img/main2.jpg',
	'/img/main3.jpg',
]

let currentIndex = 0

function changeBackgroundImage() {
	const main = document.querySelector('.main')
	currentIndex = (currentIndex + 1) % images.length
	main.style.backgroundImage = `url(${images[currentIndex]})`
}

setInterval(changeBackgroundImage, 20000) // Change image every 20 seconds */
