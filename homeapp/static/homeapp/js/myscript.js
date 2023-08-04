function animateOnScroll(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateX(0)";
        observer.unobserve(entry.target);
      }
    });
  }

  const horizontalDiv = document.getElementById("horizontalDiv");
  const verticalDiv = document.getElementById("verticalDiv");
  const observerOptions = { root: null, threshold: 0.5 }; // Threshold can be adjusted as per your preference

  const horizontalObserver = new IntersectionObserver(animateOnScroll, observerOptions);
  horizontalObserver.observe(horizontalDiv);

  const verticalObserver = new IntersectionObserver(animateOnScroll, observerOptions);
  verticalObserver.observe(verticalDiv);