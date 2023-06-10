const close = document.querySelector('.close');
const hamburger = document.querySelector('.hamburger-menu');
const header = document.getElementById('header');
const container = document.querySelector('.container');

hamburger.addEventListener('click', () => {
	header.classList.add('active');
	container.classList.add('rotate');
});
close.addEventListener('click', () => {
	header.classList.remove('active');
	container.classList.remove('rotate');
});
