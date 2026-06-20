(function () {
  "use strict";

  function wireMobileMenu() {
    var toggle = document.getElementById("menu-toggle");
    var menu = document.getElementById("mobile-menu");
    if (!toggle || !menu) return;

    toggle.addEventListener("click", function () {
      var isOpen = menu.classList.toggle("flex");
      menu.classList.toggle("hidden");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.add("hidden");
        menu.classList.remove("flex");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function wireHeaderOnScroll() {
    var header = document.getElementById("site-header");
    if (!header) return;

    function update() {
      if (window.scrollY > 24) {
        header.classList.add("bg-cream-50/90", "backdrop-blur-md", "shadow-sm");
        header.classList.remove("bg-transparent");
      } else {
        header.classList.remove("bg-cream-50/90", "backdrop-blur-md", "shadow-sm");
        header.classList.add("bg-transparent");
      }
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  function wireCategoryFilter() {
    var pills = document.querySelectorAll("[data-filter]");
    var cards = document.querySelectorAll("[data-category]");
    if (!pills.length || !cards.length) return;

    pills.forEach(function (pill) {
      pill.addEventListener("click", function () {
        pills.forEach(function (p) {
          p.classList.remove("bg-rose-600", "text-cream-50");
          p.classList.add("bg-cream-100", "text-plum-700");
        });
        pill.classList.add("bg-rose-600", "text-cream-50");
        pill.classList.remove("bg-cream-100", "text-plum-700");

        var filter = pill.getAttribute("data-filter");
        cards.forEach(function (card) {
          var show = filter === "todos" || card.getAttribute("data-category") === filter;
          card.classList.toggle("hidden", !show);
        });
      });
    });
  }

  function wireRevealOnScroll() {
    var items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || !items.length) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    items.forEach(function (el) { observer.observe(el); });
  }

  document.addEventListener("DOMContentLoaded", function () {
    wireMobileMenu();
    wireHeaderOnScroll();
    wireCategoryFilter();
    wireRevealOnScroll();
  });
})();
