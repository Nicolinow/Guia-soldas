function updateBackgroundClasses(swiper) {
  const backgroundSection = document.querySelector('.swiper__background');
  const classList = [
      'background-1',
      'background-2',
      'background-3',
      'background-4',
      'background-5',
      'background-6',
      'background-7',
      'background-8',
      'background-9',
      'background-10',
      'background-11'
  ];

  backgroundSection.classList.remove(...classList);
  const currentIndex = swiper.realIndex;
  
  if (currentIndex >= 0 && currentIndex < classList.length) {
      backgroundSection.classList.add(classList[currentIndex]);
  }
}

const updateBackgroundEvent = new Event('updateBackground');
const swiper = new Swiper('.swiper',{
    spaceBetween: 20,
    centeredSlides: true,
    speed: 800,
    loop: true,
    slidesPerView: 'auto',
    effect:'coverflow',
    initialslide: 1,
    coverflowEffect: {
        rotate: 30,
        stretch: 10,
        depth: 200,
        slideShadows: false,
    },
    on: {
        init: function () {
          updateBackgroundClasses(this);
        },
        slideChange: function () {
          updateBackgroundClasses(this); 
        },
        realIndexChange: (swiper) => {
            slideChange: () => {
                const previousSlide = document.querySelector('.swiper-slide.swiper-slide-prev');
                const nextSlide = document.querySelector('.swiper-slide.swiper-slide-next');
                const activeSlide = document.querySelector('.swiper-slide.swiper-slide-active');
               
                document.querySelectorAll('.swiper-slide').forEach(slide => {
                  slide.classList.remove('active-slide');
                });
               
                activeSlide.classList.add('active-slide');

                if (nextSlide === previousSlide) {
                  previousSlide.classList.add('active-slide');
                }

            };
        },
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        dynamicBullets: true,
        dynamicMainBullets: 1,
        el: '.swiper-pagination',
        type: 'bullets',
    },
    keyboard:{
        enabled: true,
        onlyInViewport: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});