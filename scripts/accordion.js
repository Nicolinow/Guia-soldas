document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    let currentIndex = 0;
    let animationId;
    let startTime = performance.now();
  
    const imgBefore = document.querySelector(".imgbefore");
    const imgAfter = document.querySelector(".imgafter");
    const mainImg = document.querySelector("#mainImg")
  
    function setActiveCard(index) {
      cards.forEach((card, i) => {
        if (i === index) {
          card.classList.add("active");
        } else {
          card.classList.remove("active");
        }
      });
    }
  
    function updateImagePosition(index) {
        if (index === 0) {
          imgBefore.style.left = "29.9%";
          imgBefore.style.top = "0%";
          imgBefore.style.width = "8.5%";
          imgAfter.style.left = "40.4%";
          imgAfter.style.top = "0%";
          imgAfter.style.width = "29.7%";

        } else if (index === 1) {
          imgBefore.style.left = "29.9%";
          imgBefore.style.top = "0%";
          imgBefore.style.width = "9.9%";
          imgAfter.style.left = "42.3%";
          imgAfter.style.top = "0%";
          imgAfter.style.width = "27.8%";

        } else if (index === 2) {
          imgBefore.style.left = "29.9%";
          imgBefore.style.top = "0%";
          imgBefore.style.width = "11.9%";
          imgAfter.style.left = "46.9%";
          imgAfter.style.top = "0%";
          imgAfter.style.width = "23.2%";

        } else if (index === 3) {
          imgBefore.style.left = "29.9%";
          imgBefore.style.top = "0%";
          imgBefore.style.width = "16.3%";
          imgAfter.style.left = "54.6%";
          imgAfter.style.top = "0%";
          imgAfter.style.width = "15.5%";

        } else if (index === 4) {
        imgBefore.style.left = "29.9%";
        imgBefore.style.top = "0%";
        imgBefore.style.width = "24%";
        imgAfter.style.left = "60.4%";
        imgAfter.style.top = "0%";
        imgAfter.style.width = "9.7%";
        }
    }

    function animateCard() {
      const currentTime = performance.now();
      const elapsedTime = currentTime - startTime;
  
      const currentCard = cards[currentIndex];
      const interval = parseInt(currentCard.getAttribute("data-interval")) || 15000;
  
      setActiveCard(currentIndex);
      updateImagePosition(currentIndex);
  
      if (elapsedTime >= interval) {
        currentIndex = (currentIndex + 1) % cards.length;
        startTime = currentTime;
      }
  
      animationId = requestAnimationFrame(animateCard); 
    }

    cards.forEach((card, index) => {
      card.addEventListener("click", () => {

        cancelAnimationFrame(animationId);
        currentIndex = index; 
        startTime = performance.now(); 
        animateCard(); 
      });
    });

    animateCard();

    mainImg.addEventListener("mouseenter", () => {
        imgBefore.style.opacity = 0;
        imgAfter.style.opacity = 0;
      });
    
      mainImg.addEventListener("mouseleave", () => {
        imgBefore.style.opacity = 1;
        imgAfter.style.opacity = 1;
      });
});
  
const bElements = document.querySelectorAll('.estagio__two b');

bElements.forEach(bElement => {
    bElement.addEventListener('mouseover', () => {
        const parentElement = bElement.parentElement.parentElement;
        if (bElement.classList.contains('b1')) {
            parentElement.querySelector('.img2before').style.opacity = 1;
            parentElement.querySelector('.img2before').style.width = '5.4%';
            parentElement.querySelector('.img2before').style.left = '29.9%';

            parentElement.querySelector('.img2after').style.opacity = 1;
            parentElement.querySelector('.img2after').style.width = '31.6%';
            parentElement.querySelector('.img2after').style.left = '38.47%';
        } else if (bElement.classList.contains('b2')) {
            parentElement.querySelector('.img2before').style.opacity = 1;
            parentElement.querySelector('.img2before').style.width = '7.3%';
            parentElement.querySelector('.img2before').style.left = '29.9%';

            parentElement.querySelector('.img2after').style.opacity = 1;
            parentElement.querySelector('.img2after').style.width = '30.1%';
            parentElement.querySelector('.img2after').style.left = '40%';
        }   
    });

    bElement.addEventListener('mouseout', () => {
        const parentElement = bElement.parentElement.parentElement;
        parentElement.querySelector('.img2before').style.opacity = 0;
        parentElement.querySelector('.img2after').style.opacity = 0;
    });
});

bElements.forEach(bElement => {
  bElement.addEventListener('mouseover', () => {
      const parentElement = bElement.parentElement.parentElement;
      if (bElement.classList.contains('b3')) {
        parentElement.querySelector('.img4before').style.opacity = 1;
        parentElement.querySelector('.img4before').style.width = '23.3%';
        parentElement.querySelector('.img4before').style.left = '29.9%';

        parentElement.querySelector('.img4after').style.opacity = 1;
        parentElement.querySelector('.img4after').style.width = '8.2%';
        parentElement.querySelector('.img4after').style.left = '61.9%';
    }
  });

  bElement.addEventListener('mouseout', () => {
      const parentElement = bElement.parentElement.parentElement;
      parentElement.querySelector('.img4before').style.opacity = 0;
      parentElement.querySelector('.img4after').style.opacity = 0;
  });
});
