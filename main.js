document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.getElementById("mobile-menu");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const backToTop = document.getElementById("back-to-top");

  mobileMenu.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navMenu.classList.remove("active");
      mobileMenu.classList.remove("active");

      navLinks.forEach((navLink) => navLink.classList.remove("active"));
      this.classList.add("active");
    });
  });

  window.addEventListener("scroll", function () {
    backToTop.classList.toggle("visible", window.scrollY > 300);

    const sections = document.querySelectorAll("section");
    let current = "";

    sections.forEach((section) => {
      if (pageYOffset >= section.offsetTop - 300) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${current}`
      );
    });

    document.querySelector("header").style.boxShadow =
      window.scrollY > 0 ? "0 5px 15px rgba(0, 0, 0, 0.1)" : "none";
  });

  function animateSkillBoxes() {
    const skillsSection = document.querySelector(".skills");
    const skillBoxes = document.querySelectorAll(".skill-box");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            skillBoxes.forEach((box, index) => {
              setTimeout(() => {
                box.style.opacity = 1;
                box.style.transform = "translateY(0)";
              }, 100 * index);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(skillsSection);
  }

  const skillBoxes = document.querySelectorAll(".skill-box");
  skillBoxes.forEach((box) => {
    Object.assign(box.style, {
      opacity: 0,
      transform: "translateY(20px)",
      transition: "opacity 0.5s ease, transform 0.5s ease",
    });
  });

  animateSkillBoxes();
});
