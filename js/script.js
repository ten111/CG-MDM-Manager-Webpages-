/**
 * CG MDM Manager - Official Static Website Scripts
 * Clean, lightweight vanilla JavaScript
 */

// ==========================================================================
// CONFIGURATION
// Replace '#download' with your actual Google Play Store URL when available.
// Example: 'https://play.google.com/store/apps/details?id=com.ekosh.cgmdmmanager'
// ==========================================================================
const APP_DOWNLOAD_URL = "#download";

document.addEventListener("DOMContentLoaded", () => {
  initDownloadButtons();
  initMobileMenu();
  initContactForm();
  initSmoothScroll();
});

/**
 * Configure all download triggers across the site to use APP_DOWNLOAD_URL
 */
function initDownloadButtons() {
  const downloadButtons = document.querySelectorAll("[data-download-btn], a[href='#download']");
  const modal = document.getElementById("downloadModal");
  const closeModalBtn = document.getElementById("closeModalBtn");
  const modalAcknowledgeBtn = document.getElementById("modalAcknowledgeBtn");

  downloadButtons.forEach((btn) => {
    btn.setAttribute("href", APP_DOWNLOAD_URL);

    // If still set to placeholder, show friendly guidance modal on click
    btn.addEventListener("click", (e) => {
      if (APP_DOWNLOAD_URL === "#download" || !APP_DOWNLOAD_URL.startsWith("http")) {
        e.preventDefault();
        openModal();
      }
    });
  });

  function openModal() {
    if (modal) {
      modal.classList.add("is-active");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }
  }

  function closeModal() {
    if (modal) {
      modal.classList.remove("is-active");
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }
  }

  if (closeModalBtn) closeModalBtn.addEventListener("click", closeModal);
  if (modalAcknowledgeBtn) modalAcknowledgeBtn.addEventListener("click", closeModal);

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // Escape key to close modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.classList.contains("is-active")) {
      closeModal();
    }
  });
}

/**
 * Mobile navigation menu toggle and accessibility
 */
function initMobileMenu() {
  const menuBtn = document.getElementById("mobileMenuBtn");
  const mobileNav = document.getElementById("mobileNav");

  if (!menuBtn || !mobileNav) return;

  menuBtn.addEventListener("click", () => {
    const isExpanded = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", String(!isExpanded));
    mobileNav.classList.toggle("is-open");
  });

  // Close mobile nav when clicking any link inside
  const mobileLinks = mobileNav.querySelectorAll("a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuBtn.setAttribute("aria-expanded", "false");
      mobileNav.classList.remove("is-open");
    });
  });

  // Close on outside click
  document.addEventListener("click", (e) => {
    if (
      mobileNav.classList.contains("is-open") &&
      !mobileNav.contains(e.target) &&
      !menuBtn.contains(e.target)
    ) {
      menuBtn.setAttribute("aria-expanded", "false");
      mobileNav.classList.remove("is-open");
    }
  });
}

/**
 * Static contact form handler
 * Validates fields and provides client-side submission feedback / mailto fallback
 */
function initContactForm() {
  const form = document.getElementById("contactForm");
  const alertBox = document.getElementById("formAlert");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.elements["name"]?.value.trim();
    const email = form.elements["email"]?.value.trim();
    const phone = form.elements["phone"]?.value.trim();
    const subject = form.elements["subject"]?.value.trim() || "CG MDM Manager Inquiry";
    const message = form.elements["message"]?.value.trim();

    if (!name || !email || !message) {
      if (alertBox) {
        alertBox.className = "form-alert";
        alertBox.style.display = "block";
        alertBox.style.backgroundColor = "#FEE2E2";
        alertBox.style.color = "#DC2626";
        alertBox.style.border = "1px solid #FCA5A5";
        alertBox.textContent = "Please fill in all required fields (Name, Email, Message).";
      }
      return;
    }

    // Prepare mailto link for direct static submission
    const mailtoSubject = encodeURIComponent(`[CG MDM Manager Inquiry] ${subject}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\n\nMessage:\n${message}`
    );
    const targetEmail = "cgmdmmanager@gmail.com";
    const mailtoUrl = `mailto:${targetEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;

    // Show visual confirmation on page
    if (alertBox) {
      alertBox.className = "form-alert form-alert-success is-visible";
      alertBox.style.display = "block";
      alertBox.style.backgroundColor = "#DCFCE7";
      alertBox.style.color = "#16A34A";
      alertBox.style.border = "1px solid #86EFAC";
      alertBox.innerHTML = `
        <strong>Thank you, ${escapeHtml(name)}!</strong><br>
        Your inquiry has been prepared. Your email client will now open to send this message to <em>${targetEmail}</em>. If your email client does not open automatically, you can email us directly at <a href="mailto:${targetEmail}" style="text-decoration:underline; font-weight:bold;">${targetEmail}</a>.
      `;
    }

    // Trigger mail client
    window.location.href = mailtoUrl;
    form.reset();
  });
}

function escapeHtml(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}

/**
 * Smooth scrolling for in-page anchors
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]:not([href="#"]):not([href="#download"])').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}
