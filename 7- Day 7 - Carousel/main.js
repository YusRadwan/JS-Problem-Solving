console.log(`%%% Carousel %%%`);

// Get Element
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const wrapper = document.querySelector(".car .img-wrap");
const images = document.querySelectorAll(".car .img-wrap img");

//Edge case
if (images.length > 0) {
  // Factory Function / Clousre / Private State
  function createSlider(length, onChange) {
    // Scoped Variable
    let currentIndex = 0;
    let intervalId = null;

    // Function UI
    function show() {
      onChange(currentIndex);
    }

    // Next
    function next() {
      currentIndex = (currentIndex + 1) % length;
      show();
    }

    // previous
    function prev() {
      currentIndex = (currentIndex - 1 + length) % length;
      show();
    }

    // Start Autoplay
    function startAutoPlay(ms = 3000) {
      if (intervalId) clearInterval(intervalId);
      intervalId = setInterval(next, ms);
    }

    // Stop Autoplay
    function stopAutoPlay() {
      if (intervalId) clearInterval(intervalId);
      intervalId = null;
    }

    show();

    return { next, prev, startAutoPlay, stopAutoPlay };
  }

  // UI patterns
  function render(index) {
    wrapper.style.transform = `translateX(-${index * 100}%)`;
  }

  // Create Object From Factory Function
  const slider = createSlider(images.length, render);

  // Event
  next.addEventListener("click", slider.next);
  prev.addEventListener("click", slider.prev);

  // AutoPlay & Pouse on hover
  slider.startAutoPlay();
  wrapper.addEventListener("mouseenter", () => slider.stopAutoPlay());
  wrapper.addEventListener("mouseleave", () => slider.startAutoPlay());
} else {
  console.error("Problem when upload images");
}


