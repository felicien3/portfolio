// Current language
let currentLang = "en";

// DOM Elements
const langButtons = document.querySelectorAll(".lang-btn");
const translateElements = document.querySelectorAll("[data-key]");
const themeToggle = document.getElementById("themeToggle");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");
const downloadCVButtons = document.querySelectorAll(
  "#downloadCV, #downloadCVBottom"
);
const contactForm = document.getElementById("contactForm");

// Language Switching
function switchLanguage(lang) {
  currentLang = lang;

  // Update active button
  langButtons.forEach((btn) => {
    if (btn.dataset.lang === lang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Update HTML lang attribute
  document.getElementById("main-html").setAttribute("lang", lang);

  // Update text direction for RTL languages if needed
  if (lang === "rw") {
    document.body.classList.add("rw-font");
  } else {
    document.body.classList.remove("rw-font");
  }

  // Update all translatable elements
  translateElements.forEach((element) => {
    const key = element.getAttribute("data-key");
    if (translations[lang] && translations[lang][key]) {
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        element.placeholder = translations[lang][key];
      } else if (
        element.tagName === "SPAN" &&
        element.parentElement.classList.contains("hero-title")
      ) {
        // Handle special case for hero title span
        element.innerHTML = translations[lang][key];
      } else {
        element.innerHTML = translations[lang][key];
      }
    }
  });
}

// Theme Toggle
function toggleTheme() {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
}

// Mobile Menu Toggle
function toggleMobileMenu() {
  navMenu.classList.toggle("active");
}

// Active Link Highlight
function setActiveLink() {
  const scrollPosition = window.scrollY + 100;

  navLinks.forEach((link) => {
    const section = document.querySelector(link.hash);
    if (section) {
      if (
        scrollPosition >= section.offsetTop &&
        scrollPosition < section.offsetTop + section.offsetHeight
      ) {
        link.classList.add("active-link");
      } else {
        link.classList.remove("active-link");
      }
    }
  });
}

// Download CV
function downloadCV() {
  // In a real implementation, this would link to an actual PDF file
  alert(
    currentLang === "en"
      ? "CV download will start shortly. In a real implementation, this would download the PDF file."
      : "CV izatangira gukururwa. Mu bikorwa by'ukuri, iyi PDF yari gukururwa."
  );

  // Create and trigger download
  const cvContent = generateCVText();
  const blob = new Blob([cvContent], { type: "text/plain" });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "Felicien_Niyonsenga_CV.txt";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}

// Form Submission
function handleFormSubmit(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  if (name && email && subject && message) {
    alert(
      currentLang === "en"
        ? `Thank you ${name}! Your message has been sent. I'll get back to you soon at ${email}.`
        : `Murakoze ${name}! Ubutumwa bwawe bwagiye. Nzagaruka kuri ${email} vuba.`
    );

    contactForm.reset();
  } else {
    alert(
      currentLang === "en"
        ? "Please fill in all fields before submitting."
        : "Nyamuneka uzuzuhe imirongo yose mbere yo kohereza."
    );
  }
}

// Smooth Scrolling
function smoothScroll(e) {
  e.preventDefault();
  const targetId = this.getAttribute("href");
  const targetSection = document.querySelector(targetId);

  if (targetSection) {
    window.scrollTo({
      top: targetSection.offsetTop - 80,
      behavior: "smooth",
    });

    // Close mobile menu if open
    navMenu.classList.remove("active");
  }
}

// Generate CV Text Content
function generateCVText() {
  return `FELICIEN NIYONSENGA
====================================
IT Professional & Software Developer
Kigali City, Nyarugenge District, Rwanda
+250 782 076 805 | +250 734 525 852
niyonsengafelicien11@gmail.com

EDUCATION
---------
Diploma in Information Technology (2023-2025)
RP Kigali College

Advanced Level Certificate in Software Development (2019-2022)
Groupe Scolaire Notre Dame de la Paix Cyanika

Ordinary Level Certificate (2015-2017)
G.S Nkumbure

PROFESSIONAL EXPERIENCE
-----------------------
IT Intern - Muhima District Hospital (July 2025 - September 2025)
- Supported IT operations and systems maintenance
- Assisted in troubleshooting technical issues
- Participated in system implementation projects

Cashier - Health Center of Muhima (November 2024 - July 2025)
- Managed financial transactions and payment processing
- Maintained accurate financial records
- Provided customer service to patients

Data Entry Specialist - Health Center of Muhima (November 2023 - February 2024)
- Entered and maintained patient data in health information systems
- Ensured data accuracy and confidentiality
- Generated reports for administrative purposes

Software Development Intern - SALTEL Company (April 2022)
- Developed web applications using PHP
- Collaborated with team members on project deliverables
- Applied programming skills to real-world business solutions

ICT Intern - Nyamagabe District (August 2019 - September 2019)
- Assisted with IT support and maintenance
- Gained exposure to government IT infrastructure

TECHNICAL SKILLS
----------------
Programming Languages: PHP, Java, JavaScript, Python
Web Development: HTML, CSS, JavaScript, React, Node.js, PHP
Application Development: Mobile Apps (Java), Desktop Apps (Java)
Database & Systems: Database Design, Computer Networking, Microsoft Office
IT Skills: Computer Maintenance, Troubleshooting, System Implementation

CERTIFICATIONS
--------------
- HTML & CSS Certificate
- JavaScript Certificate
- Intermediate English Certificate

CORE COMPETENCIES
-----------------
Leadership, Effective Communication, Entrepreneurship, Problem-Solving,
Environmental Awareness, Safety Protocols, Collaborative Teamwork

LANGUAGES
---------
Kinyarwanda: Native
English: Fluent
French: Basic

REFERENCES
----------
Available upon request

DECLARATION
-----------
I, Felicien Niyonsenga, declare that all information provided in this CV is accurate and complete to the best of my knowledge.`;
}

// Initialize
function init() {
  // Set initial theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }

  // Event Listeners
  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => switchLanguage(btn.dataset.lang));
  });

  themeToggle.addEventListener("click", toggleTheme);
  mobileMenuBtn.addEventListener("click", toggleMobileMenu);
  downloadCVButtons.forEach((btn) => btn.addEventListener("click", downloadCV));
  contactForm.addEventListener("submit", handleFormSubmit);
  navLinks.forEach((link) => link.addEventListener("click", smoothScroll));

  window.addEventListener("scroll", setActiveLink);

  // Set initial active link
  setActiveLink();
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", init);

// Update downloadCV function to use actual PDF
function downloadCV() {
  // Link to actual PDF file
  const link = document.createElement("a");
  link.href = "assets/downloads/Felicien_Niyonsenga_CV.pdf";
  link.download = "Felicien_Niyonsenga_CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
