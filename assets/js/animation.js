document.addEventListener("DOMContentLoaded", function () {
  // Animation on scroll
  const animateOnScroll = function () {
    const elements = document.querySelectorAll("[data-animate]");

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const delay = element.dataset.delay || 0;

      if (elementPosition < windowHeight - 100) {
        setTimeout(() => {
          element.classList.add("animate-in");
        }, delay * 1000);
      }
    });
  };

  // Initial check
  animateOnScroll();

  // Check on scroll
  window.addEventListener("scroll", animateOnScroll);

  // Counter animation
  const counters = document.querySelectorAll(".purecounter");
  const speed = 200;

  counters.forEach((counter) => {
    const target = +counter.innerText.replace(/[^0-9]/g, "");
    const count = +counter.innerText.replace(/[^0-9]/g, "");
    const text = counter.innerText.replace(/[0-9]/g, "");

    counter.innerText = "0" + text;

    const updateCount = () => {
      const inc = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + inc) + text;
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target + text;
      }
    };

    // Start counter when element is in view
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        updateCount();
      }
    });

    observer.observe(counter);
  });

  // Button hover effects
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-3px)";
      this.style.boxShadow = "0 10px 20px rgba(241, 196, 15, 0.3)";
    });

    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
      this.style.boxShadow = "none";
    });
  });
  const observer2 = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const animation = el.getAttribute("data-animation") || "fadeInUp";
          el.classList.add("in-view", animation);
          observer.unobserve(el);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  const elements = document.querySelectorAll(".animate-on-scroll");
  elements.forEach((el) => observer2.observe(el));

  const observer3 = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  document
    .querySelectorAll(".animate-on-scroll")
    .forEach((el) => observer3.observe(el));
  const observer4 = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  document
    .querySelectorAll(".animate-on-scroll")
    .forEach((el) => observer4.observe(el));
});
