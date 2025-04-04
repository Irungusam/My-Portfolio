document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.getElementById("mobile-menu");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const backToTop = document.getElementById("back-to-top");
  const contactForm = document.getElementById("contact-form");
  const formMessage = document.getElementById("form-message");
  
  const projectCards = document.querySelectorAll(".project-card");
  const downloadCvBtn = document.getElementById("download-cv");

  mobileMenu.onclick = function () {
    navMenu.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  };

  navLinks.forEach((link) => {
    link.onclick = function () {
      navMenu.classList.remove("active");
      mobileMenu.classList.remove("active");
      navLinks.forEach((navLink) => navLink.classList.remove("active"));
      link.classList.add("active");
    };
  });

  window.onscroll = function () {
    backToTop.classList.toggle("visible", window.scrollY > 300);
    document.querySelector("header").style.boxShadow =
      window.scrollY > 0 ? "0 5px 15px rgba(0, 0, 0, 0.1)" : "none";
  };

  
  if (contactForm) {
    contactForm.onsubmit = function (e) {
      e.preventDefault();
      let name = document.getElementById("name").value.trim();
      let email = document.getElementById("email").value.trim();
      let subject = document.getElementById("subject").value.trim();
      let message = document.getElementById("message").value.trim();

      if (!name || !email || !subject || !message) {
        showMessage("Please fill in all fields", "error");
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showMessage("Please enter a valid email", "error");
        return;
      }

      showMessage("Message sent successfully!", "success");
      contactForm.reset();
      setTimeout(() => (formMessage.style.display = "none"), 5000);
    };
  }

  function showMessage(msg, type) {
    formMessage.textContent = msg;
    formMessage.className = type;
    formMessage.style.display = "block";
  }

  if (downloadCvBtn) {
    downloadCvBtn.onclick = function (e) {
      e.preventDefault();
      const link = document.createElement("a");
      link.href = "./assets/resume.pdf";
      link.download = "Sam_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  }

  window.addEventListener("scroll", function () {
    let skillSection = document.querySelector(".skills");
    let skillLevels = document.querySelectorAll(".skill-level");
    if (skillSection.getBoundingClientRect().top < window.innerHeight / 1.3) {
      skillLevels.forEach(
        (level) => (level.style.width = level.getAttribute("data-level"))
      );
    }
  });
});
