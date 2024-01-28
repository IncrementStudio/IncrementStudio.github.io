function random(min, max) {
	return Math.random() * (max - min) + min;
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function delayedShow(entries) {
	while ((entry = entries.next().value) != null) {
		main = entry.classList[0];
		entry.classList.add(`${main}__animation__entry`);
		await sleep(100);
	}
}

document.body.style.cssText += `--scrollTop: 0px; --scroll: 0;`;
window.addEventListener('scroll', e => {
	document.body.style.cssText += `--scrollTop: ${this.scrollY}px; --scroll: ${this.scrollY};`
});

const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			main = entry.target.classList[0];
			entry.target.classList.add(`${main}__animation__entry`);
		}
	});
});

// const devises = [
// 	"Ваша мечта - наша цель",
// 	"Ваш успех - наша победа",
// 	"Лучшая студия Minecraft разработки",
// 	"Пора преобразить ваш сервер!",
// 	"привлекательностьВашегоСервера++;",
// 	"Создаём историю вашего сервера"
// ];
// if (window.innerWidth >= 1700) {
// 	document.querySelector(".header__devis").appendChild(new Text(devises[Math.floor(random(0, devises.length))]));
// }