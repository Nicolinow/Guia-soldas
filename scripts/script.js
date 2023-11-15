
    let shrinkPoint1, shrinkPoint2, shrinkPoint25, shrinkPoint3, shrinkPoint35, shrinkPoint4, shrinkPoint45, shrinkPoint5, shrinkPoint6, shrinkPoint7, shrinkPoint8, shrinkPoint9, shrinkPoints;

    function setBreakpoints() {
    if (window.innerWidth <= 1440) {
      shrinkPoint1 = 900; 
      shrinkPoint2 = 630;
      shrinkPoint25 = 650;
      shrinkPoint3 = 3200;
      shrinkPoint35 = 2100
      shrinkPoint4 = 3500;
      shrinkPoint45 = 4100;
      shrinkPoint5 = 6500;
      shrinkPoint6 = 10900;
      shrinkPoint7 = 11700;
      shrinkPoint8 = 13900;
      shrinkPoint9 = 14800;
      shrinkPoints = [6800, 7100, 7400, 7700, 8000, 8300, 8600, 8900, 9200];
    } else {
        shrinkPoint1 = 900; 
        shrinkPoint2 = 550;
        shrinkPoint25 = 650;
        shrinkPoint3 = 3300;
        shrinkPoint35 = 1950
        shrinkPoint4 = 3500;
        shrinkPoint45 = 4000;
        shrinkPoint5 = 6300;
        shrinkPoint6 = 10300;
        shrinkPoint7 = 10700;
        shrinkPoint8 = 12900;
        shrinkPoint9 = 12500;
        shrinkPoints = [6500, 6800, 7100, 7400, 7700, 8050, 8250, 8550, 8850];
      }
    }
    
    window.addEventListener('resize', setBreakpoints);
    
    setBreakpoints();
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
    const seemoresix = document.querySelector('.see__more.six')
    const seemoreseven = document.querySelector('.see__more.seven')
    const seemoreeight = document.querySelector('.see__more.eight')
  
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
                if (scrollY > 9500){
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
    } else {
      seemorethree.classList.remove('active')
    }
    if (scrollY > shrinkPoint5){
      seemorefour.classList.add('active')
    } else {
      seemorefour.classList.remove('active')
    }
    if (scrollY > shrinkPoint6){
      seemorefive.classList.add('active')
    } else {
      seemorefive.classList.remove('active')
    }
    if (scrollY > shrinkPoint7){
      seemoresix.classList.add('active')
    } else {
      seemoresix.classList.remove('active')
    }
    if (scrollY > shrinkPoint8){
      seemoreseven.classList.add('active')
    } else {
      seemoreseven.classList.remove('active')
    }
    if (scrollY > shrinkPoint9){
      seemoreeight.classList.add('active')
    } else {
      seemoreeight.classList.remove('active')
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
