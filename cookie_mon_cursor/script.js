// This script listens for mousemove. It calculates the angle from the eye to the mouse and moves the pupil along that angle, but keeps it constrained within the white circle.

//If you want Cookie Monster to look excited as you get closer, you can add a tiny bit of CSS jitter to the eyes in your JavaScript when the distance to the mouse is very small.

document.addEventListener('mousemove', (e) => {
  const pupils = document.querySelectorAll('.pupil');
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  pupils.forEach((pupil) => {
    // 1. Get the position of the eye relative to the viewport
    const rect = pupil.getBoundingClientRect();
    const eyeX = rect.left + rect.width / 2;
    const eyeY = rect.top + rect.height / 2;

    // 2. Calculate the distance between mouse and this specific eye
    const distToCenter = Math.sqrt(Math.pow(mouseX - eyeX, 2) + Math.pow(mouseY - eyeY, 2));

    // 3. Add the "Excited" effect (High contrast) when cursor is close
    if (distToCenter < 150) {
      pupil.style.filter = "contrast(2) brightness(1.2)";
    } else {
      pupil.style.filter = "none";
    }

    // 4. Calculate angle for the eye tracking
    const angle = Math.atan2(mouseY - eyeY, mouseX - eyeX);
    
    // 5. Constrain the movement (distance the pupil travels from center)
    const distance = 25; 
    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    // 6. Apply the transformation
    pupil.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
});