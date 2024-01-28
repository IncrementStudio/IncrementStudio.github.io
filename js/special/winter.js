const element = document.body;
for (var i = 0; i < 25; i++) {
	var snow = document.createElement("div");
	snow.classList.add('snow');
	snow.style.backgroundImage = `url('../../img/winter/snow${Math.floor(random(1, 4))}.png')`;
	element.insertBefore(snow, element.firstChild);
}

// var snowman = document.createElement("div");
// snowman.classList.add('snowman');
// element.insertBefore(snowman, element.firstChild);