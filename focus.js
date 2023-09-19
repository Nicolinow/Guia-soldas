const items = document.querySelectorAll('.item');
const descriptions = document.querySelectorAll('.description');
let currentIndex = 0;
let intervalId;

function focusItem(index) {
    const currentItem = items[currentIndex];
    const nextItem = items[index];
    const currentDescription = descriptions[currentIndex];
    const nextDescription = descriptions[index];

    currentItem.classList.remove('focused');
    currentDescription.style.opacity = '0';
    currentDescription.style.transform = 'translateY(20px) translateX(20px)';
    
    nextItem.classList.add('focused');
    nextDescription.style.opacity = '1';
    nextDescription.style.transform = 'translate(0)';
    currentIndex = index;

    clearInterval(intervalId);
    intervalId = setInterval(() => {
        const nextIndex = (currentIndex + 1) % items.length;
        focusItem(nextIndex);
    }, 7000);
}

items.forEach((item, index) => {
    item.addEventListener('click', () => {
        focusItem(index);
    });
});

focusItem(currentIndex);
