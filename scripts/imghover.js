const bElements = document.querySelectorAll('.parametros b');

bElements.forEach(bElement => {
    bElement.addEventListener('mouseover', () => {
        const parentElement = bElement.parentElement.parentElement;
        if (bElement.classList.contains('b1')) {
            parentElement.querySelector('.imgbefore').style.opacity = 1;
            parentElement.querySelector('.imgbefore').style.width = '1.8%';
            parentElement.querySelector('.imgbefore').style.left = '24.9%';

            parentElement.querySelector('.imgafter').style.opacity = 1;
            parentElement.querySelector('.imgafter').style.width = '37.5%';
            parentElement.querySelector('.imgafter').style.left = '37.6%';
        } else if (bElement.classList.contains('b2')) {
            parentElement.querySelector('.imgbefore').style.opacity = 1;
            parentElement.querySelector('.imgbefore').style.width = '12.5%';
            parentElement.querySelector('.imgbefore').style.left = '24.9%';

            parentElement.querySelector('.imgafter').style.opacity = 1;
            parentElement.querySelector('.imgafter').style.width = '25.1%';
            parentElement.querySelector('.imgafter').style.left = '50%';
        } else if (bElement.classList.contains('b3')) {
            parentElement.querySelector('.imgbefore').style.opacity = 1;
            parentElement.querySelector('.imgbefore').style.width = '24.8%';
            parentElement.querySelector('.imgbefore').style.left = '24.9%';

            parentElement.querySelector('.imgafter').style.opacity = 1;
            parentElement.querySelector('.imgafter').style.width = '21.8%';
            parentElement.querySelector('.imgafter').style.left = '53.3%';
        } else if (bElement.classList.contains('b4')) {
            parentElement.querySelector('.imgbefore').style.opacity = 1;
            parentElement.querySelector('.imgbefore').style.width = '28.1%';
            parentElement.querySelector('.imgbefore').style.left = '24.9%';

            parentElement.querySelector('.imgafter').style.opacity = 1;
            parentElement.querySelector('.imgafter').style.width = '17.6%';
            parentElement.querySelector('.imgafter').style.left = '57.5%';
        } 
    });

    bElement.addEventListener('mouseout', () => {
        const parentElement = bElement.parentElement.parentElement;
        parentElement.querySelector('.imgbefore').style.opacity = 0;
        parentElement.querySelector('.imgafter').style.opacity = 0;
    });
});