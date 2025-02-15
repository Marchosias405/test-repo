// Wait for the DOM to fully load before executing scripts
document.addEventListener("DOMContentLoaded", function () {
  /* ====================================================
     Mobile Navigation Toggle
     - Toggles the "active" class on the navigation menu.
  ==================================================== */
  const mobileMenu = document.getElementById("mobile-menu");
  const navMenu = document.getElementById("nav-menu");
  if (mobileMenu && navMenu) {
    mobileMenu.addEventListener("click", function () {
      navMenu.classList.toggle("active");
    });
    // Close the mobile menu when a nav link is clicked (on mobile)
    const navLinks = document.querySelectorAll("#nav-menu li a");
    navLinks.forEach(link => {
      link.addEventListener("click", function () {
        if (window.innerWidth <= 768) {
          navMenu.classList.remove("active");
        }
      });
    });
  }

  /* ====================================================
     BIO SLIDER (Section 1)
     - Handles dot navigation and prev/next button functionality.
  ==================================================== */
  const bioSlides = document.querySelectorAll(".bio-slide");
  const bioDotsContainer = document.getElementById("bio-dots");
  const bioPrevButton = document.querySelector(".bio-prev");
  const bioNextButton = document.querySelector(".bio-next");
  let currentBioSlideIndex = 0;

  // Create dot navigation for the Bio slider
  bioSlides.forEach((slide, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) {
      dot.classList.add("active");
    }
    dot.addEventListener("click", function () {
      showBioSlide(index);
    });
    bioDotsContainer.appendChild(dot);
  });

  // Function to show a specific bio slide based on index
  function showBioSlide(index) {
    bioSlides.forEach(slide => slide.classList.remove("active"));
    const bioDots = document.querySelectorAll("#bio-dots .dot");
    bioDots.forEach(dot => dot.classList.remove("active"));
    bioSlides[index].classList.add("active");
    bioDots[index].classList.add("active");
    currentBioSlideIndex = index;
  }

  // Prev/Next functionality for Bio slider
  if (bioPrevButton) {
    bioPrevButton.addEventListener("click", function () {
      let newIndex = currentBioSlideIndex - 1;
      if (newIndex < 0) {
        newIndex = bioSlides.length - 1;
      }
      showBioSlide(newIndex);
    });
  }
  if (bioNextButton) {
    bioNextButton.addEventListener("click", function () {
      let newIndex = currentBioSlideIndex + 1;
      if (newIndex >= bioSlides.length) {
        newIndex = 0;
      }
      showBioSlide(newIndex);
    });
  }

  /* ====================================================
     PROJECTS SLIDER (Section 2)
  ==================================================== */
  const projectSlides = document.querySelectorAll(".project-slide");
  let currentProjectSlide = 0;
  const projectPrevButton = document.querySelector(".project-prev");
  const projectNextButton = document.querySelector(".project-next");

  // Function to display a specific project slide
  function showProjectSlide(index) {
    projectSlides.forEach(slide => slide.classList.remove("active"));
    projectSlides[index].classList.add("active");
  }
  if (projectPrevButton) {
    projectPrevButton.addEventListener("click", function () {
      currentProjectSlide = (currentProjectSlide - 1 + projectSlides.length) % projectSlides.length;
      showProjectSlide(currentProjectSlide);
    });
  }
  if (projectNextButton) {
    projectNextButton.addEventListener("click", function () {
      currentProjectSlide = (currentProjectSlide + 1) % projectSlides.length;
      showProjectSlide(currentProjectSlide);
    });
  }

  /* ====================================================
     WORK SLIDER (Section 3)
  ==================================================== */
  const workSlides = document.querySelectorAll(".work-slide");
  let currentWorkSlide = 0;
  const workPrevButton = document.querySelector(".work-prev");
  const workNextButton = document.querySelector(".work-next");

  // Function to display a specific work slide
  function showWorkSlide(index) {
    workSlides.forEach(slide => slide.classList.remove("active"));
    workSlides[index].classList.add("active");
  }
  if (workPrevButton) {
    workPrevButton.addEventListener("click", function () {
      currentWorkSlide = (currentWorkSlide - 1 + workSlides.length) % workSlides.length;
      showWorkSlide(currentWorkSlide);
    });
  }
  if (workNextButton) {
    workNextButton.addEventListener("click", function () {
      currentWorkSlide = (currentWorkSlide + 1) % workSlides.length;
      showWorkSlide(currentWorkSlide);
    });
  }

  /* ====================================================
     VOLUNTEERING SLIDER (Section 4)
  ==================================================== */
  const volSlides = document.querySelectorAll(".vol-slide");
  let currentVolSlide = 0;
  const volPrevButton = document.querySelector(".vol-prev");
  const volNextButton = document.querySelector(".vol-next");

  // Function to display a specific volunteering slide
  function showVolSlide(index) {
    volSlides.forEach(slide => slide.classList.remove("active"));
    volSlides[index].classList.add("active");
  }
  if (volPrevButton) {
    volPrevButton.addEventListener("click", function () {
      currentVolSlide = (currentVolSlide - 1 + volSlides.length) % volSlides.length;
      showVolSlide(currentVolSlide);
    });
  }
  if (volNextButton) {
    volNextButton.addEventListener("click", function () {
      currentVolSlide = (currentVolSlide + 1) % volSlides.length;
      showVolSlide(currentVolSlide);
    });
  }

  /* ====================================================
     EDUCATION SLIDER (Section 5)
  ==================================================== */
  const eduSlides = document.querySelectorAll(".edu-slide");
  let currentEduSlide = 0;

  // Function to display a specific education slide
  function showEduSlide(index) {
    eduSlides.forEach(slide => slide.classList.remove("active"));
    eduSlides[index].classList.add("active");
  }
  // Auto-rotate education slides every 5 seconds
  setInterval(() => {
    currentEduSlide = (currentEduSlide + 1) % eduSlides.length;
    showEduSlide(currentEduSlide);
  }, 5000);

  /* ====================================================
     GALLERY SLIDER (Section 6)
  ==================================================== */
  const gallerySlides = document.querySelectorAll(".gallery-slide");
  const galleryPrevButton = document.querySelector(".gallery-prev");
  const galleryNextButton = document.querySelector(".gallery-next");
  let currentGalleryIndex = 0;

  // Function to update gallery slides display and assign classes (left, active, right)
  function updateGallery() {
    // Hide all slides and remove any added classes
    gallerySlides.forEach(slide => {
      slide.classList.remove("left", "active", "right");
      slide.style.display = "none";
    });
    // Calculate indices for left, center, and right slides with wrap-around
    const leftIndex = (currentGalleryIndex - 1 + gallerySlides.length) % gallerySlides.length;
    const rightIndex = (currentGalleryIndex + 1) % gallerySlides.length;
    // Set classes and display styles
    gallerySlides[leftIndex].classList.add("left");
    gallerySlides[leftIndex].style.display = "block";
    gallerySlides[currentGalleryIndex].classList.add("active");
    gallerySlides[currentGalleryIndex].style.display = "block";
    gallerySlides[rightIndex].classList.add("right");
    gallerySlides[rightIndex].style.display = "block";
  }
  if (galleryPrevButton) {
    galleryPrevButton.addEventListener("click", function () {
      currentGalleryIndex = (currentGalleryIndex - 1 + gallerySlides.length) % gallerySlides.length;
      updateGallery();
    });
  }
  if (galleryNextButton) {
    galleryNextButton.addEventListener("click", function () {
      currentGalleryIndex = (currentGalleryIndex + 1) % gallerySlides.length;
      updateGallery();
    });
  }
  updateGallery();

  /* ====================================================
     ROTATING BEARING: Ferris Wheel–Style Animation (Logos Remain Upright)
  ==================================================== */
  const bearing = document.querySelector(".rotating-bearing");
  const wrappers = bearing.querySelectorAll(".bearing-logo-wrapper");
  const totalLogos = wrappers.length;
  // Calculate the radius by subtracting half the logo's size (assumed 30px for a 60px logo)
  const radius = bearing.offsetWidth / 2 - 30;
  
  let startTime = null;
  function animate(time) {
    if (!startTime) startTime = time;
    const elapsed = time - startTime;
    // Full rotation every 8 seconds
    const rotationAngle = (elapsed / 8000) * 360; // in degrees

    wrappers.forEach((wrapper, index) => {
      // Calculate the base angle for even distribution
      const baseAngle = (360 / totalLogos) * index;
      // Current angle includes the animation rotation
      const currentAngle = baseAngle + rotationAngle;
      // Position the wrapper at the center, translate it outward, and counter-rotate it exactly
      wrapper.style.left = "50%";
      wrapper.style.top = "50%";
      wrapper.style.transform = `rotate(${currentAngle}deg) translate(${radius}px) rotate(-${currentAngle}deg)`;
    });
    
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
});
