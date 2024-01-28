async function mainShow() {
	delayedShow(document.querySelectorAll('.main__title').values());
	await sleep(document.querySelectorAll('.main__title').length * 100);
	delayedShow(document.querySelectorAll('.main__subtitle').values());
	await sleep(document.querySelectorAll('.main__subtitle').length * 100);
	delayedShow(document.querySelectorAll('.main__link').values());
}

const buttonsObserver = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			delayedShow(entry.target.querySelectorAll('.menu__button').values());
		}
	});
});
document.querySelectorAll('.menu__button__grid').forEach(e => {
	buttonsObserver.observe(e);
});
const teamObserver = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			delayedShow(entry.target.querySelectorAll('.menu__team__card').values());
		}
	});
});
document.querySelectorAll('.menu__team__grid').forEach(e => {
	teamObserver.observe(e);
});
const mainObserver = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			mainShow();
		}
	});
});
document.querySelectorAll('.main').forEach(e => {
	mainObserver.observe(e);
});