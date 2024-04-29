const images = [
	'./assets/slide1.jpg',
	'./assets/slide2.jpg',
	'./assets/slide3.jpg',
	'./assets/slide4.png',
];
const slideTexts = [
	"Impressions tous formats <span>en boutique et en ligne</span>",
    "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
    "Grand choix de couleurs <span>de CMJN aux pantones</span>",
    "Autocollants <span>avec découpe laser sur mesure</span>"
];
let currentSlideIndex = 0;


function slideToLeft() {
currentSlideIndex--;
if(currentSlideIndex < 0) {
 currentSlideIndex = images.length - 1;
}
console.log('fleche gauche a ete appuyee');

updateSlider();
updateDots();
}

function slideToRight() {
currentSlideIndex++;
if(currentSlideIndex >= images.length) {
 currentSlideIndex = 0;
}
console.log('fleche droite a ete appuyee');
updateSlider();
updateDots();
}

function updateSlider() {
    const mainImage = document.getElementById("bannerImg");
    mainImage.src = images[currentSlideIndex];

    const slideTextElement = document.getElementById("slideText");
    slideTextElement.innerHTML = slideTexts[currentSlideIndex];
}


function updateDots() {
const dots = document.querySelectorAll('.dot');
dots.forEach((dot, index) => {
	if (index === currentSlideIndex) {
		dot.checked = true;
		dot.classList.add('active'); 
	} else {
		dot.checked = false;
		dot.classList.remove('active'); 
	}
});
}


updateDots();

