const custom_cursor = document.getElementById('cursor');
const pointer = document.getElementById('pointer');

const cursorInitialWidth = custom_cursor.offsetWidth;
const cursorInitialHeight = custom_cursor.offsetHeight;

const animateCursor = (event, interacting) => {
  let cursorX = `calc(${event.clientX}px - 1.125rem)`,
      cursorY = `calc(${event.clientY}px - 1.125rem)`;
  
  let pointerX = `calc(${event.clientX}px - 0.25rem)`,
      pointerY = `calc(${event.clientY}px - 0.25rem)`;
  
  pointer.style.transform = `translate(${pointerX}, ${pointerY})`;
  
  const radius = interacting ? '40%' : '50%' ;  
  const scale = interacting ? '0.8em' : '1px';
  const background = interacting ? '#00356625' : '#1a00af00';

  if (interacting) {
      cursorX = `calc(${event.clientX}px - 1.925rem)`,
      cursorY = `calc(${event.clientY}px - 1.925rem)`;
  };

  const cursor_keyframes = {
    transform: `translate(${cursorX}, ${cursorY})`,
    borderRadius: radius,
    padding: scale,
    backgroundColor: background,
  };
  
  custom_cursor.animate(cursor_keyframes, { 
    duration: 700, 
    fill: 'forwards' 
  });
};

window.onmousemove = (event) => {
  const interactable = event.target.closest('.interactable'),
        interacting = (interactable !== null);
  
  animateCursor(event, interacting, interactable);
};
