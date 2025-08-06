// 1. Get the DOM component
const component = document.querySelector('.look-at-me');

// 2. Add a mousemove event listener to the entire document
document.addEventListener('mousemove', (event) => {
  // 3. Get the component's position and dimensions
  const rect = component.getBoundingClientRect();
  const componentX = rect.left + rect.width / 2;
  const componentY = rect.top + rect.height / 2;

  // 4. Get the mouse coordinates
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  // 5. Calculate the angle using atan2
  // atan2(y, x) returns the angle in radians
  const deltaX = mouseX - componentX;
  const deltaY = mouseY - componentY;
  const angleRad = Math.atan2(deltaY, deltaX);

  // 6. Convert radians to degrees for CSS transform
  // CSS transform: rotate() expects degrees
  const angleDeg = angleRad * 180 / Math.PI;

  // 7. Apply the rotation to the component's style
  component.style.transform = `rotate(${angleDeg}deg)`;
});

// getBoundingClientRect(): This method returns the size of an element and its position relative to the viewport. We use it to find the component's top and left coordinates.
// componentX and componentY: We calculate the center of the component by adding half its width and height to its left and top coordinates, respectively.
// mouseX and mouseY: The event.clientX and event.clientY properties give us the current mouse position in the viewport.
// Math.atan2(y, x): This is the key function. It calculates the angle in radians between the positive x-axis and the point (x, y). The order of arguments (y then x) is crucial. We pass it the difference between the mouse and component coordinates to find the angle.
// Radians to Degrees: CSS transform: rotate() requires a value in degrees. The conversion formula is radians * 180 / π. We use Math.PI for the value of pi.
// component.style.transform = ...: Finally, we set the transform property of the component to rotate(${angleDeg}deg). This dynamically applies the rotation.