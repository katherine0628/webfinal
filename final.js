const $ = document.querySelector.bind(document);
const k = $(".k");
const i = $(".i");
const ck = $(".ck");
const s = $(".s");

function transformLetters() {
  const scroll = window.scrollY;

  // console.log({AmountScrolled: scroll});

  k.style.transform = `translate3d(0, ${scroll*1.4}px, 0) rotateY(${-scroll*0.03}deg)`;

  i.style.transform = `translate3d(${-scroll*0.45}px, ${scroll*0.95}px, 0) rotate(${-scroll*0.1}deg)`;

  ck.style.transform = `translate3d(${scroll*0.65}px, ${scroll*1.05}px, 0) rotate(${scroll*0.2}deg)`;

  s.style.transform = `translate3d(0, ${scroll*0.5}px, 0) rotateY(${scroll*0.05}deg)`;

}

window.addEventListener("scroll", transformLetters);


function debounce(func, wait = 10, immediate = true) {
	var timeout;
	return function() {
		var context = this,
			args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
	sliderImages.forEach(sliderImage => {
		// halfway through the image
		const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
		// bottom of the image
		const imageBottom = sliderImage.offsetTop + sliderImage.height;
		const isHalfShown = slideInAt > sliderImage.offsetTop;
		const isNotScrolledPast = window.scrollY < imageBottom;
		if (isHalfShown && isNotScrolledPast) {
			sliderImage.classList.add('active');
		} else {
			sliderImage.classList.remove('active');
		}
    console.log(slideInAt);
	});
}

window.addEventListener('scroll', debounce(checkSlide));
