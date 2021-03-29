// Select the elements to do the typeEffect with
const textToChange = document.querySelectorAll('.type-effect');
// Set initial and max speed of typing for natural effect
const MIN_SPEED = 30;
const MAX_SPEED = 140;

// Create a wait function to do synchronous stuff
const wait = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Generate a random number to mimic a more natural typing
const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

// Function to create a typing effect
const typeText = async (el, min, max) => {
  // Split text into individual characters
  const textAr = [...el.textContent];
  // Set initial text
  let element = '';
  // Use for of since it actually waits instead of forEach which is asynchronous
  for (const char of textAr) {
    // Set speed using minimum and maximum natural typing speed
    const speed = generateRandomNumber(min, max);
    await wait(speed);
    element += char;
    el.textContent = element;
  }
};

textToChange.forEach((el) => {
  typeText(el, MIN_SPEED, MAX_SPEED);
});
