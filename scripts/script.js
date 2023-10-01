window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const floatingHeader = document.querySelector('.floating-header');
    const shadowcard = document.querySelector('.shadowcard')
    const body = document.querySelector('body')
    const mouse = document.querySelector('#cursor')
    const mouse2 = document.querySelector('#pointer')
    const seemore = document.querySelector('.see__more')
    const seemoretwo = document.querySelector('.see__more.two')
    const seemorethree = document.querySelector('.see__more.three')
    const seemorefour = document.querySelector('.see__more.four')
    const seemorefive = document.querySelector('.see__more.five')

    const shrinkPoint1 = 900; 
    const shrinkPoint2 = 550;
    const shrinkPoint25 = 650;
    const shrinkPoint3 = 3300;
    const shrinkPoint35 = 1950
    const shrinkPoint4 = 3500;
    const shrinkPoint45 = 4000;
    const shrinkPoint5 = 10300;
    const shrinkPoints = [6450, 6750, 7050, 7300, 7500, 7750, 8050, 8350, 8550];
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
    if (scrollY > shrinkPoint25){
        seemore.classList.add('active')
    } else {
        seemore.classList.remove('active')
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
    if (scrollY > shrinkPoint35){
      seemoretwo.classList.add('active')
    } else{
      seemoretwo.classList.remove('active')
    }
    if (scrollY > shrinkPoint45){
      seemorethree.classList.add('active')
    }else {
      seemorethree.classList.remove('active')
    }
    if (scrollY > shrinkPoint5){
      seemorefour.classList.add('active')
    }else {
      seemorefour.classList.remove('active')
    }
    if (scrollY > shrinkPoint5){
      seemorefive.classList.add('active')
    }else {
      seemorefive.classList.remove('active')
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