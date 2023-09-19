window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const floatingHeader = document.querySelector('.floating-header');
    const shadowcard = document.querySelector('.shadowcard')
    const body = document.querySelector('body')
    const mouse = document.querySelector('#cursor')
    const mouse2 = document.querySelector('#pointer')

    const shrinkPoint1 = 900; 
    const shrinkPoint2 = 550;
    const shrinkPoint3 = 3300;
    const shrinkPoint4 = 3500;
    const shrinkPoints = [6100, 6400, 6700, 6950, 7200, 7400, 7700, 7900, 8100];
    const elements = document.querySelectorAll('[class^="det"]');
    const customClass = 'custom';
    elements.forEach((element, index) => {
        if (scrollY > shrinkPoints[index]) {
          element.classList.add('active');
        }
    });

    let currentIndex = -1; 
    let isScrolling = false;
    
    function updateCustomClass() {
      if (!isScrolling) {
        isScrolling = true;
    
        setTimeout(() => {
          const scrollY = window.scrollY;
          
          elements.forEach((element, index) => {
            if (scrollY > shrinkPoints[index]) {
              currentIndex = index;
            }
          });
    
          elements.forEach((element, index) => {
            if (index === currentIndex) {
              element.classList.add(customClass);
            } else {
              element.classList.remove(customClass);
            }
            if (index === 8){
                if (scrollY > 8650){
                    element.classList.remove(customClass);
                }
            }
          });
    
          isScrolling = false;
        }, 350);
      }
    }
    window.addEventListener('scroll', updateCustomClass);
    
    if (scrollY > shrinkPoint1){
        floatingHeader.classList.add('active');
    } else {
        floatingHeader.classList.remove('active');
    }
    if (scrollY > shrinkPoint2){
        shadowcard.classList.add('active');
    } else {
        shadowcard.classList.remove('active');
    }
    if (scrollY > shrinkPoint3){
        body.classList.add('active')
        floatingHeader.classList.add('active1');
    } else {
        body.classList.remove('active')
        floatingHeader.classList.remove('active1');
    }
    if (scrollY > shrinkPoint4){
        mouse.classList.add('active')
        mouse2.classList.add('active')
    } else{
        mouse.classList.remove('active')
        mouse2.classList.remove('active')
    }
});
function hoverCard(card) {
    const bgColor = card.getAttribute('data-bgcolor');
    const body = document.querySelector('body');
    body.classList.add('card-hovered');
    body.style.background = bgColor;
}

function unhoverCard() {
    const body = document.querySelector('body');
    body.classList.remove('card-hovered');
    body.style.background = ''; 
}

const ELEMENTS = document.querySelectorAll(".HOVER");
const ELEMENTS_SPAN = [];

ELEMENTS.forEach((element, index) => {
	if (!ELEMENTS_SPAN[index])
		ELEMENTS_SPAN[index] = element.querySelector("span");

	element.addEventListener("mouseover", e => {
		ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + "px";
		ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + "px";
	});

	element.addEventListener("mouseout", e => {
		ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + "px";
		ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + "px";
	});
});