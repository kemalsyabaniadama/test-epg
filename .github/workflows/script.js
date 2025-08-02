window.addEventListener('DOMContentLoaded', function () {
  var openBtn = document.getElementById("mobile-menu-btn");
  var closeBtn = document.getElementById("close-menu-btn");
  var mobileMenu = document.getElementById("mobile-menu");

  if (openBtn && closeBtn && mobileMenu) {
    openBtn.addEventListener("click", function () {
      mobileMenu.classList.remove("-translate-x-full");
      mobileMenu.classList.add("translate-x-0");
    });

    closeBtn.addEventListener("click", function () {
      mobileMenu.classList.remove("translate-x-0");
      mobileMenu.classList.add("-translate-x-full");
    });
  }

  var smoothAnchors = document.querySelectorAll('a[href^="#"]');
  for (var i = 0; i < smoothAnchors.length; i++) {
    smoothAnchors[i].addEventListener("click", function (e) {
      e.preventDefault();
      var target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  var dropdownToggles = document.querySelectorAll("[data-dropdown-toggle]");
  for (var j = 0; j < dropdownToggles.length; j++) {
    dropdownToggles[j].addEventListener("click", function () {
      var dropdownId = this.getAttribute("data-dropdown-toggle");
      var dropdown = document.getElementById(dropdownId);
      if (dropdown) {
        dropdown.classList.toggle("hidden");
      }
    });
  }

  var accordionButtons = document.querySelectorAll("[data-accordion-toggle]");
  for (var k = 0; k < accordionButtons.length; k++) {
    accordionButtons[k].addEventListener("click", function () {
      var targetId = this.getAttribute("data-accordion-toggle");
      var target = document.getElementById(targetId);
      if (target) {
        target.classList.toggle("hidden");
      }
    });
  }

  var tabs = document.querySelectorAll("[data-tab-target]");
  var tabContents = document.querySelectorAll("[data-tab-content]");

  for (var l = 0; l < tabs.length; l++) {
    tabs[l].addEventListener("click", function () {
      var targetId = this.getAttribute("data-tab-target");

      for (var m = 0; m < tabContents.length; m++) {
        tabContents[m].classList.add("hidden");
      }

      var activeTab = document.querySelector('[data-tab-content="' + targetId + '"]');
      if (activeTab) {
        activeTab.classList.remove("hidden");
      }
    });
  }
});