var cardsQueue = [];

async function cardShow() {
	await sleep((cardsQueue.length - 1) * 100);
	cardsQueue.shift().classList.add('shop__card__animation__entry');
}

const cardsObserver = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.querySelectorAll(".shop__card").forEach(e => {
				cardsQueue.push(e);
				cardShow();
			});
		}
	});
});
document.querySelectorAll('.shop__line').forEach(e => {
	cardsObserver.observe(e);
});